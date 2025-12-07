[![Finture Pay | Your Money, Simplified. Your Business, Empowered.](https://iili.io/fu0Jole.png 'Finture Pay | Your Money, Simplified. Your Business, Empowered.')](https://tajmie.vercel.app/)

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
public/
server/
nuxt.config.ts
tsconfig.json
```

### Key Files & Folders

- **app/**: Source root for all app code (pages, components, layouts, etc.)
- **app/pages/**: File-based routing (home page is now `app/pages/index.vue`).
- **app/layouts/**: Application layouts (default at `app/layouts/default.vue`).
- **nuxt.config.ts**: Nuxt configuration (with compatibilityVersion: 4).
- **tsconfig.json**: Uses project references for improved type safety.
- **public/**: Static files served at the root of the site.
- **server/**: Custom server logic (API routes, middleware, etc.).
- **.github/**: Contribution guidelines, issue/PR templates.

## Getting Started

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Start the development server:

   ```sh
   pnpm dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

For more, see the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).

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
