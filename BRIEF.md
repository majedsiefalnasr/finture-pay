# Project Brief: [Finture Pay]

## Purpose & Vision

Türkiye’s complete payment platform. Digital wallets, payment solutions, and business tools - all in one app.

## Architecture & Stack

- **Framework:** Nuxt 4 (Vue 3, TypeScript)
- **Directory Structure:**
  - `app/`: Source root for all app code (pages, components, layouts, etc.)
  - `public/`: Static files served at the root
  - `server/`: Custom server logic (API routes, middleware, etc.)
  - `.github/`: Contribution guidelines, issue/PR templates
  - `/tests`: All tests, mirroring the main app structure
- **Config:**
  - `nuxt.config.ts`: Nuxt configuration
  - `tsconfig.json`: TypeScript project references
  - `package.json`: Dependencies and scripts

## Core Features

- **Authentication:** User login and signup
- **Company Onboarding:** Setup for businesses
- **About:** Information about the Finture Pay platform
- **Individual:** Personal Finance, Simplified
- **Business:** Empower Your Business with Next-Generation Financial Tools
- **Fees and Commissions:** Transparent Pricing for Every Transaction
- **Blog:** Articles and updates about Finture Pay
- **Contact:** Contact form or details for reaching out
- **Corporate Management:** Tools for managing corporate accounts
- **Announcements:** Latest news and updates
- **Help Center:** FAQs and support resources
- **Logos and Links:** Brand Assets & Integration Resources

## Coding & Contribution Guidelines

- Follow `.github/copilot-instructions.md` for all code, test, and documentation standards.
- Use consistent naming, modular structure, and avoid files >500 lines.
- All user-facing features must be accessible (semantic HTML, ARIA, color contrast).
- Store secrets in environment variables; never commit them.

## Testing

- All tests live in `/tests`, mirroring the main app structure.
- Each test file should include: 1 expected use, 1 edge case, 1 failure case.

## Version Control & Workflow

- Use clear, descriptive commit messages.
- Do not commit large files (>100MB); use Git LFS or external storage.

## Security

- Never hardcode sensitive information.
- Review code for vulnerabilities before merging.

## Documentation

- Update `README.md` and `BRIEF.md` when features, dependencies, or setup steps change.

---

For full coding standards, see `.github/copilot-instructions.md`.
