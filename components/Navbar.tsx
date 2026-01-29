import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Language, Content } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: content.home, href: '#home' },
    { name: content.about, href: '#about' },
    { name: content.services, href: '#services' },
    { name: content.gallery, href: '#gallery' },
    { name: content.contact, href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className={`text-2xl font-bold font-heading ${isScrolled ? 'text-bosphorus-900' : 'text-white'}`}>
            Hüseyin <span className="text-byzantine-500">Hizmetçi</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-byzantine-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                <Globe size={18} />
                <span className="uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-xl py-1 hidden group-hover:block border border-gray-100">
                {(['tr', 'en', 'ar'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      lang === l ? 'text-byzantine-600 font-bold' : 'text-gray-700'
                    }`}
                  >
                    {l === 'tr' ? '🇹🇷 Türkçe' : l === 'en' ? '🇬🇧 English' : '🇸🇦 العربية'}
                  </button>
                ))}
              </div>
            </div>

            <a 
              href="tel:+905556370046" 
              className="bg-byzantine-500 hover:bg-byzantine-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold transition-transform hover:scale-105 shadow-md"
            >
              <Phone size={16} />
              <span>+90 555 637 00 46</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleMenu} 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-gray-700 border-b border-gray-50 hover:text-byzantine-600 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-4 justify-center">
            {(['tr', 'en', 'ar'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setIsOpen(false); }}
                className={`px-3 py-1 rounded border ${
                  lang === l ? 'bg-bosphorus-900 text-white border-bosphorus-900' : 'border-gray-300 text-gray-600'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};