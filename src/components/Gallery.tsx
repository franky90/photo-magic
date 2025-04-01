import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type GallerySection = 'background' | 'fantasy' | '3d';
type ThreeDCategory = 'characters' | 'toys' | 'all';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: GallerySection;
  subCategory?: ThreeDCategory;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Beach Paradise",
    description: "Transformed a simple beach photo into a tropical paradise",
    imageUrl: "/images/beach-after.jpg",
    category: "background"
  },
  {
    id: 2,
    title: "Fantasy Warrior",
    description: "Created a mystical warrior character from a portrait",
    imageUrl: "/images/character-after.jpg",
    category: "fantasy"
  },
  {
    id: 3,
    title: "Fantasy Character Model",
    description: "Low poly 3D character ready for printing",
    imageUrl: "/images/3d-print.jpg",
    category: "3d",
    subCategory: "characters"
  },
  {
    id: 4,
    title: "City Lights",
    description: "Transformed a daytime cityscape into a stunning night scene",
    imageUrl: "/images/city-lights.jpg",
    category: "background"
  },
  {
    id: 5,
    title: "Magical Forest",
    description: "Added an enchanted forest background with glowing elements",
    imageUrl: "/images/magical-forest.jpg",
    category: "background"
  },
  {
    id: 6,
    title: "Space Adventure",
    description: "Created an epic space background with nebulas and stars",
    imageUrl: "/images/space.jpg",
    category: "background"
  },
  {
    id: 7,
    title: "Underwater World",
    description: "Transformed a portrait into an underwater scene with coral reefs",
    imageUrl: "/images/underwater.jpg",
    category: "background"
  },
  {
    id: 8,
    title: "Futuristic City",
    description: "Added a cyberpunk-style futuristic city background",
    imageUrl: "/images/futuristic-city.jpg",
    category: "background"
  },
  // Add more 3D items
  {
    id: 9,
    title: "3D Toy Robot",
    description: "Cute low poly robot toy design",
    imageUrl: "/images/robot-toy.jpg",
    category: "3d",
    subCategory: "toys"
  },
  {
    id: 10,
    title: "3D Fantasy Creature",
    description: "Mystical creature character model",
    imageUrl: "/images/fantasy-creature.jpg",
    category: "3d",
    subCategory: "characters"
  }
];

const Gallery: React.FC = () => {
  const [activeSection, setActiveSection] = useState<GallerySection>('background');
  const [active3DCategory, setActive3DCategory] = useState<ThreeDCategory>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(item => {
    if (item.category === '3d') {
      return active3DCategory === 'all' || item.subCategory === active3DCategory;
    }
    return item.category === activeSection;
  });

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handlePreviousImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setSelectedImage(filteredItems[previousIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Creative Gallery</h2>
      
      <div className="gallery-tabs">
        <button
          className={`gallery-tab ${activeSection === 'background' ? 'active' : ''}`}
          onClick={() => setActiveSection('background')}
        >
          Background Magic
        </button>
        <button
          className={`gallery-tab ${activeSection === 'fantasy' ? 'active' : ''}`}
          onClick={() => setActiveSection('fantasy')}
        >
          Fantasy Characters
        </button>
        <button
          className={`gallery-tab ${activeSection === '3d' ? 'active' : ''}`}
          onClick={() => {
            setActiveSection('3d');
            setActive3DCategory('all');
          }}
        >
          3D Prints
        </button>
      </div>

      {activeSection === '3d' && (
        <div className="gallery-subtabs">
          <button
            className={`gallery-subtab ${active3DCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActive3DCategory('all')}
          >
            All 3D Prints
          </button>
          <button
            className={`gallery-subtab ${active3DCategory === 'characters' ? 'active' : ''}`}
            onClick={() => setActive3DCategory('characters')}
          >
            3D Characters
          </button>
          <button
            className={`gallery-subtab ${active3DCategory === 'toys' ? 'active' : ''}`}
            onClick={() => setActive3DCategory('toys')}
          >
            3D Toys
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeSection}-${active3DCategory}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="gallery-grid"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleImageClick(item)}
            >
              <div className="gallery-item-image">
                <img src={item.imageUrl} alt={item.title} />
                <div className="gallery-item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            <button className="lightbox-close" onClick={handleCloseLightbox}>
              ×
            </button>
            <button className="lightbox-nav prev" onClick={(e) => {
              e.stopPropagation();
              handlePreviousImage();
            }}>
              ‹
            </button>
            <div className="lightbox-content">
              <img src={selectedImage.imageUrl} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
            <button className="lightbox-nav next" onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}>
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 