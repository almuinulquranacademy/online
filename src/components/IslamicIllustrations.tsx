import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';

/**
 * Responsive illustration components that reference the placeholder image paths
 * in /public/images/ (so the owner can drop in real .jpg/.png files at any time)
 * while providing custom SVG illustrations matching the design screens.
 */

export const HeroQuranIllustration: React.FC<{ alt: string }> = ({ alt }) => {
  const [src, setSrc] = useState<string>(SITE_CONFIG.images.hero);
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    if (!src.startsWith('./public/')) {
      setSrc(src.replace(/^\.\//, './public/'));
    } else {
      setImgError(true);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border-2 border-[#C9A23F] bg-gradient-to-br from-[#F3EBD3] via-[#EAD9B0] to-[#D8BE82] shadow-xl p-1.5 sm:p-2">
      <div className="relative overflow-hidden rounded-xl border border-[#C9A23F]/50 aspect-[16/11] bg-[#F3EBD3]">
        {!imgError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={handleError}
            className="w-full h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.02]"
          />
        ) : (
          <svg
            viewBox="0 0 600 420"
            className="w-full h-full object-cover block"
            role="img"
            aria-label={alt}
          >
            <defs>
              <linearGradient id="heroSky" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FBF6E9" />
                <stop offset="55%" stopColor="#F0E2BE" />
                <stop offset="100%" stopColor="#DEC58E" />
              </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#heroSky)" />
            <circle cx="300" cy="210" r="120" fill="#FFFDF7" opacity="0.6" />
          </svg>
        )}
      </div>
    </div>
  );
};

export const AboutQuranIllustration: React.FC<{ alt: string }> = ({ alt }) => {
  const [src, setSrc] = useState<string>(SITE_CONFIG.images.about);
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    if (!src.startsWith('./public/')) {
      setSrc(src.replace(/^\.\//, './public/'));
    } else {
      setImgError(true);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border-2 border-[#C9A23F] bg-gradient-to-br from-[#F3EBD3] via-[#E8D5A7] to-[#D5B878] shadow-xl p-1.5 sm:p-2">
      <div className="relative overflow-hidden rounded-xl border border-[#C9A23F]/50 aspect-[16/9] bg-[#F3EBD3]">
        {!imgError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={handleError}
            className="w-full h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.02]"
          />
        ) : (
          <svg
            viewBox="0 0 600 380"
            className="w-full h-full object-cover block"
            role="img"
            aria-label={alt}
          >
            <defs>
              <linearGradient id="aboutBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FBF6E9" />
                <stop offset="100%" stopColor="#E4CE9B" />
              </linearGradient>
            </defs>
            <rect width="600" height="380" fill="url(#aboutBg)" />
          </svg>
        )}
      </div>
    </div>
  );
};

export const WomenSectionIllustration: React.FC<{ alt: string }> = ({ alt }) => {
  const [src, setSrc] = useState<string>(SITE_CONFIG.images.womenSection);
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    if (!src.startsWith('./public/')) {
      setSrc(src.replace(/^\.\//, './public/'));
    } else {
      setImgError(true);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border-2 border-[#C9A23F]/80 bg-[#1E1914] p-1.5 shadow-lg">
      <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-[#14110E]">
        {!imgError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={handleError}
            className="w-full h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.02]"
          />
        ) : (
          <svg
            viewBox="0 0 480 340"
            className="w-full h-full object-cover block"
            role="img"
            aria-label={alt}
          >
            <path
              d="M 60 330 L 60 130 Q 60 35 170 35 L 310 35 Q 420 35 420 130 L 420 330"
              fill="#262018"
              stroke="#C9A23F"
              strokeWidth="2"
              opacity="0.65"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export const CourseCardIllustration: React.FC<{
  type: 'child-qaida' | 'child-nazera' | 'adult-nazera' | 'women-batch' | 'tajweed-makharij';
  title: string;
}> = ({ type, title }) => {
  return (
    <div
      className="w-full h-44 bg-gradient-to-b from-[#F5ECD7] to-[#EADBC0] border-b border-[#C9A23F]/30 flex items-center justify-center p-4 overflow-hidden"
      aria-label={title}
    >
      {type === 'women-batch' ? (
        <svg viewBox="0 0 240 150" className="w-44 h-36">
          <circle cx="120" cy="78" r="62" fill="#FBF6E9" stroke="#C9A23F" strokeWidth="1.5" />
          {/* Modest Female Silhouette in Maroon Hijab */}
          <path d="M72 138 C76 92 96 78 120 78 C144 78 164 92 168 138 Z" fill="#6D1D33" />
          <path d="M90 74 C90 32 150 32 150 74 C150 100 136 112 120 112 C104 112 90 100 90 74 Z" fill="#7D233C" />
          <ellipse cx="120" cy="64" rx="18" ry="21" fill="#F1C7A6" />
          {/* Open Quran */}
          <path d="M88 120 Q104 112 120 122 Q136 112 152 120 L148 132 Q134 124 120 134 Q106 124 92 132 Z" fill="#FFFDF8" stroke="#C9A23F" strokeWidth="2" />
        </svg>
      ) : type === 'child-qaida' ? (
        <svg viewBox="0 0 240 150" className="w-44 h-36">
          <circle cx="120" cy="78" r="62" fill="#FBF6E9" stroke="#C9A23F" strokeWidth="1.5" />
          {/* Teacher & Child */}
          <path d="M118 135 C122 92 142 80 164 80 C186 80 200 92 204 135 Z" fill="#EFE4CC" stroke="#C9A23F" strokeWidth="1.2" />
          <circle cx="162" cy="54" r="18" fill="#EBC29F" />
          <path d="M144 50 C144 34 180 34 180 50 Z" fill="#FFFFFF" stroke="#C9A23F" strokeWidth="1.5" />
          <path d="M146 58 Q162 84 178 58 Z" fill="#FFFFFF" />
          {/* Child */}
          <path d="M52 135 C55 100 70 90 88 90 C106 90 118 100 122 135 Z" fill="#FFFFFF" stroke="#C9A23F" strokeWidth="1.2" />
          <circle cx="88" cy="68" r="15" fill="#F4CFB0" />
          <path d="M73 64 C73 50 103 50 103 64 Z" fill="#FFFFFF" stroke="#C9A23F" strokeWidth="1.5" />
          {/* Open Qaida */}
          <path d="M84 118 Q104 110 124 120 Q144 110 164 118 L160 130 Q142 122 124 132 Q106 122 88 130 Z" fill="#FFFDF8" stroke="#C9A23F" strokeWidth="2" />
        </svg>
      ) : type === 'adult-nazera' ? (
        <svg viewBox="0 0 240 150" className="w-44 h-36">
          <circle cx="120" cy="78" r="62" fill="#FBF6E9" stroke="#C9A23F" strokeWidth="1.5" />
          {/* Adult Student with Beard & Kufi Reading Quran */}
          <path d="M72 138 C78 90 96 76 120 76 C144 76 162 90 168 138 Z" fill="#F4EBDC" stroke="#8C6B32" strokeWidth="1.5" />
          <circle cx="120" cy="52" r="20" fill="#EBC29F" />
          <path d="M102 56 Q120 80 138 56 Q129 64 120 64 Q111 64 102 56 Z" fill="#3D2B1F" />
          <path d="M100 46 C100 30 140 30 140 46 Z" fill="#FFFFFF" stroke="#C9A23F" strokeWidth="1.5" />
          <path d="M82 114 Q101 105 120 116 Q139 105 158 114 L154 128 Q137 119 120 130 Q103 119 86 128 Z" fill="#FFFDF8" stroke="#C9A23F" strokeWidth="2" />
        </svg>
      ) : type === 'tajweed-makharij' ? (
        <svg viewBox="0 0 240 150" className="w-44 h-36">
          <circle cx="120" cy="75" r="58" fill="#FBF6E9" stroke="#C9A23F" strokeWidth="1.5" />
          {/* Ornate Open Quran on Rehal Emblem */}
          <path d="M68 78 Q94 64 120 80 Q146 64 172 78 L166 102 Q143 89 120 105 Q97 89 74 102 Z" fill="#111111" stroke="#C9A23F" strokeWidth="2.5" />
          <line x1="120" y1="80" x2="120" y2="105" stroke="#C9A23F" strokeWidth="2" />
          <path d="M86 122 L138 96 L142 102 L90 128 Z" fill="#C9A23F" />
          <path d="M154 122 L102 96 L98 102 L150 128 Z" fill="#B38928" />
          <circle cx="120" cy="46" r="12" fill="#C9A23F" opacity="0.25" />
          <path d="M114 46 L120 38 L126 46 L120 54 Z" fill="#C9A23F" />
        </svg>
      ) : (
        <svg viewBox="0 0 240 150" className="w-44 h-36">
          <circle cx="120" cy="78" r="62" fill="#FBF6E9" stroke="#C9A23F" strokeWidth="1.5" />
          {/* Family / Children Group Learning */}
          <circle cx="88" cy="64" r="15" fill="#EBC29F" />
          <path d="M73 60 C73 46 103 46 103 60 Z" fill="#FFFFFF" stroke="#C9A23F" strokeWidth="1.2" />
          <path d="M64 134 C68 96 76 86 88 86 C100 86 108 96 112 134 Z" fill="#4E6E5D" />

          <circle cx="152" cy="64" r="16" fill="#7D233C" />
          <circle cx="152" cy="65" r="11" fill="#F1C7A6" />
          <path d="M128 134 C132 96 140 86 152 86 C164 86 172 96 176 134 Z" fill="#7D233C" />

          <circle cx="120" cy="78" r="13" fill="#F4CFB0" />
          <path d="M107 74 C107 62 133 62 133 74 Z" fill="#FFFFFF" stroke="#C9A23F" strokeWidth="1.2" />
          <path d="M98 136 C102 104 110 96 120 96 C130 96 138 104 142 136 Z" fill="#FFFDF8" stroke="#C9A23F" strokeWidth="1.5" />
        </svg>
      )}
    </div>
  );
};

export const TeacherAvatarIllustration: React.FC<{
  gender: 'male' | 'female';
  photo: string;
  alt: string;
  isPublished?: boolean;
}> = ({ gender, photo, alt, isPublished }) => {
  const [src, setSrc] = useState<string>(photo);
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    if (!src.startsWith('./public/')) {
      setSrc(src.replace(/^\.\//, './public/'));
    } else {
      setImgError(true);
    }
  };

  return (
    <div className="relative w-full aspect-[4/4.2] bg-gradient-to-b from-[#F5ECD7] to-[#E8D7B4] border-b border-[#C9A23F]/30 flex items-center justify-center overflow-hidden">
      {isPublished && photo && !imgError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={handleError}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : gender === 'female' ? (
        <svg viewBox="0 0 200 180" className="w-44 h-44" role="img" aria-label={alt}>
          <circle cx="100" cy="92" r="72" fill="#FBF6E9" stroke="#C9A23F" strokeWidth="1.5" />
          {/* Modest Hijab Silhouette Avatar */}
          <path d="M48 164 C54 112 75 96 100 96 C125 96 146 112 152 164 Z" fill="#6D1D33" />
          <path d="M68 88 C68 42 132 42 132 88 C132 116 118 130 100 130 C82 130 68 116 68 88 Z" fill="#82233E" />
          <ellipse cx="100" cy="78" rx="20" ry="23" fill="#F2C8A7" />
          {/* Purdah veil */}
          <path d="M79 80 Q100 87 121 80 L119 104 Q100 112 81 104 Z" fill="#581628" />
        </svg>
      ) : (
        <svg viewBox="0 0 200 180" className="w-44 h-44" role="img" aria-label={alt}>
          <circle cx="100" cy="92" r="72" fill="#FBF6E9" stroke="#C9A23F" strokeWidth="1.5" />
          {/* Respectful Male Instructor Avatar */}
          <path d="M46 164 C52 110 74 94 100 94 C126 94 148 110 154 164 Z" fill="#FFFFFF" stroke="#C9A23F" strokeWidth="1.5" />
          <circle cx="100" cy="68" r="24" fill="#EBC29F" />
          <path d="M78 72 Q100 102 122 72 Q112 82 100 82 Q88 82 78 72 Z" fill="#3A2A1E" />
          <path d="M76 60 C76 40 124 40 124 60 Z" fill="#FFFFFF" stroke="#C9A23F" strokeWidth="1.5" />
        </svg>
      )}
    </div>
  );
};
