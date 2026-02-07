# Specification

## Summary
**Goal:** Create and deploy a professional, English-language, multi-page marketing website for “Iqra-Tul-Tajweed Online Quran Academy” on the Internet Computer.

**Planned changes:**
- Implement 5 client-side routed pages: Home, About Us, Course Details, Tutors Details & Experience, Contact Details.
- Add a persistent header navigation and footer across all pages.
- Build the Home page with a hero section, course offerings (Qawaid Qaida + Tajweed, Quran Nazera, Quran Recitation, Islamic Knowledge), and a benefits section (2 free trial classes, flexible timing, no age limit, separate male/female tutors, one-on-one classes).
- Create an About Us page with mission, teaching approach, and a “Why choose us” section (no unverifiable claims).
- Create a Course Details page listing the required courses with a consistent per-course structure.
- Create a Tutors page rendering at least 2 clearly labeled placeholder tutor profiles sourced from a single centralized config object.
- Create a Contact Details page showing placeholder email and WhatsApp/cell contacts (with placeholder names) from a centralized config, plus a contact form that triggers a mailto: link.
- Apply a coherent visual theme suitable for a religious education brand (avoid default blue/purple), using Tailwind and composing existing UI components (no edits to immutable component sources).
- Ensure a repeatable dfx deployment flow to a live canister URL with working routes (including direct navigation to non-home routes).

**User-visible outcome:** Visitors can browse a responsive, professionally themed multi-page academy website, view course and tutor information, and contact the academy via displayed details or a mailto-based contact form on a live deployed Internet Computer URL.
