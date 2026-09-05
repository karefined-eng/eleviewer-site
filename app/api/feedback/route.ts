import { NextResponse } from 'next/server';

const MAX_BODY_BYTES = 24_000;
const MAX_DESCRIPTION_LENGTH = 8_000;
const MAX_CONTEXT_LENGTH = 120;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestsByIp = new Map<string, { count: number; resetAt: number }>();
const allowedTypes = new Set(['Bug Report', 'Feature Request', 'General Feedback']);

function getClientIp(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function scrub(value: string, maxLength: number) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/(?:[A-Z]:\\Users\\|\/Users\/|\/home\/)[^\s\\/]+/gi, '[local path]')
    .slice(0, maxLength)
    .trim();
}

async function githubFetch(url: string, init: RequestInit) {
  return fetch(url, { ...init, signal: AbortSignal.timeout(8_000) });
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ success: false, error: 'Request origin is not allowed.' }, { status: 403 });
  }

  const ip = getClientIp(request);
  const now = Date.now();
  const current = requestsByIp.get(ip);
  if (current && current.resetAt > now && current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return NextResponse.json({ success: false, error: 'Too many submissions. Please try again later.' }, { status: 429, headers: { 'Retry-After': String(Math.ceil((current.resetAt - now) / 1000)) } });
  }
  requestsByIp.set(ip, current && current.resetAt > now
    ? { count: current.count + 1, resetAt: current.resetAt }
    : { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });

  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ success: false, error: 'Submission is too large.' }, { status: 413 });
    }

    const data = await request.json();
    if (data.website) return NextResponse.json({ success: true });
    if (!data || typeof data !== 'object' || !allowedTypes.has(data.type) || typeof data.description !== 'string' || !data.description.trim()) {
      return NextResponse.json({ success: false, error: 'Please provide valid feedback.' }, { status: 400 });
    }
    if (data.description.length > MAX_DESCRIPTION_LENGTH) {
      return NextResponse.json({ success: false, error: 'Please keep feedback under 8,000 characters.' }, { status: 400 });
    }

    const type = data.type as string;
    const description = scrub(data.description, MAX_DESCRIPTION_LENGTH);
    const version = scrub(typeof data.version === 'string' ? data.version : 'Web Form', MAX_CONTEXT_LENGTH);
    const osName = scrub(typeof data.os_name === 'string' ? data.os_name : 'Web Browser', MAX_CONTEXT_LENGTH);
    const platform = scrub(typeof data.platform === 'string' ? data.platform : 'Unknown', MAX_CONTEXT_LENGTH);
    const token = process.env.GITHUB_PAT;
    if (!token) {
      console.error('Feedback endpoint is unavailable: GITHUB_PAT is not configured.');
      return NextResponse.json({ success: false, error: 'Feedback is temporarily unavailable. Please try again later.' }, { status: 503 });
    }

    let issueTitle = `[${type}] Feedback from App (v${version})`;
    let errSignature = '';
    if (description.includes('Traceback (most recent call last)')) {
      const lastLine = description.trim().split('\n').filter((line) => line.trim()).pop() || '';
      if (lastLine.includes('Error:') || lastLine.includes('Exception:')) {
        errSignature = lastLine.trim().slice(0, 180);
        issueTitle = `[Bug] ${errSignature} (v${version})`;
      }
    }

    const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json', 'User-Agent': 'EleViewer-Feedback-Bot' };
    if (errSignature) {
      try {
        const query = encodeURIComponent(`repo:karefined-eng/eleviewer is:issue is:open "${errSignature}"`);
        const searchRes = await githubFetch(`https://api.github.com/search/issues?q=${query}`, { headers });
        if (searchRes.ok) {
          const searchData = await searchRes.json();
          const existingIssue = searchData.items?.[0];
          if (existingIssue?.comments_url) {
            const commentBody = `**Additional crash report**\n\n**Version**: ${version}\n**OS**: ${osName} (${platform})\n**Reported**: ${new Date().toISOString()}\n\n\`\`\`text\n${description}\n\`\`\``;
            const commentRes = await githubFetch(existingIssue.comments_url, { method: 'POST', headers, body: JSON.stringify({ body: commentBody }) });
            if (commentRes.ok) return NextResponse.json({ success: true, deduplicated: true, issue_number: existingIssue.number });
          }
        }
      } catch (error) {
        console.warn('Feedback deduplication failed; creating a new issue.', error instanceof Error ? error.message : 'unknown error');
      }
    }

    const body = `**Version**: ${version}\n**OS**: ${osName} (${platform})\n**Reported**: ${new Date().toISOString()}\n\n**Description**:\n${description}`;
    const githubRes = await githubFetch('https://api.github.com/repos/karefined-eng/eleviewer/issues', { method: 'POST', headers, body: JSON.stringify({ title: issueTitle, body, labels: [type === 'Bug Report' ? 'bug' : 'feedback', 'auto-telemetry'] }) });
    if (!githubRes.ok) {
      const status = githubRes.status === 403 || githubRes.status === 429 ? 503 : 502;
      console.error('GitHub feedback submission failed with status', githubRes.status);
      return NextResponse.json({ success: false, error: 'Feedback could not be submitted. Please try again later.' }, { status });
    }
    const createdIssue = await githubRes.json();
    return NextResponse.json({ success: true, issue_number: createdIssue.number });
  } catch (error) {
    console.error('Feedback endpoint error:', error instanceof Error ? error.message : 'unknown error');
    return NextResponse.json({ success: false, error: 'Invalid request payload.' }, { status: 400 });
  }
}

