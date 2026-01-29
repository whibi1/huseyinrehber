import React, { useState } from 'react';
import { Content } from '../types';
import { GALLERY_IMAGES } from '../constants';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProps {
  content: Content['gallery'];
}

export const Gallery: React.FC<GalleryProps> = ({ content }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center text-bosphorus-900 mb-12">
          {content.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer aspect-square"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300">
                  <span className="text-white text-xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};