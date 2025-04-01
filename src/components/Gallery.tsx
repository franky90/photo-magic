import React, { useState } from 'react';
import { motion } from 'framer-motion';

// This would typically come from your backend or CMS
const galleryItems = [
  {
    id: 1,
    beforeImage: 'https://placehold.co/600x400/eee/666?text=Before',
    afterImage: 'https://placehold.co/600x400/eee/666?text=After',
    title: 'Superhero Transformation',
    description: 'Turned a regular photo into an epic superhero scene',
  },
  {
    id: 2,
    beforeImage: 'https://placehold.co/600x400/eee/666?text=Before',
    afterImage: 'https://placehold.co/600x400/eee/666?text=After',
    title: 'Magical Forest',
    description: 'Added a magical forest background to create an enchanting scene',
  },
  // Add more items as needed
];

const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            Before & After Gallery
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            See the magic happen with our AI-powered photo transformations
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <div className="relative h-full">
                  {/* Before Image */}
                  <img
                    src={item.beforeImage}
                    alt={`Before - ${item.title}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* After Image with Slider */}
                  <div className="absolute inset-0 h-full w-full overflow-hidden">
                    <img
                      src={item.afterImage}
                      alt={`After - ${item.title}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-y-0 left-0 w-1/2 bg-white/20 cursor-ew-resize"
                      style={{
                        left: activeItem === item.id ? '50%' : '0%',
                        transition: 'left 0.3s ease-in-out',
                      }}
                      onMouseDown={() => setActiveItem(item.id)}
                      onMouseUp={() => setActiveItem(null)}
                      onMouseLeave={() => setActiveItem(null)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Drag to compare
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery; 