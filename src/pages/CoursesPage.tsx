import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Clock,
  Calendar,
  Users,
  Video,
  CheckCircle2,
  X,
  GraduationCap,
  UserCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  COURSES,
  COURSE_CATEGORIES,
  type Course,
  type CourseCategory,
} from '../data/courses';
import { CourseCardIllustration } from '../components/IslamicIllustrations';

export const CoursesPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  usePageMeta(t.meta.coursesTitle, t.meta.coursesDesc);

  const initialCategoryParam = searchParams.get('category') as CourseCategory | null;
  const validCategories: CourseCategory[] = ['all', 'child', 'adult', 'women', 'tajweed'];
  const initialCategory: CourseCategory =
    initialCategoryParam && validCategories.includes(initialCategoryParam)
      ? initialCategoryParam
      : 'all';

  const [activeCategory, setActiveCategory] = useState<CourseCategory>(initialCategory);
  const [selectedCourseModal, setSelectedCourseModal] = useState<Course | null>(null);

  useEffect(() => {
    if (initialCategoryParam && validCategories.includes(initialCategoryParam)) {
      setActiveCategory(initialCategoryParam);
    }
  }, [initialCategoryParam]);

  const filteredCourses =
    activeCategory === 'all'
      ? COURSES
      : COURSES.filter((course) => course.category === activeCategory);

  const handleEnrollClick = (courseId: string) => {
    navigate(`/contact?course=${encodeURIComponent(courseId)}`, {
      state: { selectedCourseId: courseId },
    });
  };

  const standOutFeatures = [
    {
      icon: GraduationCap,
      title: t.courses.standOut1Title,
      sub: t.courses.standOut1Sub,
      desc: t.courses.standOut1Desc,
    },
    {
      icon: UserCheck,
      title: t.courses.standOut2Title,
      sub: t.courses.standOut2Sub,
      desc: t.courses.standOut2Desc,
    },
    {
      icon: Clock,
      title: t.courses.standOut3Title,
      sub: t.courses.standOut3Sub,
      desc: t.courses.standOut3Desc,
    },
    {
      icon: TrendingUp,
      title: t.courses.standOut4Title,
      sub: t.courses.standOut4Sub,
      desc: t.courses.standOut4Desc,
    },
  ];

  return (
    <div className="space-y-0">
      {/* PAGE HEADER & FILTER TABS */}
      <section className="bg-gradient-to-b from-[#F3EBD3] to-[#FBF6E9] border-b border-[#C9A23F]/40 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            {t.courses.pageTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#5A4A2A] mt-3 max-w-2xl mx-auto">
            {t.courses.pageSubtitle}
          </p>

          {/* Category Filter Tabs (No Hifz tab per Rule 4) */}
          <div
            role="tablist"
            aria-label={t.courses.pageTitle}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {COURSE_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const label = lang === 'bn' ? cat.label_bn : cat.label_en;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#C9A23F] text-[#111111] border-[#C9A23F] shadow-sm'
                      : 'bg-[#FFFDF8] text-[#1F1F1F] border-[#C9A23F]/60 hover:bg-[#F3EBD3]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSE CARDS GRID */}
      <section className="py-12 sm:py-16 bg-[#FBF6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCourses.map((course) => {
              const title = lang === 'bn' ? course.title_bn : course.title_en;
              const desc = lang === 'bn' ? course.description_bn : course.description_en;
              const ageGroup = lang === 'bn' ? course.ageGroup_bn : course.ageGroup_en;
              const duration = lang === 'bn' ? course.duration.bn : course.duration.en;
              const schedule = lang === 'bn' ? course.schedule.bn : course.schedule.en;

              return (
                <article
                  key={course.id}
                  className="card-surface overflow-hidden flex flex-col justify-between bg-[#FFFDF8]"
                >
                  <div>
                    <CourseCardIllustration
                      type={course.illustrationType}
                      title={title}
                    />

                    <div className="p-6 space-y-4">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#1F1F1F]">
                          {title}
                        </h2>
                        <p className="text-sm text-[#5A4A2A] mt-2 leading-relaxed">
                          {desc}
                        </p>
                      </div>

                      {/* Metadata List */}
                      <div className="space-y-2 pt-2 border-t border-[#C9A23F]/25 text-xs sm:text-sm text-[#5A4A2A]">
                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-[#C9A23F] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#1F1F1F]">{t.courses.ageGroupLabel}:</strong>{' '}
                            {ageGroup}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-[#C9A23F] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#1F1F1F]">{t.courses.durationLabel}:</strong>{' '}
                            {duration}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-[#C9A23F] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#1F1F1F]">{t.courses.scheduleLabel}:</strong>{' '}
                            {schedule}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Fee Discussed + Action Buttons */}
                  <div className="px-6 pb-6 pt-3 border-t border-[#C9A23F]/25 space-y-4 bg-[#FBF6E9]/50">
                    <div>
                      <span className="block text-xs text-[#5A4A2A]">
                        {t.courses.feeLabel}:
                      </span>
                      <span className="text-sm font-bold text-[#9E1B3E]">
                        {t.common.feeDiscussed}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedCourseModal(course)}
                        className="w-full py-2.5 px-3 rounded-full border border-[#C9A23F] bg-[#FFFDF8] hover:bg-[#F3EBD3] text-[#1F1F1F] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {t.common.viewDetails}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleEnrollClick(course.id)}
                        className="w-full py-2.5 px-3 rounded-full bg-[#111111] hover:bg-[#9E1B3E] text-[#FBF6E9] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {t.common.enroll}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY OUR COURSES STAND OUT */}
      <section className="py-12 sm:py-16 bg-[#F3EBD3] border-y border-[#C9A23F]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
              {t.courses.standOutTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#5A4A2A] mt-2">
              {t.courses.standOutSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standOutFeatures.map((feat) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="card-surface p-6 flex flex-col items-center text-center bg-[#FFFDF8]"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shadow-sm mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F1F1F]">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-medium text-[#9E1B3E] mb-2">
                    {feat.sub}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5A4A2A] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-12 sm:py-14 bg-[#FBF6E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] [text-wrap:balance]">
            {t.courses.bottomCtaTitle}
          </h2>
          <div>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-base font-bold border-2 border-[#C9A23F] shadow-md transition-colors"
            >
              <span>{t.courses.bottomCtaButton}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* COURSE DETAILS MODAL */}
      {selectedCourseModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
          onClick={() => setSelectedCourseModal(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FBF6E9] border-2 border-[#C9A23F] shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#C9A23F]/40 pb-4">
              <div>
                <h2
                  id="course-modal-title"
                  className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]"
                >
                  {lang === 'bn'
                    ? selectedCourseModal.title_bn
                    : selectedCourseModal.title_en}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-[#9E1B3E] mt-1">
                  {lang === 'bn'
                    ? selectedCourseModal.ageGroup_bn
                    : selectedCourseModal.ageGroup_en}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCourseModal(null)}
                aria-label={t.common.closeModal}
                className="p-2 rounded-full bg-[#F3EBD3] hover:bg-[#C9A23F] text-[#1F1F1F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-5">
              <p className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed">
                {lang === 'bn'
                  ? selectedCourseModal.fullDetails_bn
                  : selectedCourseModal.fullDetails_en}
              </p>

              {/* Highlights */}
              <div className="rounded-xl bg-[#F3EBD3] border border-[#C9A23F]/50 p-4 sm:p-5 space-y-2.5">
                <h3 className="text-base font-bold text-[#1F1F1F]">
                  {t.courses.highlightsTitle}
                </h3>
                <ul className="space-y-2">
                  {(lang === 'bn'
                    ? selectedCourseModal.highlights_bn
                    : selectedCourseModal.highlights_en
                  ).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#5A4A2A]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#9E1B3E] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#C9A23F]/40">
                  <div className="flex items-center gap-2 font-bold text-[#1F1F1F] mb-1">
                    <Clock className="w-4 h-4 text-[#C9A23F]" />
                    <span>{t.courses.durationLabel}</span>
                  </div>
                  <p className="text-[#5A4A2A]">
                    {lang === 'bn'
                      ? selectedCourseModal.duration.bn
                      : selectedCourseModal.duration.en}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#C9A23F]/40">
                  <div className="flex items-center gap-2 font-bold text-[#1F1F1F] mb-1">
                    <Calendar className="w-4 h-4 text-[#C9A23F]" />
                    <span>{t.courses.scheduleLabel}</span>
                  </div>
                  <p className="text-[#5A4A2A]">
                    {lang === 'bn'
                      ? selectedCourseModal.schedule.bn
                      : selectedCourseModal.schedule.en}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#C9A23F]/40">
                  <div className="flex items-center gap-2 font-bold text-[#1F1F1F] mb-1">
                    <Video className="w-4 h-4 text-[#C9A23F]" />
                    <span>{t.courses.classFormatLabel}</span>
                  </div>
                  <p className="text-[#5A4A2A]">{t.courses.classFormatValue}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#C9A23F]/40">
                  <div className="font-bold text-[#1F1F1F] mb-1">
                    {t.courses.feeLabel}
                  </div>
                  <p className="font-bold text-[#9E1B3E]">
                    {t.common.feeDiscussed}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C9A23F]/40 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedCourseModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#C9A23F] bg-[#F3EBD3] hover:bg-[#C9A23F]/30 text-[#1F1F1F] text-sm font-semibold transition-colors cursor-pointer"
              >
                {t.common.closeModal}
              </button>
              <button
                type="button"
                onClick={() => {
                  const id = selectedCourseModal.id;
                  setSelectedCourseModal(null);
                  handleEnrollClick(id);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-sm font-bold border border-[#C9A23F] shadow-sm transition-colors cursor-pointer"
              >
                {t.courses.modalEnrollCta}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
