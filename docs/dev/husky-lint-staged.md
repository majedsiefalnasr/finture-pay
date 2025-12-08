# Husky & lint-staged Integration

This project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) for automated code quality checks during the Git workflow.

## Installation & Usage

- Husky and lint-staged are installed as dev dependencies and listed in `package.json`.
- Husky manages Git hooks automatically.
- lint-staged runs linters only on staged files for better performance.
- Pre-commit hooks are automatically set up via the `prepare` script.

## How it works

- **Husky**: Manages Git hooks and ensures they run at the correct times
- **lint-staged**: Runs commands only on files that are staged for commit
- **Pre-commit Hook**: Automatically runs before each commit to ensure code quality

## Git Hook Setup

The pre-commit hook (`.husky/pre-commit`) runs:

```bash
npx lint-staged
```

## lint-staged Configuration

Configuration in `package.json`:

```json
{
  "lint-staged": {
    "*.{js,ts,vue}": ["eslint --fix", "prettier --write"],
    "*.{json,css,scss,md}": ["prettier --write"]
  }
}
```

### File Type Handling

- **JavaScript/TypeScript/Vue files** (`.js`, `.ts`, `.vue`):
  - Run ESLint with auto-fix
  - Format with Prettier

- **Other files** (`.json`, `.css`, `.scss`, `.md`):
  - Format with Prettier only

## Benefits

- **Faster commits**: Only lints staged files instead of entire codebase
- **Automatic fixes**: ESLint can auto-fix many issues before commit
- **Consistent formatting**: Prettier ensures consistent code style
- **Prevents bad commits**: Stops commits that don't pass quality checks
- **Developer experience**: Immediate feedback on code quality

## Manual Usage

While hooks run automatically, you can also run lint-staged manually:

```bash
npx lint-staged
```

## Troubleshooting

### Hook not running

- Ensure `.husky/pre-commit` is executable: `chmod +x .husky/pre-commit`
- Check that Husky was initialized: `npm run prepare`

### Staged files not being processed

- Verify file extensions match the patterns in `lint-staged` config
- Check that files are properly staged: `git status`

### ESLint/Prettier errors blocking commit

- Fix the reported issues manually
- Use `git commit --no-verify` to bypass hooks (not recommended)
- Stage fixes and try committing again

## Integration with Development Workflow

- **Automatic**: Runs on every commit attempt
- **Non-blocking**: Can be bypassed with `--no-verify` flag if needed
- **Fast**: Only processes changed files
- **Configurable**: Easy to modify rules via `package.json`

## Security

- Hooks run locally and don't expose sensitive data
- No external API calls or network dependencies
- Safe to run on any development environment

---

For more details, see the [Husky documentation](https://typicode.github.io/husky/) and [lint-staged documentation](https://github.com/okonet/lint-staged).
