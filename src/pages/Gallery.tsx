
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  event: string;
  category: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Using placeholder images from the context
  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      alt: 'Team working on laptops',
      event: 'HackVita 3.0',
      category: 'hackathon'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=800&fit=crop',
      alt: 'Coding session',
      event: 'Linux Workshop',
      category: 'workshop'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=700&h=500&fit=crop',
      alt: 'Code on monitor',
      event: 'Git Masterclass',
      category: 'workshop'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=700&fit=crop',
      alt: 'Team collaboration',
      event: 'Open Source Drive',
      category: 'meetup'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=500&fit=crop',
      alt: 'Tech presentation',
      event: 'Cybersecurity Talk',
      category: 'talk'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=700&fit=crop',
      alt: 'Workshop participants',
      event: 'Python Workshop',
      category: 'workshop'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&h=600&fit=crop',
      alt: 'Hackathon winners',
      event: 'HackVita 2.0',
      category: 'hackathon'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=800&fit=crop',
      alt: 'Code review session',
      event: 'Code Review Meet',
      category: 'meetup'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: images.length },
    { id: 'hackathon', name: 'Hackathons', count: images.filter(img => img.category === 'hackathon').length },
    { id: 'workshop', name: 'Workshops', count: images.filter(img => img.category === 'workshop').length },
    { id: 'meetup', name: 'Meetups', count: images.filter(img => img.category === 'meetup').length },
    { id: 'talk', name: 'Talks', count: images.filter(img => img.category === 'talk').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-glug-green bg-clip-text text-transparent">
              Gallery
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Capture the moments of innovation, learning, and collaboration from our events and activities.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center mb-12">
            <div className="glass-strong rounded-full p-2 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-glug-blue text-white shadow-lg shadow-glug-blue-glow'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Gallery */}
          <div className="masonry">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="masonry-item relative overflow-hidden rounded-2xl glass-strong cursor-pointer group animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {image.event}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {image.alt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-glug-blue/20 text-glug-blue border border-glug-blue/30 rounded-full text-xs font-medium">
                        {image.category}
                      </span>
                      <div className="text-glug-green font-mono text-xs">
                        view --fullscreen
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zoom Icon */}
                {hoveredImage === image.id && (
                  <div className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center animate-fade-in">
                    <span className="text-glug-blue text-lg">🔍</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="glass p-8 rounded-2xl max-w-md mx-auto">
                <p className="text-gray-400 text-lg">
                  No images found for this category.
                </p>
                <p className="text-sm text-gray-500 mt-2 font-mono">
                  $ filter --reset
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
