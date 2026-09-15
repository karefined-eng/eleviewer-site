import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://api.github.com/repos/karefined-eng/eleviewer/releases/latest', {
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!res.ok) {
      // Fallback to the releases page if GitHub API is rate-limited or fails
      return NextResponse.redirect('https://github.com/karefined-eng/eleviewer/releases/latest');
    }
    
    const data = await res.json();
    const exeAsset = data.assets?.find((asset: any) => asset.name.endsWith('.exe'));
    
    if (exeAsset && exeAsset.browser_download_url) {
      return NextResponse.redirect(exeAsset.browser_download_url);
    }
    
    // Fallback if no .exe asset is found in the latest release
    return NextResponse.redirect(data.html_url || 'https://github.com/karefined-eng/eleviewer/releases/latest');
    
  } catch (error) {
    // Failsafe fallback
    return NextResponse.redirect('https://github.com/karefined-eng/eleviewer/releases/latest');
  }
}
