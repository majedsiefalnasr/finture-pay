# Iconify Integration

This project uses [Iconify](https://iconify.design/) for a unified icon system, providing access to thousands of icons from various icon sets.

## Installation & Usage

- Iconify Vue is installed via npm and listed in `package.json`.
- The HugeIcons icon set is also installed for additional icons.
- Icons are used via the `Icon` component from `@iconify/vue`.

## How it works

- **Global Component:** The `Icon` component is available globally in your Vue templates.
- **Icon Sets:** You can use any icon from Iconify's collection, including the installed HugeIcons set.
- **Auto-loading:** Icons are loaded on-demand, keeping bundle size small.

### Using Icons in your app

You can use icons in your components like this:

```vue
<template>
  <Icon name="mdi:home" />
  <Icon name="hugeicons:search" />
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
```

Or if registered globally:

```vue
<template>
  <Icon name="mdi:home" />
</template>
```

## Customization

- **Size:** Use CSS classes or inline styles to adjust icon size.
- **Color:** Icons inherit color from parent elements or can be styled directly.
- **Additional Sets:** Install more `@iconify-json/*` packages for more icon sets.

## Accessibility

Icons should have appropriate ARIA labels when used as interactive elements or for important information.

## Security

Iconify loads icons from a CDN by default; ensure your CSP allows this if needed.

---

For more details, see the [Iconify Vue documentation](https://iconify.design/docs/iconify-in-vue/).
