# Vue TSC Integration

This project uses [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc) for comprehensive TypeScript type checking and compilation of Vue Single File Components.

## Installation & Usage

- vue-tsc is installed as a dev dependency and listed in `package.json`.
- Run type checking with: `npm run type-check` or `pnpm type-check`
- Integrated into the development workflow for enhanced TypeScript support.

## How it works

- **Type Checking**: Performs static type analysis on Vue components with TypeScript
- **SFC Support**: Understands Vue Single File Components (.vue files) with `<script setup lang="ts">`
- **Build Integration**: Works alongside Nuxt's build process for comprehensive type validation

## Available Commands

```bash
# Type check without emitting files (recommended for development)
npm run type-check
# or
vue-tsc --noEmit

# Full compilation (usually handled by Nuxt build)
vue-tsc
```

## Benefits

- **Enhanced IDE Support**: Better IntelliSense and error highlighting in VS Code
- **Build-time Validation**: Catches TypeScript errors before runtime
- **Refactoring Safety**: Ensures type safety during code changes
- **Vue-specific Types**: Proper typing for Vue Composition API, Options API, and SFC features

## Configuration

TypeScript configuration is handled through:

- `tsconfig.json`: Main TypeScript configuration with project references
- `.nuxt/tsconfig.*.json`: Auto-generated Nuxt-specific configurations

## Integration with Development Workflow

- **Pre-commit Hooks**: Can be integrated with tools like Husky for pre-commit type checking
- **CI/CD**: Use `npm run type-check` in CI pipelines for automated type validation
- **IDE**: Provides real-time type checking and error reporting during development

## Troubleshooting

### Common Issues

- **Import Errors**: Ensure all Vue components use `lang="ts"` in script blocks
- **Type Definitions**: Make sure @types packages are installed for external libraries
- **Path Resolution**: Check `tsconfig.json` paths match your project structure

### Performance

- Type checking can be slow on large codebases
- Use `--noEmit` flag for faster checking during development
- Consider incremental checking for better performance

## Security

No external dependencies or data exposure. Type checking is performed locally during development and build processes.

---

For more details, see the [vue-tsc documentation](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc).
