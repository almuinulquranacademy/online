import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AcademyLogo } from './AcademyLogo';
import { useLanguage } from '../i18n/LanguageContext';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/courses', label: t.nav.courses },
    { to: '/teachers', label: t.nav.teachers },
    { to: '/contact', label: t.nav.contact },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF6E9]/98 backdrop-blur-sm border-b border-[#C9A23F]/50 shadow-xs">
      {/* Top Bar Row */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-2">
        {/* Brand Logo at Left (Compact on mobile so right controls are always visible) */}
        <Link
          to="/"
          onClick={closeMenu}
          className="min-w-0 shrink focus:outline-none"
        >
          <AcademyLogo variant="light" size="sm" />
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const isActive =
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to);
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#C9A23F] text-[#111111] shadow-xs'
                    : 'text-[#1F1F1F] hover:bg-[#F3EBD3] hover:text-[#9E1B3E]'
                }`}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Language Toggle & Primary CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Language Switcher (বাংলা | English) */}
          <div
            role="group"
            aria-label={t.nav.langSwitchLabel}
            className="inline-flex items-center rounded-lg border border-[#C9A23F] bg-[#F3EBD3] p-0.5 text-xs font-semibold"
          >
            <button
              type="button"
              onClick={() => setLang('bn')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                lang === 'bn'
                  ? 'bg-[#111111] text-[#FBF6E9]'
                  : 'text-[#5A4A2A] hover:text-[#111111]'
              }`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                lang === 'en'
                  ? 'bg-[#111111] text-[#FBF6E9]'
                  : 'text-[#5A4A2A] hover:text-[#111111]'
              }`}
            >
              English
            </button>
          </div>

          {/* Primary Apply Now Button */}
          <Link
            to="/contact"
            className="px-4 py-2.5 rounded-xl bg-[#9E1B3E] hover:bg-[#821532] text-white text-sm font-semibold border border-[#C9A23F]/60 shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.applyNow}
          </Link>
        </div>

        {/* Mobile Right Controls (Language Toggle + High-Visibility Menu Button) */}
        <div className="flex lg:hidden items-center gap-1.5 shrink-0">
          <div
            role="group"
            aria-label={t.nav.langSwitchLabel}
            className="inline-flex items-center rounded-lg border border-[#C9A23F] bg-[#F3EBD3] p-0.5 text-[11px] font-bold shrink-0"
          >
            <button
              type="button"
              onClick={() => setLang('bn')}
              className={`px-2 py-1 rounded-md transition-colors ${
                lang === 'bn' ? 'bg-[#111111] text-[#FBF6E9]' : 'text-[#5A4A2A]'
              }`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded-md transition-colors ${
                lang === 'en' ? 'bg-[#111111] text-[#FBF6E9]' : 'text-[#5A4A2A]'
              }`}
            >
              EN
            </button>
          </div>

          {/* High-contrast Menu Button so it is always 100% visible on mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border-2 border-[#C9A23F] bg-[#9E1B3E] text-white font-bold text-xs shadow-sm active:scale-95 transition-transform shrink-0 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 shrink-0" />
            ) : (
              <Menu className="w-5 h-5 shrink-0" />
            )}
            <span>{lang === 'bn' ? 'মেনু' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer Menu (When Menu button is tapped) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF6E9] border-b-2 border-[#C9A23F] px-4 pt-3 pb-5 shadow-xl">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation Drawer">
            {navItems.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive
                      ? 'bg-[#C9A23F] text-[#111111]'
                      : 'text-[#1F1F1F] bg-[#F3EBD3]/60 hover:bg-[#F3EBD3]'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 w-full text-center py-3 px-4 rounded-xl bg-[#9E1B3E] hover:bg-[#821532] text-white font-bold border border-[#C9A23F] shadow-sm transition-colors"
            >
              {t.nav.applyNow}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
