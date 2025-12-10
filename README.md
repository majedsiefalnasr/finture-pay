[![Finture Pay | Your Money, Simplified. Your Business, Empowered.](https://i.ibb.co/Hf9dJ7fX/thumb.png 'Finture Pay | Your Money, Simplified. Your Business, Empowered.')](https://finture-pay.vercel.app/)

# Finture Pay

**Your Money, Simplified. Your Business, Empowered..**

Version: 0.1.0

Türkiye’s complete payment platform. Digital wallets, payment solutions, and business tools - all in one app.

[**Visit Finture Pay »**](https://finture-pay.vercel.app/)

<br>

## Project Structure

This project uses [Nuxt 4](https://nuxt.com/) with the following structure:

```plaintext
app/
  assets/
  components/
  composables/
  layouts/
  middleware/
  pages/
  plugins/
  utils/
  app.vue
i18n/
  locales/
public/
server/
nuxt.config.ts
tsconfig.json
```

### Key Files & Folders

- **app/**: Source root for all app code (pages, components, layouts, etc.)
- **app/pages/**: File-based routing (home page is now `app/pages/index.vue`).
- **app/layouts/**: Application layouts (default at `app/layouts/default.vue`).
- **i18n/locales/**: Internationalization files (e.g., `en.json`, `ar.json`).
- **nuxt.config.ts**: Nuxt configuration (with compatibilityDate: '2025-07-15', SSR enabled for better SEO and performance).
- **tsconfig.json**: Uses project references for improved type safety.
- **public/**: Static files served at the root of the site.
- **server/**: Custom server logic (API routes, middleware, etc.).
- **.github/**: Contribution guidelines, issue/PR templates.

## Getting Started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

For more, see the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).

## Internationalization (i18n)

This project supports multiple languages using [@nuxtjs/i18n](https://i18n.nuxtjs.org/).

- **Supported Locales**: English (en) and Arabic (ar).
- **Default Locale**: English.
- **Strategy**: Prefix except for default locale (e.g., `/ar/page` for Arabic, `/page` for English).
- **Locale Files**: Located in `locales/` directory (`en.json`, `ar.json`).
- **Test Page**: Visit `/test` to see the language switcher in action.

To add new translations, edit the JSON files in `locales/` and update `nuxt.config.ts` if needed.

For detailed documentation, see [Internationalization Integration](docs/core/i18n.md).

---

## Copilot Coding & Contribution Guidelines

This project follows strict coding, testing, and documentation guidelines as described in `.github/copilot-instructions.md`.

## Secret Management

- Store secrets in environment variables or secure vaults.
- Never commit secrets to version control.
- `.env` and similar files are in `.gitignore`.

## Testing

- All tests live in `/tests`, mirroring the main app structure.
- Each test file should include: 1 expected use, 1 edge case, 1 failure case.

## Version Control

- This project uses [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) for version control.
- See [docs/README.md](docs/README.md) for detailed workflow instructions.

## Large Files

- Do not commit files >100MB.
- Use Git LFS or external storage for large assets.
- Large file patterns are in `.gitignore`.

## Dependency Management

- Review and document all dependency changes in `README.md` and `package.json`.
- Check for security advisories when updating dependencies.

## Accessibility

- Ensure all user-facing features are accessible (semantic HTML, ARIA, color contrast).
- Test UI with screen readers and keyboard navigation.

For full details, see `.github/copilot-instructions.md`.

---

## Integrations & Tooling

See the categorized documentation index at [docs/README.md](docs/README.md) for all integrations, developer tooling, and UI/UX enhancements.

---

Built with ❤️ by contributors.
