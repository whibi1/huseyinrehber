import React from 'react';
import { Content } from '../types';
import { Calendar, CheckCircle, GraduationCap, Heart, Map, MessageCircle } from 'lucide-react';

interface WhyChooseMeProps {
  content: Content['whyMe'];
}

export const WhyChooseMe: React.FC<WhyChooseMeProps> = ({ content }) => {
  const icons = [
    <CheckCircle className="w-8 h-8 text-byzantine-500" />,
    <GraduationCap className="w-8 h-8 text-byzantine-500" />,
    <MessageCircle className="w-8 h-8 text-byzantine-500" />,
    <Map className="w-8 h-8 text-byzantine-500" />,
    <Heart className="w-8 h-8 text-byzantine-500" />,
    <Calendar className="w-8 h-8 text-byzantine-500" />
  ];

  const keys = ['experience', 'licensed', 'bilingual', 'local', 'personalized', 'flexible'] as const;

  return (
    <section className="py-24 bg-bosphorus-900 text-white relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          {content.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {keys.map((key, index) => (
            <div key={key} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-all transform group-hover:scale-110 duration-300 backdrop-blur-sm">
                {icons[index]}
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{content.items[key]}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};