# Specification

## Summary
**Goal:** Update the Home page with prominent Arabic Bismillah text, add a configurable Leadership section, and reflect the requested custom domain in site branding and documentation.

**Planned changes:**
- Add the exact Arabic text “بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ” to the Home page hero area in a prominent, responsive placement.
- Add a Home page “Leadership” section listing Founder/CEO: SYED IRFAN ALI; Vice President: Md Rayyan Malik; President: Md Zaid Uddin, sourced from centralized site content (frontend/src/content/siteContent.ts).
- Add the URL “https://www.iqratultajweedonlinequranacademy.com” to centralized site content and render it in at least one obvious UI location as a clickable link (e.g., footer and/or Contact page).
- Add a new documentation file explaining high-level custom domain pointing steps for an Internet Computer deployment, explicitly noting DNS/domain configuration happens outside the app and the canister URL still works.

**User-visible outcome:** Visitors see the Arabic Bismillah prominently on the Home page, a Leadership section with the requested names/titles, and the site displays the academy’s URL as a clickable link; the repo also includes guidance on connecting the custom domain to the deployment.
