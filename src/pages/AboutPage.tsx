import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Globe,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  AboutQuranIllustration,
  WomenSectionIllustration,
} from '../components/IslamicIllustrations';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(t.meta.aboutTitle, t.meta.aboutDesc);

  const values = [
    {
      icon: ShieldCheck,
      title: t.about.valueTrustTitle,
      desc: t.about.valueTrustDesc,
    },
    {
      icon: Award,
      title: t.about.valueAccuracyTitle,
      desc: t.about.valueAccuracyDesc,
    },
    {
      icon: Globe,
      title: t.about.valueAccessTitle,
      desc: t.about.valueAccessDesc,
    },
    {
      icon: HeartHandshake,
      title: t.about.valueDedicationTitle,
      desc: t.about.valueDedicationDesc,
    },
  ];

  const liveClassPoints = [
    t.about.liveClassPoint1,
    t.about.liveClassPoint2,
    t.about.liveClassPoint3,
    t.about.liveClassPoint4,
  ];

  return (
    <div className="space-y-0">
      {/* ABOUT HERO */}
      <section className="bg-gradient-to-b from-[#F3EBD3] to-[#FBF6E9] border-b border-[#C9A23F]/40 pt-4 pb-9 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
            <div className="order-1 lg:order-2 lg:col-span-6">
              <AboutQuranIllustration alt={t.about.heroImageAlt} />
            </div>

            <div className="order-2 lg:order-1 lg:col-span-6 space-y-4 text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight [text-wrap:balance]">
                {t.about.heroTitle}
              </h1>
              <p className="text-sm sm:text-lg text-[#5A4A2A] leading-relaxed">
                {t.about.heroSubtitle}
              </p>
              <div className="pt-1 sm:pt-2">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-base font-bold border-2 border-[#C9A23F]/70 shadow-md transition-colors"
                >
                  <span>{t.common.enrollNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY & VISION + LIVE CLASS METHODOLOGY */}
      <section className="py-12 sm:py-16 bg-[#FBF6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Story & Vision (TODO: Owner to review placeholder story paragraph) */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
                {t.about.storyTitle}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-[#9E1B3E]">
                {t.about.storySubtitle}
              </p>
              <p className="text-sm sm:text-base text-[#5A4A2A] leading-relaxed">
                {t.about.storyParagraph1}
              </p>
              <p className="text-sm sm:text-base text-[#5A4A2A] leading-relaxed">
                {t.about.storyParagraph2}
              </p>
            </div>

            {/* Methodology Box */}
            <div className="lg:col-span-5">
              <div className="card-surface p-6 sm:p-7 bg-[#FFFDF8] space-y-4">
                <h3 className="text-xl font-bold text-[#1F1F1F]">
                  {t.about.liveClassBoxTitle}
                </h3>
                <ul className="space-y-3">
                  {liveClassPoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-[#5A4A2A]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C9A23F] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION (4 CARDS) */}
      <section className="py-12 sm:py-16 bg-[#F3EBD3] border-y border-[#C9A23F]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
              {t.about.valuesTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#5A4A2A] mt-2">
              {t.about.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={val.title}
                  className="card-surface p-6 flex flex-col items-center text-center bg-[#FFFDF8]"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shadow-sm mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A4A2A] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WOMEN'S PRIVACY HIGHLIGHT */}
      <section className="py-12 sm:py-14 bg-[#FBF6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#171411] border-2 border-[#C9A23F] p-6 sm:p-8 text-[#FBF6E9]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#C9A23F]">
                  {t.home.womenBannerTitle}
                </h2>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FBF6E9]">
                  {t.home.womenBannerHighlight}
                </p>
                <p className="text-sm sm:text-base text-[#E5DEC9]/90 leading-relaxed">
                  {t.home.womenBannerDesc}
                </p>
                <div className="pt-2">
                  <Link
                    to="/courses?category=women"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-sm font-bold border border-[#C9A23F] transition-colors"
                  >
                    <span>{t.home.womenBannerCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <WomenSectionIllustration alt={t.home.womenImageAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM ENROLLMENT BANNER */}
      <section className="py-12 sm:py-14 bg-[#F3EBD3] border-t border-[#C9A23F]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] [text-wrap:balance]">
            {t.about.bannerTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4A2A] max-w-xl mx-auto">
            {t.about.bannerSubtitle}
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-base font-bold border-2 border-[#C9A23F] shadow-md transition-colors"
            >
              <span>{t.common.applyNowUrgent}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
