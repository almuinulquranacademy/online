/**
 * Global configuration constants for Al Muinul Quran Online Academy.
 * Keep endpoints and contact identifiers centralized for easy maintenance.
 */

export const SITE_CONFIG = {
  academyNameBn: 'আল মুঈনুল কুরআন অনলাইন একাডেমি',
  academyNameEn: 'Al Muinul Quran Online Academy',

  // Rule 8: Use +880 1626-278303 everywhere. Never use 1625.
  phoneDisplay: '+880 1626-278303',
  phoneTel: '+8801626278303',
  whatsappNumber: '8801626278303',
  whatsappUrl: 'https://wa.me/8801626278303',

  email: 'almuinulquranacademy@gmail.com',

  facebookDisplay: 'facebook.com/almuinulquranacademy',
  facebookUrl: 'https://facebook.com/almuinulquranacademy',

  // FormSubmit AJAX endpoint for enrollment notifications
  formSubmitEndpoint: 'https://formsubmit.co/ajax/almuinulquranacademy@gmail.com',

  // Asset paths stored in /public/ so they work both in Vite builds and GitHub exports
  logoPath: './logo.png',
  images: {
    hero: './images/hero.webp',
    about: './images/about.webp',
    womenSection: './images/women-section.jpg',
    teacherPlaceholder: './images/teacher-placeholder.png',
  },
} as const;
