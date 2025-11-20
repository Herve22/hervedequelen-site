'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageFile {
  filename: string;
  path: string;
  name: string;
}

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState<ImageFile[]>([]);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const recommendedNames = [
    { name: 'herve-hero', desc: 'Photo principale page d\'accueil' },
    { name: 'herve-apropos', desc: 'Photo page À propos' },
    { name: 'projet-remus', desc: 'Capture Projet REMUS' },
    { name: 'restodemo', desc: 'Capture RestoDemo' },
    { name: 'maitrea', desc: 'Capture Maitrea' },
    { name: 'payaddict', desc: 'Capture PayAddict' },
    { name: 'divaskell', desc: 'Capture Divaskell' },
  ];

  const loadImages = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/images', { cache: 'no-store' });
      const data = await res.json();
      setImages(data.images || []);
    } catch (error) {
      console.error('Erreur chargement images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Photo uploadée avec succès : ' + data.filename);
        (e.target as HTMLFormElement).reset();
        
        // Attendre 500ms puis recharger
        setTimeout(() => {
          loadImages();
        }, 500);
      } else {
        setMessage('❌ Erreur : ' + data.error);
      }
    } catch (error) {
      setMessage('❌ Erreur lors de l\'upload');
    } finally {
      setUploading(false);
    }
  };

  const imageExists = (name: string) => {
    return images.some(img => img.name === name);
  };

  const getImagePath = (name: string) => {
    const img = images.find(img => img.name === name);
    return img?.path;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              📸 Upload de photos
            </h1>
            <button
              onClick={loadImages}
              disabled={loading}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? '⏳' : '🔄'} Rafraîchir
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
              <label htmlFor="file" className="block text-lg font-semibold text-gray-700 mb-2">
                Choisir une photo
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="filename" className="block text-lg font-semibold text-gray-700 mb-2">
                Nom du fichier (sans extension)
              </label>
              <input
                type="text"
                id="filename"
                name="filename"
                placeholder="Ex: herve-hero"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              {uploading ? '⏳ Upload en cours...' : '📤 Uploader la photo'}
            </button>

            {message && (
              <div className={`p-4 rounded-lg ${message.startsWith('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {message}
              </div>
            )}
          </form>

          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-4 text-xl">💡 Noms recommandés :</h3>
            <div className="space-y-3">
              {recommendedNames.map((item) => {
                const exists = imageExists(item.name);
                const imagePath = getImagePath(item.name);
                
                return (
                  <div 
                    key={item.name}
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow relative cursor-pointer"
                    onMouseEnter={() => exists && setHoveredImage(imagePath || null)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-3 h-3 rounded-full ${exists ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <div>
                        <span className="font-mono font-bold text-blue-900">{item.name}</span>
                        <span className="text-gray-600 text-sm ml-2">- {item.desc}</span>
                      </div>
                    </div>
                    
                    {exists && imagePath && (
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 text-sm font-semibold">✓ Présente</span>
                        <div className="w-12 h-12 relative rounded overflow-hidden border-2 border-green-500">
                          <Image
                            src={imagePath}
                            alt={item.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {hoveredImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8 cursor-pointer"
          onClick={() => setHoveredImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={hoveredImage}
              alt="Aperçu"
              width={1200}
              height={1200}
              className="object-contain max-h-screen rounded-lg"
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
}
