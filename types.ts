export type Language = 'tr' | 'en' | 'ar';

export interface Content {
  hero: {
    headline: string;
    subheadline: string;
    ctaBook: string;
    ctaContact: string;
  };
  about: {
    title: string;
    name: string;
    jobTitle: string;
    bio: string;
    badgeIstanbul: string;
    badgeMarmara: string;
    badgeLang: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      historical: string;
      bosphorus: string;
      ottoman: string;
      custom: string;
      culinary: string;
    };
  };
  whyMe: {
    title: string;
    items: {
      experience: string;
      licensed: string;
      bilingual: string;
      local: string;
      personalized: string;
      flexible: string;
    };
  };
  gallery: {
    title: string;
  };
  testimonials: {
    title: string;
  };
  contact: {
    title: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formDate: string;
    formMessage: string;
    submit: string;
    address: string;
  };
  footer: {
    copyright: string;
    quickLinks: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
  };
}