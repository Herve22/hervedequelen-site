import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    const files = await readdir(imagesDir);
    
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        filename: file,
        path: `/images/${file}`,
        name: file.replace(/\.[^/.]+$/, '')
      }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Erreur lecture images:', error);
    return NextResponse.json({ images: [], error: 'Erreur lecture dossier' });
  }
}
