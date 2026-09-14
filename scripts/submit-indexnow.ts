// Run this manually or via a cron job AFTER deployment using:
// npx tsx scripts/submit-indexnow.ts

async function submitIndexNow() {
  const host = 'eleviewer.vercel.app';
  const key = 'f7823906cc074b59be68c5a5dfbcde8c';
  const keyLocation = `https://${host}/${key}.txt`;
  
  try {
    console.log(`Fetching sitemap from https://${host}/sitemap.xml...`);
    const sitemapRes = await fetch(`https://${host}/sitemap.xml`);
    if (!sitemapRes.ok) {
      throw new Error(`Failed to fetch sitemap: ${sitemapRes.status}`);
    }
    const sitemapXml = await sitemapRes.text();
    
    // Simple regex to extract <loc> URLs
    const urlMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g);
    if (!urlMatches) {
      console.log('No URLs found in sitemap');
      return;
    }
    
    const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
    console.log(`Found ${urls.length} URLs. Submitting to IndexNow...`);
    
    const indexNowPayload = {
      host,
      key,
      keyLocation,
      urlList: urls,
    };

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(indexNowPayload),
    });

    if (response.ok) {
      console.log('✅ Successfully submitted URLs to IndexNow!');
    } else {
      console.error(`❌ IndexNow error: ${response.status} ${await response.text()}`);
    }
  } catch (error) {
    console.error('❌ Failed to submit to IndexNow:', error);
  }
}

submitIndexNow();
