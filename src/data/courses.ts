/**
 * Course catalog data for Al Muinul Quran Online Academy.
 *
 * IMPORTANT BUSINESS RULES:
 * 1. NO FIXED PRICE: fee is strictly null for every course. UI displays "আলোচনা সাপেক্ষে ফি নির্ধারিত হবে / Fee discussed after enrollment".
 * 2. NO RESTRICTIVE AGE LIMITS: Learners of any age can learn Noorani Qaida, Nazera, and Tajweed. Women of all ages can join the Women's Special Batch.
 * 3. FLEXIBLE SCHEDULE: Every course allows students to choose their preferred class time via discussion.
 * 4. ONE-TO-ONE LIVE CLASSES on Google Meet (no recorded classes).
 * 5. NO HIFZ COURSE: The academy does NOT teach Hifz online.
 */

export type CourseCategory = 'all' | 'child' | 'adult' | 'women' | 'tajweed';

export interface Course {
  id: string;
  category: Exclude<CourseCategory, 'all'>;
  title_bn: string;
  title_en: string;
  description_bn: string;
  description_en: string;
  fullDetails_bn: string;
  fullDetails_en: string;
  highlights_bn: string[];
  highlights_en: string[];
  ageGroup_bn: string;
  ageGroup_en: string;
  duration: {
    bn: string;
    en: string;
  };
  schedule: {
    bn: string;
    en: string;
  };
  fee: null;
  illustrationType:
    | 'child-qaida'
    | 'child-nazera'
    | 'adult-nazera'
    | 'women-batch'
    | 'tajweed-makharij';
}

export const COURSE_CATEGORIES: {
  id: CourseCategory;
  label_bn: string;
  label_en: string;
}[] = [
  { id: 'all', label_bn: 'সব কোর্স', label_en: 'All' },
  { id: 'child', label_bn: 'শিশু ও প্রাথমিক বিভাগ', label_en: 'Foundational & Children' },
  { id: 'adult', label_bn: 'বয়স্ক বিভাগ', label_en: 'Adults' },
  { id: 'women', label_bn: 'মহিলাদের বিশেষ ব্যাচ', label_en: 'Women' },
  { id: 'tajweed', label_bn: 'তাজবীদ ও মাখরাজ', label_en: 'Tajweed' },
];

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    category: 'child',
    title_bn: 'নূরানী কায়দা',
    title_en: 'Noorani Qaida',
    description_bn:
      'শিশু থেকে শুরু করে যেকোনো বয়সের শিক্ষার্থীদের জন্য আরবি হরফ চেনা, সঠিক মাখরাজ ও উচ্চারণের মাধ্যমে কুরআন শিক্ষার প্রাথমিক ও মজবুত ভিত্তি।',
    description_en:
      'Open to learners of any age—recognize Arabic letters, master proper Makharij (articulation points), and build a strong foundation in Quran reading from scratch.',
    fullDetails_bn:
      'নূরানী কায়দা কোর্সটি শিশু, কিশোর, তরুণ কিংবা বয়োজ্যেষ্ঠ—যেকোনো বয়সের নতুন শিক্ষার্থীদের জন্য সাজানো হয়েছে। গুগল মিটে ওয়ান-টু-ওয়ান লাইভ ক্লাসের মাধ্যমে একজন অভিজ্ঞ শিক্ষক অত্যন্ত যত্ন ও ধৈর্যের সাথে আরবি ২৯টি হরফের সঠিক উচ্চারণ, হরকত, তানবীন, যুক্তাক্ষর এবং মাদ্দ-গুন্নাহর প্রাথমিক নিয়মাবলী শেখান। আপনার পছন্দ অনুযায়ী যেকোনো সুবিধাজনক সময়ে আলোচনা করে ক্লাস নেওয়ার সুযোগ রয়েছে।',
    fullDetails_en:
      'The Noorani Qaida course is open to learners of all ages—whether children, youth, or adults starting from the beginning. Through one-to-one live classes on Google Meet, an attentive instructor patiently teaches the 29 Arabic letters, vowel signs (Harakat), Tanween, compound letters, and essential rules of Madd and Ghunnah. You can schedule your live class at any preferred time after discussion with us.',
    highlights_bn: [
      'শিশু থেকে শুরু করে যেকোনো বয়সের মানুষ এই কোর্সে যুক্ত হতে পারবেন',
      'আরবি ২৯টি হরফের সঠিক মাখরাজ ও উচ্চারণ অনুশীলন',
      'হরকত, তানবীন, জযম ও তাশদীদ চেনার সহজ ও কার্যকর কৌশল',
      'আপনার পছন্দ অনুযায়ী যেকোনো সময় আমাদের সাথে আলোচনা করে ক্লাস নিতে পারবেন',
    ],
    highlights_en: [
      'Open to learners of any age starting from the basics',
      'Accurate pronunciation and Makharij of all 29 Arabic letters',
      'Step-by-step mastery of Harakat, Tanween, Sukoon, and Tashdeed',
      'Choose any convenient class time according to your preference after discussion',
    ],
    ageGroup_bn: 'সকল বয়সের জন্য (যেকোনো বয়সের মানুষ পড়তে পারবেন)',
    ageGroup_en: 'Open to All Ages (Anyone can enroll)',
    duration: {
      bn: 'আলোচনা সাপেক্ষে (শিক্ষার্থীর অগ্রগতি অনুযায়ী)',
      en: 'Flexible (Based on learner progress)',
    },
    schedule: {
      bn: 'আপনার পছন্দ অনুযায়ী যেকোনো সময় আলোচনা করে ক্লাস নেওয়া যাবে',
      en: 'Any convenient time of your choice (arranged via discussion)',
    },
    fee: null,
    illustrationType: 'child-qaida',
  },
  {
    id: 'nazera-tajweed-child',
    category: 'child',
    title_bn: 'নাজেরা ও তাজবীদ',
    title_en: 'Nazera & Tajweed',
    description_bn:
      'যেকোনো বয়সের শিক্ষার্থীদের জন্য তাজবীদের নিয়ম মেনে দেখে দেখে পবিত্র কুরআন মাজীদ শুদ্ধ ও সাবলীলভাবে তিলাওয়াত শিক্ষা।',
    description_en:
      'For learners of any age—learn to recite the Holy Quran fluently by looking at the Mushaf while applying complete Tajweed rules.',
    fullDetails_bn:
      'কায়দা সম্পন্ন করার পর পবিত্র কুরআন শরীফ দেখে দেখে সাবলীল ও শুদ্ধভাবে তিলাওয়াত শেখানোর জন্য এই কোর্স। শিশু, তরুণ বা বয়স্ক—যেকোনো বয়সের শিক্ষার্থী এই কোর্সে ভর্তি হতে পারবেন। আমপারা (৩০তম পারা) থেকে শুরু করে পূর্ণ কুরআন মাজীদ তাজবীদ সহকারে তিলাওয়াত অনুশীলন করানো হয় এবং আপনার পছন্দ অনুযায়ী যেকোনো সময়ে আলোচনা করে ক্লাসের সময় নির্ধারণ করা যায়।',
    fullDetails_en:
      'Designed for learners of any age ready to transition from Qaida to fluent recitation of the Holy Quran. Starting from Juz Amma (30th Para) through the complete Mushaf, students practice sight-reading with applied Tajweed rules in 1-on-1 live Google Meet sessions at any convenient time chosen through discussion.',
    highlights_bn: [
      'যেকোনো বয়সের শিক্ষার্থী নাজেরা ও তাজবীদ কোর্সে অংশ নিতে পারবেন',
      'আমপারা ও পূর্ণ কুরআন মাজীদ শুদ্ধ তাজবীদসহ দেখে তিলাওয়াত শিক্ষা',
      'মাদ্দ, গুন্নাহ, ইখফা, ইদগাম ও ওয়াকফের ব্যবহারিক প্রয়োগ ও তাৎক্ষণিক সংশোধন',
      'আপনার পছন্দ অনুযায়ী যেকোনো সময় আমাদের সাথে আলোচনা করে ক্লাস নিতে পারবেন',
    ],
    highlights_en: [
      'Welcomes learners of any age for fluent Quran recitation',
      'Fluent recitation of Juz Amma and the full Quran with proper Tajweed',
      'Practical application of Madd, Ghunnah, Ikhfa, Idgham, and Waqf rules',
      'Choose any convenient class time according to your preference after discussion',
    ],
    ageGroup_bn: 'সকল বয়সের জন্য (যেকোনো বয়সের মানুষ পড়তে পারবেন)',
    ageGroup_en: 'Open to All Ages (Anyone can enroll)',
    duration: {
      bn: 'আলোচনা সাপেক্ষে (পর্যায়ক্রমিক অগ্রগতি)',
      en: 'Flexible (Step-by-step progression)',
    },
    schedule: {
      bn: 'আপনার পছন্দ অনুযায়ী যেকোনো সময় আলোচনা করে ক্লাস নেওয়া যাবে',
      en: 'Any convenient time of your choice (arranged via discussion)',
    },
    fee: null,
    illustrationType: 'child-nazera',
  },
  {
    id: 'adult-nazera-tajweed',
    category: 'adult',
    title_bn: 'বয়স্কদের নাজেরা ও তাজবীদ',
    title_en: 'Nazera & Tajweed for Adults',
    description_bn:
      'কর্মজীবী, যুবক ও বয়োজ্যেষ্ঠদের জন্য সম্পূর্ণ সংকোচহীন পরিবেশে ওয়ান-টু-ওয়ান লাইভ ক্লাসে কায়দা থেকে শুদ্ধ কুরআন শিক্ষা।',
    description_en:
      'Confidential, respectful one-to-one live classes for working professionals, youth, and seniors to learn or correct their Quran recitation.',
    fullDetails_bn:
      'অনেকেই ছোটবেলায় কুরআন শেখার সুযোগ পাননি কিংবা দীর্ঘদিন চর্চা না থাকায় শুদ্ধভাবে তিলাওয়াত করতে দ্বিধাবোধ করেন। তাঁদের জন্য আমাদের এই বিশেষ কোর্সে সম্পূর্ণ ব্যক্তিগত (One-to-One) গুগল মিট লাইভ ক্লাসে কায়দা/আলিফ-বা থেকে শুরু করে তাজবীদসহ শুদ্ধ কুরআন তিলাওয়াত শেখানো হয়। আপনার পছন্দ অনুযায়ী যেকোনো সুবিধাজনক সময়ে আলোচনা করে ক্লাস নিতে পারবেন।',
    fullDetails_en:
      'Many adults and seniors either missed the opportunity to learn the Quran earlier or wish to correct their recitation without hesitation. Conducted strictly one-to-one on Google Meet, this course takes learners from foundational letter articulation to confident Quran recitation at any time slot you prefer after discussion.',
    highlights_bn: [
      'অন্য কোনো শিক্ষার্থীর সামনে সংকোচ ছাড়াই ১:১ ব্যক্তিগত লাইভ ক্লাস',
      'প্রয়োজন অনুযায়ী কায়দা থেকে শুরু করে নাজেরা ও তাজবীদ পর্যন্ত সম্পূর্ণ শিক্ষা',
      'নামাজের সূরা, কিরাআত ও প্রাত্যহিক মাসনূন দোয়া শুদ্ধকরণ',
      'আপনার পছন্দ অনুযায়ী যেকোনো সময় আমাদের সাথে আলোচনা করে ক্লাস নিতে পারবেন',
    ],
    highlights_en: [
      '100% private 1-on-1 Google Meet sessions with zero hesitation',
      'Complete learning path from Qaida basics to fluent Nazera & Tajweed',
      'Focus on Salah Surahs, accurate Qira’at, and daily Masnoon Duas',
      'Choose any convenient class time according to your preference after discussion',
    ],
    ageGroup_bn: 'সকল বয়সের জন্য (বিশেষত কর্মজীবী ও বয়োজ্যেষ্ঠদের উপযোগী)',
    ageGroup_en: 'Open to All Ages (Tailored for Adults & Seniors)',
    duration: {
      bn: 'আলোচনা সাপেক্ষে (শিক্ষার্থীর সুবিধা অনুযায়ী)',
      en: 'Flexible (Adapted to learner pace)',
    },
    schedule: {
      bn: 'আপনার পছন্দ অনুযায়ী যেকোনো সময় আলোচনা করে ক্লাস নেওয়া যাবে',
      en: 'Any convenient time of your choice (arranged via discussion)',
    },
    fee: null,
    illustrationType: 'adult-nazera',
  },
  {
    id: 'womens-special-batch',
    category: 'women',
    title_bn: 'মহিলাদের বিশেষ ব্যাচ',
    title_en: "Women's Special Batch",
    description_bn:
      'মহিলা শিক্ষিকার তত্ত্বাবধানে শতভাগ পর্দা ও গোপনীয়তা রক্ষা করে সকল বয়সী মা-বোনদের জন্য ঘরে বসে সহিহ কুরআন শিক্ষা।',
    description_en:
      'Exclusively taught by qualified female teachers with 100% purdah and privacy—enabling women and girls of all ages to learn the Quran from home.',
    fullDetails_bn:
      'সকল বয়সী মা ও বোনদের জন্য আমাদের একাডেমির বিশেষ আয়োজন “মহিলাদের বিশেষ ব্যাচ”। এখানে শুধুমাত্র অভিজ্ঞ মহিলা শিক্ষিকা দ্বারা ক্লাস পরিচালনা করা হয়। গুগল মিটে ওয়ান-টু-ওয়ান লাইভ ক্লাসে শতভাগ পর্দা ও গোপনীয়তা (১০০% Purdah & Privacy) বজায় রেখে কায়দা, নাজেরা, তাজবীদ ও নামাজের প্রয়োজনীয় সূরা-কিরাআত শেখানো হয়। আপনার পছন্দ অনুযায়ী যেকোনো সময় আমাদের সাথে আলোচনা করে ক্লাস নিতে পারবেন।',
    fullDetails_en:
      'Our dedicated program for women and girls of all ages is taught exclusively by qualified female instructors. Classes are held one-to-one live on Google Meet with 100% purdah and privacy guaranteed. Whether starting from Noorani Qaida or refining Tajweed and Salah recitations, sisters can choose any preferred class time through discussion with us.',
    highlights_bn: [
      'সকল বয়সী নারীরা (শিশু, ছাত্রী, গৃহিণী ও বয়োজ্যেষ্ঠ মা-বোনেরা) যুক্ত হতে পারবেন',
      'শুধুমাত্র অভিজ্ঞ ও দক্ষ মহিলা শিক্ষিকা দ্বারা শতভাগ পর্দা ও গোপনীয়তায় পাঠদান',
      'গুগল মিটে ওয়ান-টু-ওয়ান লাইভ ক্লাস (কোনো রেকর্ডিং করা হয় না)',
      'আপনার পছন্দ অনুযায়ী যেকোনো সময় আমাদের সাথে আলোচনা করে ক্লাস নিতে পারবেন',
    ],
    highlights_en: [
      'Women and girls of all ages can enroll in this department',
      'Taught strictly by qualified female teachers with 100% purdah and privacy',
      'One-to-one live classes on Google Meet (never recorded)',
      'Choose any convenient class time according to your preference after discussion',
    ],
    ageGroup_bn: 'সকল বয়সী নারীদের জন্য (মহিলা বিভাগ)',
    ageGroup_en: 'Women & Girls of All Ages',
    duration: {
      bn: 'আলোচনা সাপেক্ষে (বেসিক থেকে অ্যাডভান্সড)',
      en: 'Flexible (Basic to Advanced)',
    },
    schedule: {
      bn: 'আপনার পছন্দ অনুযায়ী যেকোনো সময় আলোচনা করে ক্লাস নেওয়া যাবে',
      en: 'Any convenient time of your choice (arranged via discussion)',
    },
    fee: null,
    illustrationType: 'women-batch',
  },
  {
    id: 'tajweed-and-makharij',
    category: 'tajweed',
    title_bn: 'তাজবীদ ও মাখরাজ',
    title_en: 'Tajweed & Makharij',
    description_bn:
      'যেকোনো বয়সের শিক্ষার্থী যারা কুরআন পড়তে পারেন কিন্তু উচ্চারণ ও তাজবীদ আরও নিখুঁত ও তারতীলসম্মত করতে চান তাদের জন্য বিশেষ কোর্স।',
    description_en:
      'For learners of any age who can read Arabic text and want to perfect their articulation points (Makharij), Sifaat, and rules of Tajweed.',
    fullDetails_bn:
      'পবিত্র কুরআন তারতীলের সাথে ও শুদ্ধ মাখরাজে তিলাওয়াত করা অত্যন্ত গুরুত্বপূর্ণ। যেকোনো বয়সের শিক্ষার্থী—যারা ইতিমধ্যে কুরআন দেখে পড়তে পারেন কিন্তু মাখরাজ, সিফাত, নূন সাকিন, মীম সাকিন, মাদ্দ ও ওয়াকফের নিয়মে আরও দক্ষতা অর্জন করতে চান, তাদের জন্য এই কোর্স। গুগল মিটে ওয়ান-টু-ওয়ান লাইভ ক্লাসে আপনার পছন্দ অনুযায়ী যেকোনো সময়ে আলোচনা সাপেক্ষে ক্লাস করতে পারবেন।',
    fullDetails_en:
      'Reciting the Holy Quran with Tarteel and accurate articulation is essential. Open to learners of all ages, this specialized course masters Makharij al-Huruf (points of articulation), Sifaat, Noon/Meem Sakinah rules, Madd, and Waqf through intensive 1-on-1 live coaching on Google Meet at any time convenient for you.',
    highlights_bn: [
      'যেকোনো বয়সের শিক্ষার্থী এই কোর্সে যুক্ত হতে পারবেন',
      '১৭টি মাখরাজ ও হরফের সিফাতসমূহের নিখুঁত ব্যবহারিক অনুশীলন',
      'নূন সাকিন, মীম সাকিন, মাদ্দ ও ওয়াকফের বিস্তারিত নিয়ম ও প্রয়োগ',
      'আপনার পছন্দ অনুযায়ী যেকোনো সময় আমাদের সাথে আলোচনা করে ক্লাস নিতে পারবেন',
    ],
    highlights_en: [
      'Open to learners of all ages',
      'Intensive practical drills on all 17 Makharij and Sifaat of letters',
      'Complete mastery of Noon Sakinah, Meem Sakinah, Madd, and Waqf rules',
      'Choose any convenient class time according to your preference after discussion',
    ],
    ageGroup_bn: 'সকল বয়সের জন্য (যেকোনো বয়সের মানুষ পড়তে পারবেন)',
    ageGroup_en: 'Open to All Ages (Anyone can enroll)',
    duration: {
      bn: 'আলোচনা সাপেক্ষে (নিয়মিত অনুশীলন ভিত্তিক)',
      en: 'Flexible (Practice-based)',
    },
    schedule: {
      bn: 'আপনার পছন্দ অনুযায়ী যেকোনো সময় আলোচনা করে ক্লাস নেওয়া যাবে',
      en: 'Any convenient time of your choice (arranged via discussion)',
    },
    fee: null,
    illustrationType: 'tajweed-makharij',
  },
];

// TODO: Future Feature — Hifz Method Free Resource for Enrolled Students
export interface HifzMethodResource {
  id: string;
  title_bn: string;
  title_en: string;
  summary_bn: string;
  summary_en: string;
  isAvailableForEnrolledStudents: boolean;
}

export const HIFZ_METHOD_RESOURCES: HifzMethodResource[] = [];
