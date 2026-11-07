import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Video,
  X,
  ArrowRight,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  TEACHERS,
  type Teacher,
  type TeacherFilter,
} from '../data/teachers';
import { TeacherAvatarIllustration } from '../components/IslamicIllustrations';

export const TeachersPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  usePageMeta(t.meta.teachersTitle, t.meta.teachersDesc);

  const [filter, setFilter] = useState<TeacherFilter>('all');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const filterTabs: { id: TeacherFilter; label: string }[] = [
    { id: 'all', label: t.teachers.filterAll },
    { id: 'male', label: t.teachers.filterMale },
    { id: 'female', label: t.teachers.filterFemale },
  ];

  const filteredTeachers =
    filter === 'all'
      ? TEACHERS
      : TEACHERS.filter((teacher) => teacher.gender === filter);

  const handleEnrollWithTeacher = (teacher: Teacher) => {
    const defaultCourseId =
      teacher.gender === 'female' ? 'womens-special-batch' : 'noorani-qaida';
    navigate(`/contact?course=${encodeURIComponent(defaultCourseId)}`, {
      state: { selectedCourseId: defaultCourseId },
    });
  };

  return (
    <div className="space-y-0">
      {/* PAGE HEADER & GENDER FILTER TABS */}
      <section className="bg-gradient-to-b from-[#F3EBD3] to-[#FBF6E9] border-b border-[#C9A23F]/40 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            {t.teachers.pageTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#5A4A2A] mt-3 max-w-2xl mx-auto">
            {t.teachers.pageSubtitle}
          </p>

          {/* Filter Tabs: সব শিক্ষক / All, পুরুষ শিক্ষক / Male, মহিলা শিক্ষিকা / Female */}
          <div
            role="tablist"
            aria-label={t.teachers.pageTitle}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {filterTabs.map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setFilter(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#C9A23F] text-[#111111] border-[#C9A23F] shadow-sm'
                      : 'bg-[#FFFDF8] text-[#1F1F1F] border-[#C9A23F]/60 hover:bg-[#F3EBD3]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEACHERS GRID */}
      <section className="py-12 sm:py-16 bg-[#FBF6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredTeachers.map((teacher) => {
              const displayName =
                lang === 'bn' ? teacher.name_bn : teacher.name_en;
              const displayQual =
                lang === 'bn' ? teacher.qualification_bn : teacher.qualification_en;
              const displayRole =
                lang === 'bn' ? teacher.role_bn : teacher.role_en;
              const displaySpecialty =
                lang === 'bn' ? teacher.specialty_bn : teacher.specialty_en;

              return (
                <article
                  key={teacher.id}
                  className="group card-surface overflow-hidden flex flex-col justify-between bg-[#FFFDF8]"
                >
                  <div>
                    {/* Top Designation Banner */}
                    {teacher.isMudir ? (
                      <div className="bg-[#9E1B3E] text-white text-xs font-bold py-2 px-4 text-center tracking-wide">
                        {t.common.mudirBadge}
                      </div>
                    ) : teacher.gender === 'female' ? (
                      <div className="bg-[#C9A23F] text-[#111111] text-xs font-bold py-2 px-4 text-center tracking-wide">
                        {t.common.femaleTeacherBadge}
                      </div>
                    ) : (
                      <div className="bg-[#F3EBD3] text-[#5A4A2A] text-xs font-semibold py-2 px-4 text-center border-b border-[#C9A23F]/25">
                        {t.common.maleTeacherBadge}
                      </div>
                    )}

                    {/* Teacher Portrait or Modest Female Avatar */}
                    <TeacherAvatarIllustration
                      gender={teacher.gender}
                      photo={teacher.photo}
                      alt={`${displayName} - ${displayRole}`}
                      isPublished={teacher.isPublished}
                    />

                    <div className="p-6 space-y-3">
                      <div>
                        <span className="text-xs font-bold text-[#9E1B3E] block">
                          {displayRole}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#1F1F1F] mt-0.5">
                          {displayName}
                        </h2>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[#C9A23F]/25 text-xs sm:text-sm text-[#5A4A2A]">
                        <div className="flex items-start gap-2">
                          <GraduationCap className="w-4 h-4 text-[#C9A23F] shrink-0 mt-0.5" />
                          <span>{displayQual}</span>
                        </div>

                        <div className="flex items-start gap-2">
                          <BookOpen className="w-4 h-4 text-[#C9A23F] shrink-0 mt-0.5" />
                          <span>{displaySpecialty}</span>
                        </div>
                      </div>

                      {teacher.gender === 'female' && (
                        <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-[#9E1B3E]">
                          <ShieldCheck className="w-4 h-4 text-[#C9A23F] shrink-0" />
                          <span>{t.common.purdahBadge}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-3 border-t border-[#C9A23F]/25 bg-[#FBF6E9]/50 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedTeacher(teacher)}
                      className="w-full py-2.5 px-3 rounded-full border border-[#C9A23F] bg-[#FFFDF8] hover:bg-[#F3EBD3] text-[#1F1F1F] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {t.common.viewDetails}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEnrollWithTeacher(teacher)}
                      className="w-full py-2.5 px-3 rounded-full bg-[#111111] hover:bg-[#9E1B3E] text-[#FBF6E9] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {t.common.enroll}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM ENROLLMENT CTA */}
      <section className="py-12 sm:py-14 bg-[#F3EBD3] border-t border-[#C9A23F]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] [text-wrap:balance]">
            {t.teachers.bottomCtaTitle}
          </h2>
          <div>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-base font-bold border-2 border-[#C9A23F] shadow-md transition-colors"
            >
              <span>{t.teachers.bottomCtaButton}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TEACHER DETAILS MODAL */}
      {selectedTeacher && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="teacher-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
          onClick={() => setSelectedTeacher(null)}
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FBF6E9] border-2 border-[#C9A23F] shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#C9A23F]/40 pb-4">
              <div className="flex items-center gap-4">
                {selectedTeacher.isPublished && (
                  <img
                    src={selectedTeacher.photo}
                    alt={lang === 'bn' ? selectedTeacher.name_bn : selectedTeacher.name_en}
                    onError={(e) => {
                      const target = e.currentTarget;
                      const currentAttr = target.getAttribute('src') || '';
                      if (!currentAttr.startsWith('./public/')) {
                        target.setAttribute(
                          'src',
                          currentAttr.replace(/^\.\//, './public/')
                        );
                      }
                    }}
                    className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#C9A23F] bg-white shrink-0"
                  />
                )}
                <div>
                  <p className="text-xs font-bold text-[#9E1B3E]">
                    {lang === 'bn' ? selectedTeacher.role_bn : selectedTeacher.role_en}
                  </p>
                  <h2
                    id="teacher-modal-title"
                    className="text-xl sm:text-2xl font-bold text-[#1F1F1F] mt-0.5"
                  >
                    {lang === 'bn' ? selectedTeacher.name_bn : selectedTeacher.name_en}
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTeacher(null)}
                aria-label={t.common.closeModal}
                className="p-2 rounded-full bg-[#F3EBD3] hover:bg-[#C9A23F] text-[#1F1F1F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-sm">
              {selectedTeacher.gender === 'female' && (
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9E1B3E]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    {t.common.femaleTeacherBadge} • {t.common.purdahBadge}
                  </span>
                </div>
              )}

              <p className="text-[#1F1F1F] leading-relaxed text-sm sm:text-base">
                {lang === 'bn'
                  ? selectedTeacher.details_bn
                  : selectedTeacher.details_en}
              </p>

              <div className="space-y-3 rounded-xl bg-[#FFFDF8] border border-[#C9A23F]/40 p-4">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-[#C9A23F] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#1F1F1F]">
                      {t.teachers.qualificationLabel}:{' '}
                    </span>
                    <span className="text-[#5A4A2A]">
                      {lang === 'bn'
                        ? selectedTeacher.qualification_bn
                        : selectedTeacher.qualification_en}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-[#C9A23F] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#1F1F1F]">
                      {t.teachers.specialtyLabel}:{' '}
                    </span>
                    <span className="text-[#5A4A2A]">
                      {lang === 'bn'
                        ? selectedTeacher.specialty_bn
                        : selectedTeacher.specialty_en}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Video className="w-4 h-4 text-[#C9A23F] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#1F1F1F]">
                      {t.teachers.classModeLabel}:{' '}
                    </span>
                    <span className="text-[#5A4A2A]">
                      {t.teachers.classModeValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C9A23F]/40 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedTeacher(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#C9A23F] bg-[#F3EBD3] hover:bg-[#C9A23F]/30 text-[#1F1F1F] text-sm font-semibold transition-colors cursor-pointer"
              >
                {t.common.closeModal}
              </button>
              <button
                type="button"
                onClick={() => {
                  const teacher = selectedTeacher;
                  setSelectedTeacher(null);
                  handleEnrollWithTeacher(teacher);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-sm font-bold border border-[#C9A23F] shadow-sm transition-colors cursor-pointer"
              >
                {t.common.enroll}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
