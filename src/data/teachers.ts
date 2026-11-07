/**
 * Teacher directory data for Al Muinul Quran Online Academy.
 */

export type TeacherGender = 'male' | 'female';
export type TeacherFilter = 'all' | 'male' | 'female';

export interface Teacher {
  id: string;
  name_bn: string;
  name_en: string;
  qualification_bn: string;
  qualification_en: string;
  gender: TeacherGender;
  role: string;
  role_bn: string;
  role_en: string;
  specialty_bn: string;
  specialty_en: string;
  details_bn: string;
  details_en: string;
  photo: string;
  isPublished?: boolean;
  isMudir?: boolean;
}

export const TEACHERS: Teacher[] = [
  {
    id: 'maolana-shibli',
    name_bn: 'মাওলানা শিবলী',
    name_en: 'Maolana Shibli',
    qualification_bn: 'তাখাসসুস ফিত তাজবীদ ওয়াল কিরাআত, দাওরায়ে হাদীস (মাস্টার্স)',
    qualification_en: 'Takhassus in Tajweed & Qira’at, Dawra-e-Hadith (Islamic Masters)',
    gender: 'male',
    role: 'Mudir (Director) & Head Instructor',
    role_bn: 'মুদীর (পরিচালক) ও প্রধান শিক্ষক',
    role_en: 'Mudir (Director) & Head Instructor',
    specialty_bn: 'তাজবীদ, মাখরাজ ও বয়স্কদের বিশেষ কুরআন শিক্ষা',
    specialty_en: 'Tajweed, Makharij & Adult Quran Recitation',
    details_bn:
      'মাওলানা শিবলী আল মুঈনুল কুরআন অনলাইন একাডেমির প্রতিষ্ঠাতা মুদীর (পরিচালক) ও প্রধান শিক্ষক। তিনি দীর্ঘ দিন ধরে অত্যন্ত যত্ন ও আন্তরিকতার সাথে গুগল মিটে ওয়ান-টু-ওয়ান লাইভ ক্লাসের মাধ্যমে দেশ ও প্রবাসের শিক্ষার্থীদের সহিহ কুরআন তিলাওয়াত, মাখরাজ ও তাজবীদ শিক্ষা দিয়ে আসছেন। একাডেমির পাঠদান মান নিয়ন্ত্রণ ও প্রতিটি শিক্ষার্থীর অগ্রগতি তিনি সরাসরি তত্ত্বাবধান করেন।',
    details_en:
      'Maolana Shibli is the Founding Mudir (Director) and Head Instructor of Al Muinul Quran Online Academy. With extensive experience in online Quranic instruction, he teaches authentic Tajweed and Makharij through live one-to-one Google Meet sessions and personally supervises the academic progress of every student.',
    photo: './images/teachers/maolana-shibli.jpeg',
    isPublished: true,
    isMudir: true,
  },
  {
    id: 'maolana-abu-sayed-habibi',
    name_bn: 'মাওলানা আবু সাঈদ হাবিবী',
    name_en: 'Maolana Abu Sayed Habibi',
    qualification_bn: 'দাওরায়ে হাদীস, সনদপ্রাপ্ত কুরআন ও তাজবীদ প্রশিক্ষক',
    qualification_en: 'Dawra-e-Hadith, Certified Quran & Tajweed Instructor',
    gender: 'male',
    role: 'Senior Quran & Tajweed Instructor',
    role_bn: 'সিনিয়র কুরআন ও তাজবীদ শিক্ষক',
    role_en: 'Senior Quran & Tajweed Instructor',
    specialty_bn: 'নাজেরা, তাজবীদ ও তারতীলসহ বিশুদ্ধ তিলাওয়াত',
    specialty_en: 'Nazera, Tajweed & Fluent Tarteel Recitation',
    details_bn:
      'মাওলানা আবু সাঈদ হাবিবী একজন দক্ষ ও ধৈর্যশীল কুরআন শিক্ষক। শিশু থেকে শুরু করে বয়োজ্যেষ্ঠ শিক্ষার্থীদের গুগল মিটে ১:১ লাইভ ক্লাসে হরফের সঠিক মাখরাজ, সিফাত এবং তারতীলের সাথে পবিত্র কুরআন তিলাওয়াত শেখাতে তিনি বিশেষভাবে অভিজ্ঞ।',
    details_en:
      'Maolana Abu Sayed Habibi is an experienced and patient Quran instructor specializing in Nazera, Makharij, and Tarteel recitation. He conducts engaging one-to-one live sessions on Google Meet tailored to both children and adult learners.',
    photo: './images/teachers/maolana-abu-sayed-habibi.jpeg',
    isPublished: true,
  },
  {
    id: 'mufti-abdullah-al-mamun',
    name_bn: 'মুফতি আব্দুল্লাহ আল মামুন',
    name_en: 'Mufti Abdullah Al Mamun',
    qualification_bn: 'ইফতা (ইসলামী আইন ও ফিকহ), দাওরায়ে হাদীস ও তাজবীদ বিশেষজ্ঞ',
    qualification_en: 'Takhassus fil Ifta (Islamic Jurisprudence), Dawra-e-Hadith & Tajweed Specialist',
    gender: 'male',
    role: 'Tajweed, Makharij & Islamic Studies Instructor',
    role_bn: 'তাজবীদ, মাখরাজ ও দ্বীনিয়াত শিক্ষক',
    role_en: 'Tajweed, Makharij & Islamic Studies Instructor',
    specialty_bn: 'তাজবীদ ও মাখরাজ এবং নামাজের প্রয়োজনীয় মাসআলা ও সূরা শুদ্ধকরণ',
    specialty_en: 'Advanced Tajweed, Makharij & Essential Salah Rulings',
    details_bn:
      'মুফতি আব্দুল্লাহ আল মামুন একাডেমির তাজবীদ, মাখরাজ ও দ্বীনিয়াত বিভাগের বিশেষজ্ঞ শিক্ষক। বিশুদ্ধ কুরআন তিলাওয়াতের পাশাপাশি নামাজের সূরা-কিরাআত শুদ্ধকরণ এবং প্রাত্যহিক জীবনের জরুরি মাসআলা-মাসায়েল ও মাসনূন দোয়া শিক্ষাদানে তিনি গুরুত্বপূর্ণ ভূমিকা পালন করছেন।',
    details_en:
      'Mufti Abdullah Al Mamun serves as a specialist instructor in Tajweed, Makharij, and essential Islamic jurisprudence. Alongside perfecting Quran recitation in 1-on-1 live Google Meet classes, he guides learners in accurate Salah recitation and daily Masnoon Duas.',
    photo: './images/teachers/mufti-abdullah-al-mamun.jpeg',
    isPublished: true,
  },
  {
    id: 'maolana-rakib-musabbir',
    name_bn: 'মাওলানা রাকিব মুসাব্বির',
    name_en: 'Maolana Rakib Musabbir',
    qualification_bn: 'দাওরায়ে হাদীস, শিশু ও প্রাথমিক কুরআন শিক্ষা বিশেষজ্ঞ',
    qualification_en: 'Dawra-e-Hadith, Children & Foundational Quran Learning Specialist',
    gender: 'male',
    role: 'Noorani Qaida & Nazera Instructor',
    role_bn: 'নূরানী কায়দা ও নাজেরা শিক্ষক',
    role_en: 'Noorani Qaida & Nazera Instructor',
    specialty_bn: 'শিশুদের নূরানী কায়দা, মাখরাজ ও আমপারা শিক্ষা',
    specialty_en: "Children's Noorani Qaida, Makharij & Juz Amma",
    details_bn:
      'মাওলানা রাকিব মুসাব্বির বিশেষভাবে শিশু ও নতুন শিক্ষার্থীদের আনন্দময় পরিবেশে নূরানী কায়দা ও নাজেরা শেখাতে পারদর্শী। গুগল মিটে ওয়ান-টু-ওয়ান লাইভ ক্লাসের মাধ্যমে তিনি প্রতিটি শিক্ষার্থীর আরবি হরফ উচ্চারণ ও তিলাওয়াতের ভিত্তি মজবুত করে গড়ে তোলেন।',
    details_en:
      'Maolana Rakib Musabbir specializes in teaching Noorani Qaida and foundational Nazera to children and beginners. Through interactive one-to-one Google Meet lessons, he builds a strong and joyful foundation in Arabic pronunciation and Tajweed.',
    photo: './images/teachers/maolana-rakib-musabbir.jpeg',
    isPublished: true,
  },
  {
    id: 'maolana-afsana-akter',
    name_bn: 'মাওলানা আফসানা আক্তার',
    name_en: 'Maolana Afsana Akter',
    qualification_bn: 'আলিমা ফাযিলা (দাওরায়ে হাদীস) ও তাজবীদ সনদপ্রাপ্তা শিক্ষিকা',
    qualification_en: 'Certified Alimah (Dawra-e-Hadith) & Tajweed Specialist',
    gender: 'female',
    role: "Female Instructor (Women's & Children's Section)",
    role_bn: 'মহিলা শিক্ষিকা (মহিলাদের বিশেষ ব্যাচ ও শিশু বিভাগ)',
    role_en: "Female Instructor (Women's Special Batch & Children)",
    specialty_bn: 'মা-বোনদের জন্য শতভাগ পর্দা ও গোপনীয়তায় কায়দা, নাজেরা ও তাজবীদ শিক্ষা',
    specialty_en: '100% Purdah & Privacy One-to-One Live Classes for Sisters & Children',
    details_bn:
      'মাওলানা আফসানা আক্তার আল মুঈনুল কুরআন অনলাইন একাডেমির মহিলা ও শিশু বিভাগের অভিজ্ঞ শিক্ষিকা। তিনি শতভাগ পর্দা ও গোপনীয়তা রক্ষা করে গুগল মিটে ওয়ান-টু-ওয়ান লাইভ ক্লাসের মাধ্যমে মা-বোন, গৃহিণী, ছাত্রী এবং শিশুদের অত্যন্ত যত্ন ও আন্তরিকতার সাথে নূরানী কায়দা, নাজেরা, তাজবীদ ও নামাজের জরুরি সূরা-দোয়া শিক্ষা দিয়ে থাকেন।',
    details_en:
      'Maolana Afsana Akter is an experienced female instructor heading our Women’s Special Batch and Children’s Section. Observing 100% Islamic purdah and privacy, she conducts one-to-one live Google Meet sessions for sisters, homemakers, female students, and young children—teaching Noorani Qaida, Nazera, Tajweed, and essential Salah recitations with utmost care.',
    photo: './images/teachers/maolana-afsana-akter.png',
    isPublished: true,
  },
];
