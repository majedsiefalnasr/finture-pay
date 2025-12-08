# ESLint Integration

This project uses [ESLint](https://eslint.org/) for JavaScript/TypeScript/Vue code linting and quality assurance, integrated via the [@nuxt/eslint](https://eslint.nuxt.com/) module.

## Installation & Usage

- ESLint is installed as a dev dependency and listed in `package.json`.
- The `@nuxt/eslint` module is added to `nuxt.config.ts` for seamless integration.
- Configuration is provided via `eslint.config.mjs` using Nuxt's flat config system.
- Run linting with: `npm run lint` or `npm run lint:fix`

## How it works

- **Flat Config**: Uses ESLint's new flat configuration format via `@nuxt/eslint-config/flat`
- **Nuxt Integration**: Automatically configured for Nuxt 4, Vue 3, and TypeScript
- **Auto-fixing**: Many linting issues can be automatically fixed

## Available Commands

```bash
# Check for linting issues
npm run lint

# Automatically fix linting issues
npm run lint:fix
```

## Configuration

The `@nuxt/eslint` module is configured in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  // ... other config
})
```

The ESLint configuration in `eslint.config.mjs` extends Nuxt's recommended ESLint config:

```javascript
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  // options here
})
```

## Rules and Plugins

ESLint automatically includes rules for:

- **Vue 3**: Vue-specific linting rules
- **TypeScript**: TypeScript-specific rules
- **Nuxt**: Nuxt-specific rules and best practices
- **JavaScript**: General JavaScript best practices

## Integration with Development Workflow

- **Pre-commit Hooks**: Can be integrated with Husky for pre-commit linting
- **CI/CD**: Use `npm run lint` in CI pipelines for automated code quality checks
- **IDE**: Provides real-time linting feedback in VS Code and other editors

## Customization

To add custom rules, extend the configuration:

```javascript
export default createConfigForNuxt({
  // options here
}).append({
  rules: {
    'no-console': 'off', // allow console.log in development
    'vue/multi-word-component-names': 'off', // allow single-word component names
  },
})
```

## Ignoring Files

Files and directories are ignored via `.eslintignore`:

- Dependencies (`node_modules/`)
- Build outputs (`.nuxt/`, `dist/`)
- Generated files and cache directories

## Security

ESLint helps identify potential security issues and code quality problems. No external dependencies or data exposure.

---

For more details, see the [ESLint documentation](https://eslint.org/docs/user-guide/getting-started) and [Nuxt ESLint config](https://eslint.nuxt.com/packages/module).
