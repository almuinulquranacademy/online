# আল মুঈনুল কুরআন অনলাইন একাডেমি | Al Muinul Quran Online Academy

A production-ready, bilingual (Bengali / English) multi-page website for **Al Muinul Quran Online Academy (আল মুঈনুল কুরআন অনলাইন একাডেমি)**. Built with React, Vite, TypeScript, Tailwind CSS, React Router (`HashRouter`), and `lucide-react`.

---

## Features & Business Rules

- **Bilingual (বাংলা | English)**: Instant language toggle in the navigation bar translates all headings, body text, buttons, modals, form labels, placeholders, validation errors, and page SEO tags.
- **5 Dedicated Routes (`HashRouter`)**:
  - `/#/` — Home (`হোম`)
  - `/#/about` — About Us (`আমাদের পরিচিতি ও যাত্রা`)
  - `/#/courses` — Courses (`আমাদের কোর্সসমূহ`)
  - `/#/teachers` — Teachers (`আমাদের শিক্ষকবৃন্দ`)
  - `/#/contact` — Contact & Enrollment (`যোগাযোগ ও ভর্তি`)
- **No Fixed Course Fee Shown**: Every course displays *"আলোচনা সাপেক্ষে ফি নির্ধারিত হবে / Fee discussed after enrollment"*.
- **One-to-One Live Classes on Google Meet**: No pre-recorded videos.
- **Women's Section**: Dedicated female instructors with 100% purdah and privacy (`শতভাগ পর্দা ও গোপনীয়তা`).
- **Enrollment Form with Email Notification & WhatsApp Fallback**:
  - Validates Bangladeshi WhatsApp numbers (`01XXXXXXXXX` or `+8801XXXXXXXXX`).
  - Submits via AJAX (`POST`) to FormSubmit (`https://formsubmit.co/ajax/almuinulquranacademy@gmail.com`).
  - Provides a direct WhatsApp fallback button with pre-filled enrollment details.

---

## Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
cd <YOUR_REPOSITORY_NAME>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally in development mode

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 4. Build for production

```bash
npm run build
```

The static production bundle will be generated inside the `dist/` directory. You can preview the production build locally using:

```bash
npm run preview
```

---

## Deploying to GitHub Pages

This project is pre-configured with `base: './'` in `vite.config.ts`, `HashRouter` for client-side routing, and an automated GitHub Actions workflow at `.github/workflows/deploy.yml`. It works under any `<YOUR_REPOSITORY_NAME>` without extra path configuration.

### Step-by-Step Deployment Instructions:

1. Create a new repository on GitHub named `<YOUR_REPOSITORY_NAME>`.
2. Push this codebase to the `main` branch of your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Al Muinul Quran Online Academy website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```
3. On GitHub, open your repository and go to **Settings** > **Pages** (in the left sidebar).
4. Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown menu.
5. Navigate to the **Actions** tab in your repository. The **Deploy to GitHub Pages** workflow will run automatically on every push to `main` (or you can click **Run workflow** manually).
6. Once the workflow completes, your live website will be published at:
   `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`

---

## Owner Customization Checklist (TODOs)

- **Activate FormSubmit**: Submit a test entry on the `/contact` page once deployed, then open the email inbox for `almuinulquranacademy@gmail.com` and click the **"Activate Form"** button sent by FormSubmit.
- **Update Teacher Profiles**: Open `src/data/teachers.ts`, replace the 4 placeholder teacher entries with verified teacher names, qualifications, and photos, and change `isPublished: false` to `isPublished: true`.
- **Update Course Durations & Schedules**: Open `src/data/courses.ts` and update the placeholder `duration` and `schedule` fields for each course, and confirm the curriculum details for the adult course (*বয়স্কদের নাজেরা ও তাজবীদ / Nazera & Tajweed for Adults*).
- **Replace Placeholder Images & Logo**:
  - Replace `/public/logo.png` with the official high-resolution academy logo.
  - Replace `/public/images/hero.jpg`, `/public/images/about.jpg`, `/public/images/women-section.jpg`, and `/public/images/teacher-placeholder.png` with real academy illustrations or photographs.
