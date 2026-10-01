# Rueven Roman Portfolio

## Direction

- Reference: the compact home rhythm in [Mark Louie Alvarez's portfolio](https://mark.requo.app/).
- Thesis: show Rueven clearly first, then let experience and technical breadth do the talking.
- Composition: floating pill navigation, 24px narrow-screen gutters, a narrow Inter reading measure, white canvas, black and soft controls, and a blue name highlight.
- Story: intro -> featured work -> experience -> grouped tech stack -> direct contact.
- Form: ruled experience entries, grouped rounded tool chips, a featured work card, and a closing contact CTA.

## Content and provenance

Portfolio copy is grounded in `C:\Users\rueve\Downloads\Rueven_Roman_Resume.pdf`. The resume is served locally as `public/Rueven_Roman_Resume.pdf` for the Resume action. Timeline entries and tools stay within the resume-backed facts supplied for this build.

The reference site informed the visual rhythm and information architecture. Its exact copy, assets, personal identity, and project content are not reused.

Folio is the current verified project showcase. The project card links to the public landing page and uses a short product walkthrough built from Folio's real read-only landing states; no `/work/:slug` case-study route is exposed.

Tech Stack chips use locally bundled Simple Icons marks through `@iconify-icons/simple-icons`, tinted with their recognizable brand colors while keeping the labels and chip surfaces restrained. LLaMA 3.3 uses the Meta AI mark. SQL, SQLyog, NLP, and phishing detection use filled semantic fallback icons because they do not have a standalone brand mark in the selected set; Firestore uses the Firebase mark and Power Query uses the Microsoft family mark rather than pretending those products have different logos.

No personal photo, company logo, or decorative/generated raster artwork is shipped. The Folio poster and walkthrough are product evidence captured from the actual Folio landing page. GitHub remains available as a direct footer link without an embedded activity preview.

## Interaction contract

- About, Work, and Experience links scroll to the corresponding sections and expose the active section with `aria-current`.
- The hero leads with a selected-work action and keeps the Resume action secondary.
- The Folio project card opens the public landing page in a new tab.
- The Folio preview uses a muted, looping product walkthrough with `folio-landing-page.png` as its poster and reduced-motion fallback.
- Header Contact opens a native details popover with Email, GitHub, and LinkedIn destinations.
- The closing CTA provides a direct mailto path after the proof and experience sections.
- Resume opens the local PDF in a new tab.
- A skip link is present before the application root and is visually hidden until focused.

## Review verdict

Status: ready for the current local portfolio pass after the flow and accessibility refinement loop.

Verified on 2026-09-29:

- `npm run build` passes with Vite.
- The local browser review matches the reference's white canvas, floating nav with active-section icon, compact hero, selected-work CTA, resume action, and footer links.
- Experience entries use resume-backed responsibilities and date ranges; the tech stack is grouped into Languages & interface, Data & platform, and AI & security.
- The Folio motion preview was checked in Chromium at desktop and 390px widths; desktop and mobile sources load and play, mobile keeps the hero copy readable, and reduced motion keeps the poster while hiding the video.
- The Tech Stack section was checked after auditing brand-backed marks, switching LLaMA to the Meta AI mark, and solidifying the semantic fallbacks; grouped chips fit at 390px and 320px without horizontal overflow.
- Header Contact, the selected-work anchor, the closing mailto CTA, and the footer links were checked in the local browser.
- Resume PDF responds from the local dev server with `200 OK` and `application/pdf`.
- The Impeccable detector was run once. It fell back to regex matching because optional HTML/CSS parser modules were unavailable, so its empty finding list is an undercount rather than a clean automated audit.

Remaining verification note: the browser console was empty during the final desktop, 390px, and 320px passes. The existing non-fatal Vite warning comes from the third-party `@iconify/react` `use client` directive.

## Raster provenance

The page is rendered HTML/CSS/Phosphor components, with `public/folio-landing-page.png` as the static preview poster and `public/folio-walkthrough.mp4` as the compressed product-motion asset. The resume PDF is source document content, not a generated raster.
