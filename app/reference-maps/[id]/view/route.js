import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET /reference-maps/[id]/view
// Renders a simple HTML viewer page on your domain that embeds the stored URL (Cloudinary or otherwise).
export async function GET(request) {
  // Fallback: derive id from the URL path instead of relying on params
  const url = new URL(request.url);
  const segments = url.pathname.split('/').filter(Boolean); // ["reference-maps", "<id>", "view"]
  const id = segments[1];

  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db('geology_db');
  const collection = db.collection('reference_maps');
  const item = await collection.findOne({ id });

  if (!item) {
    return NextResponse.json({ error: 'Map not found' }, { status: 404 });
  }

  const target = item.viewUrl || item.downloadUrl;
  if (!target) {
    return NextResponse.json({ error: 'No URL stored for this map' }, { status: 500 });
  }

  const title = item.title || 'Reference Map';

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { margin: 0; background: #050908; color: #f9fafb; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      .wrapper { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: 16px; box-sizing: border-box; }
      h1 { font-size: 1.25rem; margin-bottom: 1rem; text-align: center; }
      img, iframe { max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.6); }
      .link { margin-top: 1rem; font-size: 0.8rem; }
      a { color: #facc15; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <h1>${title}</h1>
      <img src="${target}" alt="${title}" />
      <div class="link">
        <a href="${target}" target="_blank" rel="noopener noreferrer">Open original file</a>
      </div>
    </div>
  </body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
