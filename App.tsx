import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppBtn } from './components/WhatsAppBtn';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('tr');
  const content = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [lang, isRTL]);

  return (
    <div className={`min-h-screen ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      
      <main>
        <Hero content={content.hero} isRTL={isRTL} />
        <About content={content.about} />
        <Services content={content.services} />
        <WhyChooseMe content={content.whyMe} />
        <Gallery content={content.gallery} />
        <Testimonials content={content.testimonials} isRTL={isRTL} />
        <Contact content={content.contact} />
      </main>

      <Footer content={content.footer} nav={content.nav} />
      <WhatsAppBtn />
    </div>
  );
}

export default App;