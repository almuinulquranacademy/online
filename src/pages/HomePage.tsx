import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  GraduationCap,
  Globe,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Video,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { COURSES } from '../data/courses';
import { TEACHERS } from '../data/teachers';
import {
  HeroQuranIllustration,
  WomenSectionIllustration,
  TeacherAvatarIllustration,
} from '../components/IslamicIllustrations';

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  usePageMeta(t.meta.homeTitle, t.meta.homeDesc);

  const whyChooseItems = [
    {
      icon: ShieldCheck,
      title: t.home.whyTrustTitle,
      desc: t.home.whyTrustDesc,
    },
    {
      icon: GraduationCap,
      title: t.home.whyTeachersTitle,
      desc: t.home.whyTeachersDesc,
    },
    {
      icon: Globe,
      title: t.home.whyAccessTitle,
      desc: t.home.whyAccessDesc,
    },
  ];

  const womenBullets = [
    t.home.womenBullet1,
    t.home.womenBullet2,
    t.home.womenBullet3,
    t.home.womenBullet4,
  ];

  // Show 3 featured courses on the Home page preview (Noorani Qaida, Nazera & Tajweed, Women's Special Batch)
  const featuredCourses = COURSES.filter((c) =>
    ['noorani-qaida', 'nazera-tajweed-child', 'womens-special-batch'].includes(c.id)
  );

  // Show only 2 featured instructors on the Home page preview; all teachers are shown on /teachers
  const featuredTeachers = TEACHERS.slice(0, 2);

  return (
    <div className="space-y-0">
      {/* HERO SECTION (Mobile-first: Image immediately visible in first viewport on mobile) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3EBD3] via-[#FBF6E9] to-[#FBF6E9] border-b border-[#C9A23F]/40 pt-4 pb-9 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
            {/* Hero Image: Shown FIRST on mobile so it pops immediately upon entering the page, right column on desktop */}
            <div className="order-1 lg:order-2 lg:col-span-5">
              <HeroQuranIllustration alt={t.home.heroImageAlt} />
            </div>

            {/* Hero Copy: Shown right below image on mobile, left column on desktop */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5A4A2A]">
                <Video className="w-4 h-4 text-[#9E1B3E] shrink-0" />
                <span>{t.home.heroBadge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight tracking-tight [text-wrap:balance]">
                {t.home.heroTitle}
              </h1>

              <p className="text-sm sm:text-lg text-[#5A4A2A] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.home.heroSubtitle}
              </p>

              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-base font-bold border-2 border-[#C9A23F]/70 shadow-md transition-colors"
                >
                  <span>{t.home.heroCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F3EBD3] hover:bg-[#C9A23F]/25 text-[#1F1F1F] text-base font-semibold border border-[#C9A23F] transition-colors"
                >
                  <span>{t.home.heroSecondaryCta}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE & WHY CHOOSE US SECTION */}
      <section className="py-12 sm:py-16 bg-[#FBF6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Who We Are & Our Goal */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
                {t.home.whoWeAreTitle}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-[#9E1B3E]">
                {t.home.whoWeAreSubtitle}
              </p>
              <p className="text-sm sm:text-base text-[#5A4A2A] leading-relaxed">
                {t.home.whoWeAreBody}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#5A4A2A]">
                <span>{t.common.liveOnGoogleMeet}</span>
                <span aria-hidden="true">•</span>
                <span>{t.common.purdahBadge}</span>
                <span aria-hidden="true">•</span>
                <span>{t.common.feeDiscussed}</span>
              </div>
            </div>

            {/* Right: Why Choose Us Card with 3 Gold Icons */}
            <div className="lg:col-span-6">
              <div className="card-surface p-6 sm:p-8 bg-[#FFFDF8]">
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1F1F1F]">
                    {t.home.whyChooseTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A4A2A] mt-1">
                    {t.home.whyChooseSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {whyChooseItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FBF6E9] border border-[#C9A23F]/30"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shadow-sm mb-3">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <h3 className="text-base font-bold text-[#1F1F1F] mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#5A4A2A] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WOMEN'S SECTION & SPECIAL FACILITIES BANNER */}
      <section className="py-10 sm:py-14 bg-[#F3EBD3] border-y border-[#C9A23F]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#171411] via-[#211C16] to-[#171411] border-2 border-[#C9A23F] p-6 sm:p-8 lg:p-10 shadow-xl text-[#FBF6E9]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Text & Bullets */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs sm:text-sm font-semibold text-[#C9A23F] tracking-wide">
                  {t.home.womenBannerTag}
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#FBF6E9]">
                  {t.home.womenBannerTitle}
                </h2>

                <p className="text-2xl sm:text-3xl font-extrabold text-[#C9A23F]">
                  {t.home.womenBannerHighlight}
                </p>

                <p className="text-sm sm:text-base text-[#E5DEC9]/90 leading-relaxed">
                  {t.home.womenBannerDesc}
                </p>

                <ul className="space-y-2.5 pt-1">
                  {womenBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#FBF6E9]">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A23F] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3">
                  <Link
                    to="/courses?category=women"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-sm sm:text-base font-bold border border-[#C9A23F] shadow-md transition-colors"
                  >
                    <span>{t.home.womenBannerCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="lg:col-span-5">
                <WomenSectionIllustration alt={t.home.womenImageAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES OVERVIEW PREVIEW */}
      <section className="py-12 sm:py-16 bg-[#FBF6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
              {t.home.coursesPreviewTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#5A4A2A] mt-2">
              {t.home.coursesPreviewSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => {
              const title = lang === 'bn' ? course.title_bn : course.title_en;
              const desc = lang === 'bn' ? course.description_bn : course.description_en;
              const ageGroup = lang === 'bn' ? course.ageGroup_bn : course.ageGroup_en;
              const schedule = lang === 'bn' ? course.schedule.bn : course.schedule.en;

              return (
                <div
                  key={course.id}
                  className="card-surface p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F3EBD3] border border-[#C9A23F] flex items-center justify-center text-[#111111] shrink-0">
                        <BookOpen className="w-6 h-6 text-[#9E1B3E]" />
                      </div>
                      <span className="text-xs font-semibold text-[#5A4A2A] text-right">
                        {ageGroup}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                      {title}
                    </h3>

                    <p className="text-sm text-[#5A4A2A] leading-relaxed mb-3">
                      {desc}
                    </p>

                    <p className="text-xs font-medium text-[#1F1F1F] bg-[#F3EBD3]/70 rounded-lg px-3 py-2 border border-[#C9A23F]/30 mb-4">
                      ⏰ {schedule}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#C9A23F]/25 space-y-3">
                    <p className="text-xs font-semibold text-[#9E1B3E]">
                      {t.common.feeDiscussed}
                    </p>

                    <div className="flex items-center gap-2.5">
                      <Link
                        to="/courses"
                        className="flex-1 text-center py-2.5 px-3 rounded-xl border border-[#C9A23F] bg-[#FBF6E9] hover:bg-[#F3EBD3] text-[#1F1F1F] text-xs sm:text-sm font-semibold transition-colors"
                      >
                        {t.common.viewDetails}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          navigate(`/contact?course=${encodeURIComponent(course.id)}`, {
                            state: { selectedCourseId: course.id },
                          })
                        }
                        className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[#111111] hover:bg-[#9E1B3E] text-[#FBF6E9] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        {t.common.enroll}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white border-2 border-[#C9A23F] text-sm sm:text-base font-bold shadow-md transition-colors"
            >
              <span>{t.home.viewAllCourses}</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* TEACHERS SHOWCASE PREVIEW */}
      <section className="py-12 sm:py-16 bg-[#F3EBD3] border-t border-[#C9A23F]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
              {t.home.teachersPreviewTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#5A4A2A] mt-2">
              {t.home.teachersPreviewSubtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7">
            {featuredTeachers.map((teacher) => {
              const name = lang === 'bn' ? teacher.name_bn : teacher.name_en;
              const role = lang === 'bn' ? teacher.role_bn : teacher.role_en;
              const qual = lang === 'bn' ? teacher.qualification_bn : teacher.qualification_en;

              return (
                <article
                  key={teacher.id}
                  className="group card-surface overflow-hidden flex flex-col justify-between bg-[#FFFDF8]"
                >
                  <div>
                    <div
                      className={`text-xs font-bold py-2 px-3 text-center ${
                        teacher.isMudir
                          ? 'bg-[#9E1B3E] text-white'
                          : 'bg-[#F3EBD3] text-[#5A4A2A] border-b border-[#C9A23F]/25'
                      }`}
                    >
                      {role}
                    </div>
                    <TeacherAvatarIllustration
                      gender={teacher.gender}
                      photo={teacher.photo}
                      alt={`${name} - ${role}`}
                      isPublished={teacher.isPublished}
                    />
                    <div className="p-5 text-center space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1F]">{name}</h3>
                      <p className="text-xs font-semibold text-[#9E1B3E]">{role}</p>
                      <p className="text-xs sm:text-sm text-[#5A4A2A] leading-relaxed">{qual}</p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-2">
                    <Link
                      to="/teachers"
                      className="block w-full text-center py-2.5 px-4 rounded-full border border-[#C9A23F] bg-[#FBF6E9] hover:bg-[#C9A23F] text-[#111111] text-xs sm:text-sm font-bold transition-colors"
                    >
                      {t.common.viewDetails}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/teachers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#111111] hover:bg-[#9E1B3E] text-[#FBF6E9] border-2 border-[#C9A23F] text-sm sm:text-base font-bold shadow-md transition-colors"
            >
              <span>{t.home.viewAllTeachers}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CALL-TO-ACTION BAND */}
      <section className="py-12 sm:py-14 bg-[#FBF6E9] border-t border-[#C9A23F]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] [text-wrap:balance]">
            {t.home.finalCtaTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4A2A] max-w-2xl mx-auto">
            {t.home.finalCtaSubtitle}
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-base font-bold border-2 border-[#C9A23F] shadow-md transition-colors"
            >
              <span>{t.home.finalCtaButton}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
