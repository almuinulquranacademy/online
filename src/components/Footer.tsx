import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Facebook } from 'lucide-react';
import { AcademyLogo } from './AcademyLogo';
import { SITE_CONFIG } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Global Footer component.
 * Rules enforced:
 * - Black background (#111111)
 * - Logo, academy name, phone (+880 1626-278303), email, Facebook icon, WhatsApp icon
 * - NO Instagram or YouTube links anywhere
 * - Copyright with current year
 */
export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#FBF6E9] border-t-2 border-[#C9A23F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-block focus:outline-none">
              <AcademyLogo variant="dark" size="md" />
            </Link>
            <p className="text-sm text-[#E5DEC9]/80 max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-[#C9A23F] tracking-wide">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[#FBF6E9]/85 hover:text-[#C9A23F] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#FBF6E9]/85 hover:text-[#C9A23F] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-[#FBF6E9]/85 hover:text-[#C9A23F] transition-colors">
                  {t.nav.courses}
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-[#FBF6E9]/85 hover:text-[#C9A23F] transition-colors">
                  {t.nav.teachers}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#FBF6E9]/85 hover:text-[#C9A23F] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Contact Info & Social Links (Facebook & WhatsApp only) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-[#C9A23F] tracking-wide">
              {t.footer.contactHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A23F]/20 border border-[#C9A23F] flex items-center justify-center text-[#C9A23F] shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  className="text-[#FBF6E9] hover:text-[#C9A23F] transition-colors font-medium tabular-nums"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A23F]/20 border border-[#C9A23F] flex items-center justify-center text-[#C9A23F] shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[#FBF6E9] hover:text-[#C9A23F] transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>

              <li className="flex items-center gap-3 pt-1">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#C9A23F]/15 hover:bg-[#C9A23F] text-[#FBF6E9] hover:text-[#111111] border border-[#C9A23F] text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={SITE_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#C9A23F]/15 hover:bg-[#C9A23F] text-[#FBF6E9] hover:text-[#111111] border border-[#C9A23F] text-xs font-semibold transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-[#C9A23F]/25 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#E5DEC9]/70">
          <p>
            © {currentYear} Al Muinul Quran Online Academy. All Rights Reserved.
          </p>
          <p className="text-[#C9A23F]/90">
            {SITE_CONFIG.academyNameBn} • {SITE_CONFIG.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
};
