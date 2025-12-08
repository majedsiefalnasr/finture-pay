# Prettier Integration

This project uses [Prettier](https://prettier.io/) for automatic code formatting with enhanced plugins for Vue, TypeScript, and CSS.

## Installation & Usage

- Prettier is installed as a dev dependency and listed in `package.json`.
- Configuration is provided via `.prettierrc.js` with multiple formatting plugins.
- Run formatting with: `npm run format` or `npm run format:check`

## How it works

- **Multi-plugin Setup**: Uses specialized plugins for different file types and formatting needs
- **Vue Support**: Properly formats Vue Single File Components
- **TypeScript Integration**: Handles TypeScript syntax and formatting
- **CSS Organization**: Automatically organizes CSS properties and imports

## Available Commands

```bash
# Format all files
npm run format

# Check if files are properly formatted (without modifying)
npm run format:check
```

## Installed Plugins

### Core Plugins

- **prettier-plugin-css-order**: Organizes CSS properties in a logical order (SMACSS)
- **prettier-plugin-jsdoc**: Formats JSDoc comments
- **prettier-plugin-organize-attributes**: Sorts Vue/HTML attributes alphabetically
- **prettier-plugin-organize-imports**: Organizes and sorts import statements

## Configuration

The configuration in `.prettierrc.js` includes:

```javascript
{
  // Basic formatting
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  trailingComma: 'es5',

  // Vue-specific options
  vueIndentScriptAndStyle: false,

  // Plugin configurations
  plugins: [
    'prettier-plugin-css-order',
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-organize-imports',
  ]
}
```

## Formatting Features

### CSS Organization

- Groups CSS properties by category (positioning, display, colors, etc.)
- Follows SMACSS methodology for consistent ordering

### Import Organization

- Groups imports by type (external, internal, relative)
- Sorts imports alphabetically within each group
- Removes unused imports

### Vue Attribute Organization

- Sorts Vue directives, props, and attributes alphabetically
- Groups related attributes together

### JSDoc Formatting

- Properly formats JSDoc comments
- Maintains readability and consistency

## Integration with Development Workflow

- **Pre-commit Hooks**: Can be integrated with Husky for automatic formatting on commit
- **CI/CD**: Use `npm run format:check` in CI pipelines to ensure consistent formatting
- **IDE**: Configure VS Code and other editors to format on save

## Ignoring Files

Files and directories are ignored via `.prettierignore`:

- Dependencies (`node_modules/`)
- Build outputs (`.nuxt/`, `dist/`)
- Package lock files
- Generated files and cache directories

## Customization

To modify formatting rules, edit `.prettierrc.js`:

```javascript
export default {
  // Your custom rules here
  semi: true, // Add semicolons
  singleQuote: false, // Use double quotes
  // ... other options
}
```

## Security

Prettier only formats code and doesn't execute it. No external dependencies or data exposure.

---

For more details, see the [Prettier documentation](https://prettier.io/docs/en/index.html) and [plugin documentation](https://prettier.io/docs/en/plugins.html).
