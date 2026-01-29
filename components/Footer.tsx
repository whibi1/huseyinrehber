import React from 'react';
import { Content } from '../types';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

interface FooterProps {
  content: Content['footer'];
  nav: Content['nav'];
}

export const Footer: React.FC<FooterProps> = ({ content, nav }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-white">
              Hüseyin <span className="text-byzantine-500">Hizmetçi</span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              Professional guidance through history, culture, and flavors of Istanbul.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-byzantine-500">{content.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{nav.about}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{nav.services}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{nav.contact}</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-4 text-byzantine-500">Social</h4>
             <div className="flex space-x-4">
                <a href="https://www.instagram.com/bir_an_istanbul/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-byzantine-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="tel:+905556370046" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-byzantine-500 transition-colors">
                  <Phone size={20} />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
};