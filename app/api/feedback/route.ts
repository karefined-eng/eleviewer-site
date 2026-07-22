import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { type, description, version, os_name, platform } = data;

    // We use the GitHub API to create an issue if GITHUB_PAT is provided in Vercel Env Vars.
    const token = process.env.GITHUB_PAT;
    
    if (!token) {
      // If no token is configured, we just log it so it's not lost.
      // In production, add GITHUB_PAT to the Vercel Environment Variables.
      console.log("Feedback received (No GITHUB_PAT configured):", data);
      return NextResponse.json({ success: true, message: "Feedback logged securely on server." }, { status: 200 });
    }

    const title = `[${type}] Feedback from App (v${version})`;
    const body = `**Version**: ${version}\n**OS**: ${os_name} (${platform})\n\n**Description**:\n${description}`;

    const githubRes = await fetch("https://api.github.com/repos/karefined-eng/eleviewer/issues", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        body
      })
    });

    if (!githubRes.ok) {
      console.error("GitHub API Error:", await githubRes.text());
      return NextResponse.json({ success: false, error: "Failed to forward to GitHub" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Feedback endpoint error:", error);
    return NextResponse.json({ success: false, error: "Invalid request payload" }, { status: 400 });
  }
}
