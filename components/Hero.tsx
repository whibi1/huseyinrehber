import React from 'react';
import { Content } from '../types';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  content: Content['hero'];
  isRTL: boolean;
}

export const Hero: React.FC<HeroProps> = ({ content, isRTL }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2000&auto=format&fit=crop" 
          alt="Istanbul Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-bosphorus-900/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-byzantine-500/20 border border-byzantine-500 text-byzantine-400 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            ISTANBUL & MARMARA
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight drop-shadow-lg">
            {content.headline}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-gray-200 max-w-2xl mx-auto">
            {content.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="bg-byzantine-500 hover:bg-byzantine-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-byzantine-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-2 min-w-[200px] justify-center"
            >
              {content.ctaBook}
              {isRTL ? <ChevronRight className="rotate-180" /> : <ChevronRight />}
            </a>
            <a 
              href="#about" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full transition-all flex items-center gap-2 min-w-[200px] justify-center backdrop-blur-sm"
            >
              {content.ctaContact}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};