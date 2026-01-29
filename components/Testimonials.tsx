import React, { useState, useEffect } from 'react';
import { Content } from '../types';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialsProps {
  content: Content['testimonials'];
  isRTL: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ content, isRTL }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-heading font-bold text-bosphorus-900 mb-16">{content.title}</h2>
        
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl relative"
            >
              <Quote className="absolute top-6 left-6 text-byzantine-200 w-12 h-12 transform -scale-x-100 opacity-50" />
              
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-byzantine-500 fill-current" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 relative z-10 leading-relaxed font-serif">
                "{TESTIMONIALS[current].text}"
              </p>
              
              <div>
                <h4 className="font-bold text-bosphorus-900 text-lg">{TESTIMONIALS[current].name}</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wide">{TESTIMONIALS[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx ? 'bg-byzantine-500 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};