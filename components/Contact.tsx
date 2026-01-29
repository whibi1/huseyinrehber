import React from 'react';
import { Content } from '../types';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';

interface ContactProps {
  content: Content['contact'];
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center text-bosphorus-900 mb-16">
          {content.title}
        </h2>

        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white">
          {/* Contact Info & Form */}
          <div className="lg:w-1/2 p-8 md:p-12 bg-bosphorus-900 text-white">
            <h3 className="text-2xl font-bold mb-8 text-byzantine-500">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              <a href="tel:+905556370046" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-byzantine-500 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg group-hover:text-byzantine-400 transition-colors">+90 555 637 00 46</span>
              </a>
              
              <a href="https://www.instagram.com/bir_an_istanbul/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-byzantine-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-lg group-hover:text-byzantine-400 transition-colors">@bir_an_istanbul</span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg">{content.address}</span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder={content.formName} 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-byzantine-500 transition-colors"
                />
                 <input 
                  type="email" 
                  placeholder={content.formEmail} 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-byzantine-500 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <input 
                  type="tel" 
                  placeholder={content.formPhone} 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-byzantine-500 transition-colors"
                />
                 <input 
                  type="date" 
                  placeholder={content.formDate} 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-byzantine-500 transition-colors"
                />
              </div>
              <textarea 
                rows={4} 
                placeholder={content.formMessage} 
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-byzantine-500 transition-colors resize-none"
              ></textarea>
              <button className="w-full bg-byzantine-500 hover:bg-byzantine-600 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
                {content.submit}
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="lg:w-1/2 min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.5521343765!2d28.87175432657277!3d41.005321499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5ef7d5aca91%3A0x2860b005e83e6027!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};