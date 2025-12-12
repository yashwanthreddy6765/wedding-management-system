'use client';

import { useState } from 'react';
import Image from 'next/image';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { id: 1, title: 'Bride & Groom', category: 'couple', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop', likes: 234 },
    { id: 2, title: 'First Dance', category: 'reception', image: 'https://images.unsplash.com/photo-1519215416584-06b9670a8073?w=500&h=500&fit=crop', likes: 189 },
    { id: 3, title: 'Ceremony Details', category: 'ceremony', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=500&fit=crop', likes: 156 },
    { id: 4, title: 'Flower Arrangements', category: 'decor', image: 'https://images.unsplash.com/photo-1508699040989-a2bdef4d4d60?w=500&h=500&fit=crop', likes: 198 },
    { id: 5, title: 'Reception Venue', category: 'venue', image: 'https://images.unsplash.com/photo-1519957486749-3d91e63ebf60?w=500&h=500&fit=crop', likes: 212 },
    { id: 6, title: 'Cake Cutting', category: 'reception', image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop', likes: 245 },
    { id: 7, title: 'Bouquet Details', category: 'details', image: 'https://images.unsplash.com/photo-1519241978889-7d1c14e3d245?w=500&h=500&fit=crop', likes: 167 },
    { id: 8, title: 'Guest Candids', category: 'candid', image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=500&fit=crop', likes: 201 },
    { id: 9, title: 'Sunset Portraits', category: 'couple', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=500&fit=crop', likes: 289 },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.category === filter);
  const categories = ['all', 'couple', 'ceremony', 'reception', 'venue', 'decor', 'details', 'candid'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Wedding Gallery</h1>
          <p className="text-pink-100 text-lg">Beautiful moments from your special day</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Filter Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filter === category
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-pink-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-full group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">{photo.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">
                      {photo.category}
                    </span>
                    <span className="text-white text-sm">❤️ {photo.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gallery Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">{photos.length}</div>
              <div className="text-gray-600">Total Photos</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg">
              <div className="text-4xl font-bold text-rose-600 mb-2">{photos.length}+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg">
              <div className="text-4xl font-bold text-pink-500 mb-2">{photos.reduce((sum, p) => sum + p.likes, 0)}</div>
              <div className="text-gray-600">Total Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
