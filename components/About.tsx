import React from 'react';
import { Content } from '../types';
import { Award, MapPin, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  content: Content['about'];
}

export const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-md mx-auto">
               {/* 
                  NOTE: The user provided https://ibb.co/prwsvvJc. 
                  ibb.co links are landing pages. For this code to work perfectly, 
                  we need the direct image source. I am using a high-quality placeholder 
                  that represents a guide, but typically I would use the direct link if available.
                  If the user wants their specific photo, they should replace the src below.
               */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000&auto=format&fit=crop" 
                alt={content.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bosphorus-900/90 to-transparent p-6 pt-20 text-white">
                <p className="font-heading font-bold text-xl">{content.name}</p>
                <p className="text-byzantine-400 text-sm">{content.jobTitle}</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute top-10 -left-4 w-full h-full border-2 border-byzantine-500 rounded-2xl z-0 hidden md:block"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-byzantine-600 font-bold uppercase tracking-wider mb-2 text-sm">{content.title}</h4>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-bosphorus-900 mb-6 leading-tight">
              {content.name}
            </h2>
            <div className="w-20 h-1 bg-terracotta-600 mb-8"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {content.bio}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-byzantine-500">
                <MapPin className="text-bosphorus-900 shrink-0" />
                <span className="font-semibold text-gray-800">{content.badgeIstanbul}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-terracotta-600">
                <Award className="text-bosphorus-900 shrink-0" />
                <span className="font-semibold text-gray-800">{content.badgeMarmara}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-bosphorus-900 sm:col-span-2">
                <Languages className="text-bosphorus-900 shrink-0" />
                <span className="font-semibold text-gray-800">{content.badgeLang}</span>
              </div>
            </div>

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Tureb_logo.png" 
              alt="TUREB License" 
              className="h-12 opacity-80 grayscale hover:grayscale-0 transition-all"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};