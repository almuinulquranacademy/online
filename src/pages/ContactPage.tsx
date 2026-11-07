import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  Mail,
  MessageCircle,
  Facebook,
  User,
  MapPin,
  Phone,
  BookOpen,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Send,
  ArrowUp,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_CONFIG } from '../config';
import { COURSES } from '../data/courses';

interface FormValues {
  fullName: string;
  email: string;
  address: string;
  whatsapp: string;
  courseId: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  whatsapp?: string;
  courseId?: string;
}

/**
 * Validates Bangladeshi mobile / WhatsApp number format.
 * Supports:
 * - 01[3-9]XXXXXXXX (11 digits)
 * - +8801[3-9]XXXXXXXX or 8801[3-9]XXXXXXXX
 * Also converts Bengali numerals (০-৯) to ASCII digits before validation.
 */
function normalizeDigits(input: string): string {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return input
    .split('')
    .map((ch) => {
      const idx = bengaliDigits.indexOf(ch);
      return idx !== -1 ? String(idx) : ch;
    })
    .join('')
    .replace(/[\s\-()]/g, '');
}

function isValidBangladeshiWhatsApp(raw: string): boolean {
  const cleaned = normalizeDigits(raw);
  return /^(?:\+?880|0)1[3-9]\d{8}$/.test(cleaned);
}

function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}

export const ContactPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const formContainerRef = useRef<HTMLDivElement>(null);

  usePageMeta(t.meta.contactTitle, t.meta.contactDesc);

  // Pre-select course if passed via router state or query param (?course=...)
  const stateCourseId = (location.state as { selectedCourseId?: string } | null)
    ?.selectedCourseId;
  const queryCourseId = searchParams.get('course');
  const initialCourseId = stateCourseId || queryCourseId || '';

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    address: '',
    whatsapp: '',
    courseId: COURSES.some((c) => c.id === initialCourseId) ? initialCourseId : '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedSnapshot, setSubmittedSnapshot] = useState<FormValues | null>(null);

  useEffect(() => {
    const incomingId = stateCourseId || queryCourseId;
    if (incomingId && COURSES.some((c) => c.id === incomingId)) {
      setValues((prev) => ({ ...prev, courseId: incomingId }));
    }
  }, [stateCourseId, queryCourseId]);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      newErrors.fullName = t.contact.validation.nameRequired;
    }

    if (values.email.trim() && !isValidEmail(values.email)) {
      newErrors.email = t.contact.validation.emailInvalid;
    }

    if (!values.whatsapp.trim()) {
      newErrors.whatsapp = t.contact.validation.whatsappRequired;
    } else if (!isValidBangladeshiWhatsApp(values.whatsapp)) {
      newErrors.whatsapp = t.contact.validation.whatsappInvalid;
    }

    if (!values.courseId) {
      newErrors.courseId = t.contact.validation.courseRequired;
    }

    return newErrors;
  };

  const getSelectedCourseName = (courseId: string): string => {
    const found = COURSES.find((c) => c.id === courseId);
    if (!found) return courseId;
    return `${found.title_bn} (${found.title_en})`;
  };

  const buildWhatsAppPreFilledUrl = (data: FormValues): string => {
    const courseTitle = getSelectedCourseName(data.courseId);
    const lines = [
      `আসসালামু আলাইকুম, আমি আল মুঈনুল কুরআন অনলাইন একাডেমিতে ভর্তি হতে আগ্রহী।`,
      `Assalamu Alaikum, I would like to enroll at Al Muinul Quran Online Academy.`,
      ``,
      `• নাম / Name: ${data.fullName}`,
      data.email ? `• ইমেইল / Email: ${data.email}` : '',
      `• ঠিকানা / Address: ${data.address || 'N/A'}`,
      `• হোয়াটসঅ্যাপ / WhatsApp: ${data.whatsapp}`,
      `• নির্বাচিত কোর্স / Course: ${courseTitle}`,
      data.message ? `• বার্তা / Message: ${data.message}` : '',
    ].filter(Boolean);

    return `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const buildMailtoFallbackUrl = (data: FormValues): string => {
    const courseTitle = getSelectedCourseName(data.courseId);
    const subject = `ভর্তি আবেদন / New Admission Lead: ${data.fullName} - ${courseTitle}`;
    const body = [
      `আল মুঈনুল কুরআন অনলাইন একাডেমি - নতুন ভর্তি আবেদন (New Enrollment Lead)`,
      `------------------------------------------------------------`,
      `• শিক্ষার্থীর নাম (Full Name): ${data.fullName}`,
      `• হোয়াটসঅ্যাপ নম্বর (WhatsApp): ${data.whatsapp}`,
      `• শিক্ষার্থীর ইমেইল (Student Email): ${data.email || 'প্রদান করা হয়নি'}`,
      `• বর্তমান ঠিকানা (Address): ${data.address || 'প্রদান করা হয়নি'}`,
      `• নির্বাচিত কোর্স (Selected Course): ${courseTitle}`,
      `• বার্তা (Message): ${data.message || 'নেই'}`,
    ].join('\n');

    return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    const snapshot = { ...values };
    setSubmittedSnapshot(snapshot);

    try {
      const courseTitle = getSelectedCourseName(values.courseId);
      const normalizedPhone = normalizeDigits(values.whatsapp);
      const studentWaDigits = normalizedPhone.startsWith('+880')
        ? normalizedPhone.slice(1)
        : normalizedPhone.startsWith('0')
        ? `88${normalizedPhone}`
        : normalizedPhone;

      const payload: Record<string, string> = {
        _subject: `নতুন ভর্তি আবেদন (Admission Lead): ${values.fullName.trim()} — ${courseTitle}`,
        _template: 'table',
        _captcha: 'false',
        'শিক্ষার্থীর নাম (Student Name)': values.fullName.trim(),
        'হোয়াটসঅ্যাপ নম্বর (WhatsApp Number)': normalizedPhone,
        'সরাসরি হোয়াটসঅ্যাপ লিংক (Click to Confirm on WhatsApp)': `https://wa.me/${studentWaDigits}`,
        'শিক্ষার্থীর ইমেইল (Student Email)': values.email.trim() || 'Not provided',
        'বর্তমান ঠিকানা (Current Address)': values.address.trim() || 'Not provided',
        'নির্বাচিত কোর্স (Selected Course)': courseTitle,
        'শিক্ষার্থীর বার্তা (Message / Preferred Time)': values.message.trim() || 'None',
        'ফর্মের ভাষা (Language)': lang === 'bn' ? 'বাংলা (Bengali)' : 'English',
      };

      if (values.email.trim()) {
        payload._replyto = values.email.trim();
        payload.email = values.email.trim();
      }

      const response = await fetch(SITE_CONFIG.formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && data.success !== 'false' && data.success !== false) {
        setSubmitStatus('success');
        setValues({
          fullName: '',
          email: '',
          address: '',
          whatsapp: '',
          courseId: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const fallbackPayload = submittedSnapshot || values;

  return (
    <div className="space-y-0">
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-b from-[#F3EBD3] to-[#FBF6E9] border-b border-[#C9A23F]/40 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            {t.contact.pageTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#5A4A2A] mt-3 max-w-2xl mx-auto">
            {t.contact.pageSubtitle}
          </p>
        </div>
      </section>

      {/* THREE CONTACT CARDS */}
      <section className="py-10 sm:py-14 bg-[#FBF6E9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F1F1F] text-center mb-8">
            {t.contact.detailsHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="card-surface p-6 sm:p-7 flex flex-col items-center text-center justify-between bg-[#FFFDF8]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shadow-sm mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {t.contact.emailCardTitle}
                </h3>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm sm:text-base font-medium text-[#5A4A2A] hover:text-[#9E1B3E] break-all transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="pt-5 w-full">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full border border-[#C9A23F] bg-[#FBF6E9] hover:bg-[#F3EBD3] text-[#1F1F1F] text-xs sm:text-sm font-bold transition-colors"
                >
                  {t.contact.emailAction}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="card-surface p-6 sm:p-7 flex flex-col items-center text-center justify-between bg-[#FFFDF8]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shadow-sm mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {t.contact.whatsappCardTitle}
                </h3>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-[#1F1F1F] hover:text-[#9E1B3E] tabular-nums transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="pt-5 w-full">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full bg-[#111111] hover:bg-[#9E1B3E] text-[#FBF6E9] text-xs sm:text-sm font-bold transition-colors"
                >
                  {t.contact.whatsappAction}
                </a>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="card-surface p-6 sm:p-7 flex flex-col items-center text-center justify-between bg-[#FFFDF8]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shadow-sm mb-4">
                  <Facebook className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {t.contact.facebookCardTitle}
                </h3>
                <a
                  href={SITE_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium text-[#5A4A2A] hover:text-[#9E1B3E] break-all transition-colors"
                >
                  {SITE_CONFIG.facebookDisplay}/
                </a>
              </div>
              <div className="pt-5 w-full">
                <a
                  href={SITE_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full border border-[#C9A23F] bg-[#FBF6E9] hover:bg-[#F3EBD3] text-[#1F1F1F] text-xs sm:text-sm font-bold transition-colors"
                >
                  {t.contact.facebookAction}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT FORM SECTION */}
      <section ref={formContainerRef} className="py-10 sm:py-16 bg-[#FBF6E9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
              {t.contact.formSectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#5A4A2A] mt-2 max-w-2xl mx-auto">
              {t.contact.formSectionSubtitle}
            </p>
          </div>

          <div className="card-surface p-6 sm:p-10 bg-[#FFFDF8]">
            {submitStatus === 'success' ? (
              <div className="text-center py-4 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#C9A23F]/25 border-2 border-[#C9A23F] text-[#1F1F1F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 text-[#9E1B3E]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F1F1F]">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#5A4A2A] max-w-lg mx-auto leading-relaxed">
                  {t.contact.successMessage}
                </p>

                {/* Submitted Lead Summary Card */}
                {submittedSnapshot && (
                  <div className="text-left max-w-md mx-auto rounded-xl bg-[#FBF6E9] border border-[#C9A23F]/50 p-4 text-xs sm:text-sm space-y-1.5">
                    <p className="font-bold text-[#9E1B3E] mb-2">
                      {t.contact.leadSummaryTitle}
                    </p>
                    <p>
                      <strong>{t.contact.nameLabel}:</strong> {submittedSnapshot.fullName}
                    </p>
                    <p>
                      <strong>{t.contact.whatsappLabel}:</strong> {submittedSnapshot.whatsapp}
                    </p>
                    {submittedSnapshot.email && (
                      <p>
                        <strong>{t.contact.emailCardTitle}:</strong> {submittedSnapshot.email}
                      </p>
                    )}
                    <p>
                      <strong>{t.contact.courseLabel}:</strong>{' '}
                      {getSelectedCourseName(submittedSnapshot.courseId)}
                    </p>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppPreFilledUrl(fallbackPayload)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white text-sm font-bold shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.contact.whatsappFallbackBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#C9A23F] bg-[#F3EBD3] hover:bg-[#C9A23F]/40 text-[#1F1F1F] text-sm font-semibold transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnotherBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {submitStatus === 'error' && (
                  <div className="rounded-xl bg-[#9E1B3E]/10 border border-[#9E1B3E] p-4 space-y-3">
                    <div className="flex items-start gap-2.5 text-[#9E1B3E]">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm sm:text-base">
                          {t.contact.errorTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#1F1F1F] mt-1">
                          {t.contact.errorMessage}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={buildMailtoFallbackUrl(fallbackPayload)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-xs sm:text-sm font-bold transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{t.contact.directEmailFallbackBtn}</span>
                      </a>

                      <a
                        href={buildWhatsAppPreFilledUrl(fallbackPayload)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#25D366] text-[#FBF6E9] text-xs sm:text-sm font-bold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{t.contact.whatsappFallbackBtn}</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* 1. Full Name (Required) */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold text-[#1F1F1F] mb-1.5"
                  >
                    {t.contact.nameLabel} <span className="text-[#9E1B3E]">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shrink-0">
                      <User className="w-5 h-5" />
                    </span>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={values.fullName}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, fullName: e.target.value }));
                        if (errors.fullName) {
                          setErrors((prev) => ({ ...prev, fullName: undefined }));
                        }
                      }}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-full bg-[#FBF6E9] border border-[#C9A23F]/60 focus:border-[#9E1B3E] focus:outline-none text-sm sm:text-base text-[#1F1F1F]"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs font-semibold text-[#9E1B3E] mt-1.5 pl-14">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* 2. Student Email Address (for direct email reply/confirmation) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[#1F1F1F] mb-1.5"
                  >
                    {t.contact.emailLabel}
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-full bg-[#FBF6E9] border border-[#C9A23F]/60 focus:border-[#9E1B3E] focus:outline-none text-sm sm:text-base text-[#1F1F1F]"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs font-semibold text-[#9E1B3E] mt-1.5 pl-14">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* 3. Current Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-bold text-[#1F1F1F] mb-1.5"
                  >
                    {t.contact.addressLabel}
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={values.address}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, address: e.target.value }))
                      }
                      placeholder={t.contact.addressPlaceholder}
                      className="w-full px-4 py-3 rounded-full bg-[#FBF6E9] border border-[#C9A23F]/60 focus:border-[#9E1B3E] focus:outline-none text-sm sm:text-base text-[#1F1F1F]"
                    />
                  </div>
                </div>

                {/* 4. WhatsApp Number (Required, Bangladeshi format validated) */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-bold text-[#1F1F1F] mb-1.5"
                  >
                    {t.contact.whatsappLabel} <span className="text-[#9E1B3E]">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </span>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      value={values.whatsapp}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, whatsapp: e.target.value }));
                        if (errors.whatsapp) {
                          setErrors((prev) => ({ ...prev, whatsapp: undefined }));
                        }
                      }}
                      placeholder={t.contact.whatsappPlaceholder}
                      className="w-full px-4 py-3 rounded-full bg-[#FBF6E9] border border-[#C9A23F]/60 focus:border-[#9E1B3E] focus:outline-none text-sm sm:text-base text-[#1F1F1F]"
                    />
                  </div>
                  {errors.whatsapp && (
                    <p className="text-xs font-semibold text-[#9E1B3E] mt-1.5 pl-14">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* 5. Select Course (Dropdown, Required, Pre-filled when coming from a course card) */}
                <div>
                  <label
                    htmlFor="courseId"
                    className="block text-sm font-bold text-[#1F1F1F] mb-1.5"
                  >
                    {t.contact.courseLabel} <span className="text-[#9E1B3E]">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </span>
                    <select
                      id="courseId"
                      name="courseId"
                      required
                      value={values.courseId}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, courseId: e.target.value }));
                        if (errors.courseId) {
                          setErrors((prev) => ({ ...prev, courseId: undefined }));
                        }
                      }}
                      className="w-full px-4 py-3 rounded-full bg-[#FBF6E9] border border-[#C9A23F]/60 focus:border-[#9E1B3E] focus:outline-none text-sm sm:text-base text-[#1F1F1F]"
                    >
                      <option value="">{t.contact.coursePlaceholder}</option>
                      {COURSES.map((course) => (
                        <option key={course.id} value={course.id}>
                          {lang === 'bn' ? course.title_bn : course.title_en}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.courseId && (
                    <p className="text-xs font-semibold text-[#9E1B3E] mt-1.5 pl-14">
                      {errors.courseId}
                    </p>
                  )}
                </div>

                {/* 6. Message (Optional) */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-[#1F1F1F] mb-1.5"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <div className="flex items-start gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#C9A23F] text-[#111111] flex items-center justify-center shrink-0 mt-1">
                      <MessageSquare className="w-5 h-5" />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FBF6E9] border border-[#C9A23F]/60 focus:border-[#9E1B3E] focus:outline-none text-sm sm:text-base text-[#1F1F1F]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#9E1B3E] hover:bg-[#821532] disabled:opacity-60 text-white text-base font-bold border-2 border-[#C9A23F]/80 shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? t.contact.submittingButton
                        : t.contact.submitButton}
                    </span>
                  </button>
                </div>

                {/* Fee discussion note under form + Direct WhatsApp / Email options */}
                <div className="pt-2 text-center space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-[#5A4A2A]">
                    {t.contact.feeNote}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={buildWhatsAppPreFilledUrl(values)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#9E1B3E] hover:underline"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.contact.whatsappFallbackBtn}</span>
                    </a>

                    <span aria-hidden="true" className="text-[#C9A23F]">
                      •
                    </span>

                    <a
                      href={buildMailtoFallbackUrl(values)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#5A4A2A] hover:text-[#9E1B3E] hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{t.contact.directEmailFallbackBtn}</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FINAL SECTION: APPLY NOW (SCROLLS TO FORM) */}
      <section className="py-12 sm:py-14 bg-[#F3EBD3] border-t border-[#C9A23F]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
            {t.contact.bottomSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4A2A] max-w-xl mx-auto">
            {t.contact.bottomSectionSubtitle}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9E1B3E] hover:bg-[#821532] text-white text-base font-bold border-2 border-[#C9A23F] shadow-md transition-colors cursor-pointer"
            >
              <span>{t.contact.bottomScrollButton}</span>
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
