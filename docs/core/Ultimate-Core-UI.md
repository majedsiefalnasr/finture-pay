# Ultimate Core UI Integration

This project uses [Ultimate Core UI](https://github.com/ultimate-eg/ultimate-core-ui) as the primary UI component library, providing a set of reusable Vue components and utilities.

## Installation & Usage

- Ultimate Core UI is installed via npm and listed in `package.json`.
- The CSS is loaded globally in `nuxt.config.ts`: `css: ['ultimate-core-ui/style.css']`.
- The plugin is loaded in `nuxt.config.ts`: `plugins: ['~/plugins/ultimate-core-ui.ts']`.
- Components are available globally in your Vue templates.

## How it works

- **Global Components:** Components like `<u-container>`, `<u-btn>`, etc., are available throughout the app.
- **Plugin Setup:** The plugin configures the UI library with default themes and settings.
- **Styling:** Ultimate Core UI provides its own styling system, integrated with the project's theme.

### Using Ultimate Core UI in your app

You can use components directly in your templates:

```vue
<template>
  <u-container>
    <u-btn color="primary">Click me</u-btn>
  </u-container>
</template>
```

### Accessing the UI instance

You can access the Ultimate Core UI instance in composables:

```ts
const { $ultimateCoreUI } = useNuxtApp()
// Use the API as needed
```

## Customization

- **Themes:** Configure themes in the plugin setup (currently set to 'light' default).
- **Components:** Extend or override components as needed.
- **Styling:** Ultimate Core UI styles can be customized via CSS variables.

## Accessibility

Ultimate Core UI components are designed with accessibility in mind, including proper ARIA attributes and keyboard navigation.

## Security

No external dependencies or data exposure.

---

For more details, see the [Ultimate Core UI documentation](https://github.com/ultimate-eg/ultimate-core-ui).
