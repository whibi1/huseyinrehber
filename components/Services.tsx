import React from 'react';
import { Content } from '../types';
import { Landmark, Ship, Crown, User, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  content: Content['services'];
}

export const Services: React.FC<ServicesProps> = ({ content }) => {
  const icons = [
    <Landmark size={32} />,
    <Ship size={32} />,
    <Crown size={32} />,
    <User size={32} />,
    <Coffee size={32} />
  ];

  const serviceKeys = ['historical', 'bosphorus', 'ottoman', 'custom', 'culinary'] as const;

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-bosphorus-900 mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-byzantine-500 group"
            >
              <div className="w-16 h-16 bg-bosphorus-50 rounded-full flex items-center justify-center text-bosphorus-900 mb-6 group-hover:bg-byzantine-500 group-hover:text-white transition-colors duration-300">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-byzantine-600 transition-colors">
                 {/* Logic to split title if needed, or just display */}
                 {content.items[key].split('(')[0]}
              </h3>
              <p className="text-gray-600">
                {content.items[key]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};