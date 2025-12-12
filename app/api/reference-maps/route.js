import { NextResponse } from 'next/server';
import crypto from 'crypto';
import clientPromise from '@/lib/mongodb';

// GET /api/reference-maps
// Returns all stored uploaded maps from MongoDB
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('geology_db');
    const collection = db.collection('reference_maps');

    const items = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, items }, { status: 200 });
  } catch (err) {
    console.error('Error reading reference maps:', err);
    return NextResponse.json({ success: false, error: 'Failed to load maps' }, { status: 500 });
  }
}

// POST /api/reference-maps
// Expects multipart/form-data with fields:
// - file: the map image/PDF
// - title, category, description (optional metadata for client use only)
export async function POST(request) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        { error: 'Cloudinary environment variables are not configured.' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Build signed upload payload
    const timestamp = Math.floor(Date.now() / 1000);
    const uploadPreset = formData.get('upload_preset') || undefined;

    const paramsToSign = new URLSearchParams();
    paramsToSign.append('timestamp', String(timestamp));
    if (uploadPreset) paramsToSign.append('upload_preset', String(uploadPreset));

    const toSign = paramsToSign.toString() + apiSecret;
    const signature = crypto
      .createHash('sha1')
      .update(toSign)
      .digest('hex');

    const cloudinaryForm = new FormData();
    cloudinaryForm.append('file', new Blob([buffer]));
    cloudinaryForm.append('api_key', apiKey);
    cloudinaryForm.append('timestamp', String(timestamp));
    cloudinaryForm.append('signature', signature);
    if (uploadPreset) cloudinaryForm.append('upload_preset', String(uploadPreset));

    const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
      method: 'POST',
      body: cloudinaryForm,
    });

    if (!uploadRes.ok) {
      const errorBody = await uploadRes.text();
      return NextResponse.json(
        { error: 'Cloudinary upload failed', details: errorBody },
        { status: 500 }
      );
    }

    const data = await uploadRes.json();

    const formTitle = formData.get('title');
    const formCategory = formData.get('category');
    const formDescription = formData.get('description');

    const storedItem = {
      id: data.public_id,
      title: typeof formTitle === 'string' && formTitle.trim() ? formTitle.trim() : 'Untitled Map',
      category: typeof formCategory === 'string' && formCategory.trim() ? formCategory.trim() : 'Maps',
      description:
        typeof formDescription === 'string' && formDescription.trim()
          ? formDescription.trim()
          : 'User-uploaded reference map.',
      viewUrl: data.secure_url,
      downloadUrl: data.secure_url,
      cloudinaryPublicId: data.public_id,
      cloudinaryResourceType: data.resource_type,
      createdAt: new Date(),
    };

    const client = await clientPromise;
    const db = client.db('geology_db');
    const collection = db.collection('reference_maps');
    await collection.insertOne(storedItem);

    return NextResponse.json({ success: true, item: storedItem }, { status: 200 });
  } catch (err) {
    console.error('Error uploading to Cloudinary:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
