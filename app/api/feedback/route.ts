import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { type, description, version, os_name, platform } = data;

    const token = process.env.GITHUB_PAT;
    
    if (!token) {
      console.log("Feedback received (No GITHUB_PAT configured):", data);
      return NextResponse.json({ success: true, message: "Feedback logged securely on server." }, { status: 200 });
    }

    // Extract crash signature from Python traceback if available
    let issueTitle = `[${type}] Feedback from App (v${version})`;
    let errSignature = "";
    
    if (description.includes("Traceback (most recent call last)")) {
      const lines = description.trim().split("\n");
      const lastLine = lines.filter((l: string) => l.trim().length > 0).pop() || "";
      if (lastLine.includes("Error:") || lastLine.includes("Exception:")) {
        errSignature = lastLine.trim();
        issueTitle = `[Bug] ${errSignature} (v${version})`;
      }
    }

    const headers = {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/vnd.github.v3+json",
      "Content-Type": "application/json",
      "User-Agent": "EleViewer-Feedback-Bot"
    };

    // If we have a specific error signature, check for existing open issues to deduplicate
    if (errSignature) {
      try {
        const query = encodeURIComponent(`repo:karefined-eng/eleviewer is:issue is:open "${errSignature}"`);
        const searchRes = await fetch(`https://api.github.com/search/issues?q=${query}`, { headers });
        
        if (searchRes.ok) {
          const searchData = await searchRes.json();
          if (searchData.items && searchData.items.length > 0) {
            const existingIssue = searchData.items[0];
            // Post a comment on the existing open issue instead of creating a duplicate!
            const commentBody = `⚠️ **Additional Crash Occurrence Reported**\n\n**Version**: ${version}\n**OS**: ${os_name} (${platform})\n**Timestamp**: ${new Date().toISOString()}\n\n\`\`\`python\n${description}\n\`\`\``;
            
            await fetch(existingIssue.comments_url, {
              method: "POST",
              headers,
              body: JSON.stringify({ body: commentBody })
            });

            return NextResponse.json({ success: true, deduplicated: true, issue_number: existingIssue.number }, { status: 200 });
          }
        }
      } catch (err) {
        console.warn("Deduplication search failed, falling back to new issue:", err);
      }
    }

    // Create a clean, new GitHub Issue
    const body = `**Version**: ${version}\n**OS**: ${os_name} (${platform})\n**Reported**: ${new Date().toISOString()}\n\n**Description**:\n${description}`;

    const githubRes = await fetch("https://api.github.com/repos/karefined-eng/eleviewer/issues", {
      method: "POST",
      headers,
      body: JSON.stringify({
        title: issueTitle,
        body,
        labels: [type === "Bug" ? "bug" : "feedback", "auto-telemetry"]
      })
    });

    if (!githubRes.ok) {
      console.error("GitHub API Error:", await githubRes.text());
      return NextResponse.json({ success: false, error: "Failed to forward to GitHub" }, { status: 500 });
    }

    const createdIssue = await githubRes.json();
    return NextResponse.json({ success: true, issue_number: createdIssue.number }, { status: 200 });
  } catch (error) {
    console.error("Feedback endpoint error:", error);
    return NextResponse.json({ success: false, error: "Invalid request payload" }, { status: 400 });
  }
}

