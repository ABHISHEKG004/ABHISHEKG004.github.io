# Abhishek Gupta's portfolio

Static, dependency-free portfolio published at https://abhishekg004.github.io/.
The opening positions Abhishek as a backend & AI-tools software engineer, currently
a Senior Software Engineer at Microsoft building Power BI Paginated Reports. Project
and experience copy are grounded in the supplied résumé.

## Local preview

Run `python -m http.server 8000` from the repository root and open
http://localhost:8000/. No build step is required.

The whole site is a single page, `index.html`. Shared styles live in
`css/style.css`; progressive project selection lives in `js/main.js`.

The featured-project selector (DRI Copilot, Azure Maps migration, Elasticsearch 8x)
preserves shareable section URLs such as `#azure-maps`. Without JavaScript, all
three featured projects remain visible. Reduced-motion preferences are respected,
and a skip link supports keyboard navigation.

## Site details

- `favicon.svg` and `apple-touch-icon.png` share the site's "a." monogram / portrait.
- The page includes a description, canonical URL, and Open Graph metadata for search
  and sharing; `images/abhishek.jpg` doubles as the social preview image.
- `images/abhishek.jpg` is a 500×600 head-and-shoulders crop of the supplied photo.
- Contact uses a direct email link; there is no third-party contact form.
- The layout is responsive: the portrait moves above the headline and grids collapse
  to one or two columns on narrow screens.

## Publishing

GitHub Pages publishes the root of the `main` branch. Changes must reach `main` to
update the public website; a rebuild usually takes under a minute.

## Content

Experience is based on the owner's supplied résumé and covers Microsoft, Adobe,
Flipkart, Rivigo, and Media.net, plus education at IIIT Allahabad and D.A.V. Public
School, Faridabad.

Featured projects:

- **DRI Copilot** — AI-agent on-call tool using reusable skills and MCP servers;
  reduced a specific incident investigation from ~2 hours to 10–15 minutes. Also
  references the PR Train Tracker and Report Alchemy tools.
- **Bing Maps → Azure Maps migration** — Paginated Reports across PBIRB and Power BI
  Service; 15% faster rendering for reports containing maps.
- **Elasticsearch 2x → 8x upgrade** — zero-downtime, multi-geo upgrade with a
  two-step Spark pipeline (ES 2x → S3 → ES 8x) migrating TBs of data.

The archive lists Report Copilot (hackathon), PQO connection discovery, the generic
indexing framework, and — in native disclosures collapsed by default — the
Elasticsearch deletion service, nudging framework, dynamic payment routing, and the
automated video ads testing engine.

Headline stats are derived from résumé figures: 10+ years of experience (since
July 2016), and ~60% fewer customer incidents (from 8–10 to ~3–4 per month). The
console snippet on the DRI Copilot card is illustrative, not a real command or
incident. Internal Microsoft tools are described, not linked; they are not public.

The résumé document and phone number are not published as part of this site.
