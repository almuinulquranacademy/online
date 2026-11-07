import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

interface AcademyLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

/**
 * Renders the academy logo with automatic fallback to ./public/logo.png if served
 * from an unbuilt branch root, and a gold "AM" emblem fallback if missing.
 */
export const AcademyLogo: React.FC<AcademyLogoProps> = ({
  variant = 'light',
  size = 'md',
}) => {
  const [src, setSrc] = useState<string>(SITE_CONFIG.logoPath);
  const [imgFailed, setImgFailed] = useState(false);
  const { t } = useLanguage();

  const circleSize =
    size === 'sm'
      ? 'w-9 h-9 sm:w-12 sm:h-12 text-xs sm:text-sm'
      : 'w-12 h-12 sm:w-15 sm:h-15 text-sm sm:text-base';
  const titleColor = variant === 'dark' ? 'text-[#FBF6E9]' : 'text-[#1F1F1F]';
  const subColor = variant === 'dark' ? 'text-[#C9A23F]' : 'text-[#5A4A2A]';

  const handleLogoError = () => {
    if (!src.startsWith('./public/')) {
      setSrc(src.replace(/^\.\//, './public/'));
    } else {
      setImgFailed(true);
    }
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none min-w-0">
      {!imgFailed ? (
        <img
          src={src}
          alt={t.common.logoAlt}
          referrerPolicy="no-referrer"
          onError={handleLogoError}
          className={`${circleSize} rounded-full object-contain bg-white border-2 border-[#C9A23F] shadow-sm shrink-0`}
        />
      ) : (
        <div
          aria-label={t.common.logoAlt}
          className={`${circleSize} rounded-full bg-[#111111] border-2 border-[#C9A23F] flex items-center justify-center font-bold text-[#C9A23F] tracking-wider shadow-sm shrink-0`}
        >
          AM
        </div>
      )}
      <div className="leading-tight min-w-0">
        <span
          className={`block font-bold tracking-tight truncate ${
            size === 'sm' ? 'text-sm sm:text-lg' : 'text-base sm:text-xl'
          } ${titleColor}`}
        >
          Al Muinul Quran
        </span>
        <span
          className={`block text-[10px] sm:text-xs font-medium truncate ${subColor}`}
        >
          আল মুঈনুল কুরআন অনলাইন একাডেমি
        </span>
      </div>
    </div>
  );
};
