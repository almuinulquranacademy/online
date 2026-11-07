/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { TeachersPage } from './pages/TeachersPage';
import { ContactPage } from './pages/ContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        {/* Outer gold border frame around the page body matching the design */}
        <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#DFBF6A] via-[#C9A23F] to-[#B58B2A] p-1.5 sm:p-3 lg:p-4">
          <div className="min-h-[calc(100vh-12px)] sm:min-h-[calc(100vh-24px)] lg:min-h-[calc(100vh-32px)] max-w-[1440px] mx-auto bg-[#FBF6E9] border-2 border-[#9B7722] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col gold-frame-shadow">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <FloatingWhatsAppButton />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}
