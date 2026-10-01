# Rueven Roman Portfolio

## Direction

- Reference: the compact home rhythm in [Mark Louie Alvarez's portfolio](https://mark.requo.app/).
- Thesis: show Rueven clearly first, then let experience and technical breadth do the talking.
- Composition: floating pill navigation, 24px narrow-screen gutters, a narrow Inter reading measure, white canvas, black and soft controls, and a blue name highlight.
- Story: intro -> featured work -> other projects -> experience -> tech stack and credentials -> direct contact.
- Form: ruled experience entries, compact project briefs, grouped rounded tool chips, a split proof-and-story work card, credential cards, and a closing contact CTA.

## Content and provenance

Portfolio copy is grounded in `C:\Users\rueve\Downloads\Rueven_Roman_All_Rounder_Resume.pdf`. The current resume is served locally as `public/Rueven_Roman_Resume.pdf` for the Resume action. Timeline entries, projects, credentials, and tools stay within the resume-backed facts supplied for this build.

The reference site informed the visual rhythm and information architecture. Its exact copy, assets, personal identity, and project content are not reused.

Folio is the current verified project showcase. The project card links to the public landing page and uses a short product walkthrough built from Folio's real read-only landing states; KalasagAI appears as a compact resume-backed project brief. No `/work/:slug` case-study route is exposed.

Tech Stack chips use locally bundled Simple Icons marks through `@iconify-icons/simple-icons`, tinted with their recognizable brand colors while keeping the labels and chip surfaces restrained. LLaMA 3.3 uses the Meta AI mark. SQL, SQLyog, NLP, and phishing detection use filled semantic fallback icons because they do not have a standalone brand mark in the selected set; Firestore uses the Firebase mark and Power Query uses the Microsoft family mark rather than pretending those products have different logos.

Education and certification cards use locally bundled Python and Cisco marks where available, with semantic GraduationCap and Certificate icons for FEU and PMI where no matching Simple Icons brand mark exists.

No personal photo, company logo, or decorative/generated raster artwork is shipped. The Folio poster and walkthrough are product evidence captured from the actual Folio landing page. GitHub remains available as a direct footer link without an embedded activity preview.

## Interaction contract

- About, Work, and Experience links scroll to the corresponding sections and expose the active section with `aria-current`.
- The hero leads with a selected-work action and keeps the Resume action secondary.
- The Folio project card opens the public landing page in a new tab.
- The Folio preview uses a muted, looping product walkthrough with `folio-landing-page.png` as its poster and reduced-motion fallback.
- Header Contact opens a native details popover with Email, GitHub, and LinkedIn destinations.
- The closing CTA opens an accessible contact dialog with name, email, subject, and message fields; submitting sends the form through FormSubmit to the portfolio inbox without requiring the visitor to open an email app or log in.
- Resume opens the local PDF in a new tab.
- A skip link is present before the application root and is visually hidden until focused.

## Review verdict

Status: ready for the current local portfolio pass after the resume-alignment loop.

Verified on 2026-10-01:

- `npm run build` passes with Vite.
- The local browser review shows the split Folio showcase, a compact KalasagAI brief, richer resume-backed experience entries, expanded stack groups, and Education & credentials cards.
- The project briefs remain non-clickable because no verified public links were supplied for those resume projects; Folio remains the verified live project action.
- Header Contact, the selected-work anchor, and the closing contact dialog trigger were checked in the local browser. The FormSubmit delivery path requires a one-time owner email confirmation before it can receive submissions.
- The supplied current resume was copied into `public/Rueven_Roman_Resume.pdf`, its embedded GitHub URL was corrected to `github.com/ruevenrmn`, and the rendered page remains legible with no clipping or overlap.
- The Impeccable detector was run once. It fell back to regex matching because optional HTML/CSS parser modules were unavailable, so its empty finding list is an undercount rather than a clean automated audit.

Remaining verification note: the existing non-fatal Vite warning comes from the third-party `@iconify/react` `use client` directive.

## Raster provenance

The page is rendered HTML/CSS/Phosphor components, with `public/folio-landing-page.png` as the static preview poster and `public/folio-walkthrough.mp4` as the compressed product-motion asset. The resume PDF is source document content, not a generated raster.
