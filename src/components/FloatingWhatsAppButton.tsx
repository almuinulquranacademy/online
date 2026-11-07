import React from 'react';
import { SITE_CONFIG } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Floating WhatsApp Button fixed at the bottom-right corner across all pages.
 * Uses the official WhatsApp logo SVG with an animated pulse ring and floating motion,
 * opening https://wa.me/8801626278303 immediately when clicked.
 */
export const FloatingWhatsAppButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.whatsappChat}
      title={t.common.whatsappChat}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group flex items-center justify-center focus:outline-none whatsapp-float"
    >
      {/* Animated Outer Pulse Rings */}
      <span
        aria-hidden="true"
        className="absolute inline-flex h-16 w-16 sm:h-[68px] sm:w-[68px] rounded-full bg-[#25D366] opacity-50 animate-ping"
      />
      <span
        aria-hidden="true"
        className="absolute inline-flex h-[60px] w-[60px] sm:h-16 sm:w-16 rounded-full bg-[#25D366]/35 whatsapp-pulse-ring"
      />

      {/* Main Circular Button with Official WhatsApp Logo */}
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#1DA851] via-[#25D366] to-[#34E875] text-white shadow-[0_8px_28px_rgba(37,211,102,0.55)] border-2 border-white group-hover:scale-110 group-active:scale-95 transition-transform duration-200">
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current drop-shadow-xs"
          aria-hidden="true"
        >
          <path d="M16.004 3.2c-7.068 0-12.8 5.732-12.8 12.8 0 2.257.59 4.46 1.71 6.404L3.104 28.8l6.557-1.72c1.878 1.025 3.99 1.564 6.143 1.565h.005c7.066 0 12.795-5.732 12.795-12.8 0-3.42-1.332-6.636-3.75-9.054C22.437 4.532 19.222 3.2 16.004 3.2zm0 23.307h-.004c-1.91 0-3.784-.513-5.42-1.484l-.388-.23-3.89 1.02 1.038-3.792-.253-.402c-1.066-1.695-1.63-3.655-1.63-5.675 0-5.875 4.78-10.656 10.657-10.656 2.846 0 5.52 1.11 7.532 3.123 2.012 2.013 3.12 4.688 3.12 7.534 0 5.877-4.783 10.658-10.658 10.658zm5.845-7.982c-.32-.16-1.896-.936-2.19-1.043-.293-.107-.507-.16-.72.16-.214.32-.828 1.043-1.015 1.257-.187.213-.374.24-.694.08-.32-.16-1.352-.498-2.575-1.589-.952-.849-1.595-1.898-1.782-2.219-.187-.32-.02-.493.14-.653.144-.143.32-.374.48-.561.16-.187.214-.32.32-.534.107-.214.054-.401-.026-.561-.08-.16-.72-1.737-.988-2.378-.26-.624-.525-.539-.72-.549-.186-.009-.4-.011-.614-.011s-.56.08-.854.401c-.294.32-1.121 1.095-1.121 2.671s1.148 3.099 1.308 3.313c.16.213 2.259 3.45 5.473 4.837.764.33 1.361.527 1.826.675.767.244 1.466.209 2.018.127.615-.092 1.896-.775 2.163-1.523.267-.748.267-1.389.187-1.523-.08-.133-.294-.213-.614-.373z" />
        </svg>
      </span>
    </a>
  );
};
