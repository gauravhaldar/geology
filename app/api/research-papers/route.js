import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db('geology_db');
    const collection = db.collection('research_papers');

    const paper = {
      ...body,
      uploadDate: new Date(),
      createdAt: new Date(),
    };

    const result = await collection.insertOne(paper);

    return NextResponse.json(
      { success: true, id: result.insertedId, paper },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving research paper:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('geology_db');
    const collection = db.collection('research_papers');

    const papers = await collection
      .find({})
      .sort({ uploadDate: -1 })
      .toArray();

    return NextResponse.json(
      { success: true, papers },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching research papers:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
