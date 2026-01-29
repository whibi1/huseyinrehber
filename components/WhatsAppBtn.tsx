import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppBtn: React.FC = () => {
  return (
    <a 
      href="https://wa.me/905556370046" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};