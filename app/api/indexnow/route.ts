import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { urls, secret } = body;

    // Validate a secret token to prevent unauthorized submissions
    // In Vercel, you'd set INDEXNOW_SECRET in your environment variables
    if (secret !== process.env.INDEXNOW_SECRET && process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'Please provide an array of URLs' }, { status: 400 });
    }

    const host = 'eleviewer.vercel.app';
    const key = 'f7823906cc074b59be68c5a5dfbcde8c';
    const keyLocation = `https://${host}/${key}.txt`;

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
      return NextResponse.json({ success: true, message: 'URLs submitted to IndexNow successfully' });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: errorText, status: response.status }, { status: response.status });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
