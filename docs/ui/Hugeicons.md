# Hugeicons Integration

This project uses [Hugeicons](https://hugeicons.com/) as a premium icon set, providing high-quality, consistent icons for modern interfaces.

## Installation & Usage

- Hugeicons is installed via npm as `@iconify-json/hugeicons` and listed in `package.json`.
- Icons are accessed through the Iconify system alongside other icon sets.
- Use the `Icon` component from `@iconify/vue` with the `hugeicons:` prefix.

## How it works

- **Icon Set:** Hugeicons provides a curated collection of premium icons designed for modern applications.
- **Integration:** Works seamlessly with the existing Iconify setup, using the same `Icon` component.
- **Consistency:** All Hugeicons follow consistent design principles and sizing.

### Using Hugeicons in your app

You can use Hugeicons in your components like this:

```vue
<template>
  <Icon name="hugeicons:search" />
  <Icon name="hugeicons:user" />
  <Icon name="hugeicons:settings" />
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
```

Or if registered globally:

```vue
<template>
  <Icon name="hugeicons:home" class="w-6 h-6" />
</template>
```

## Available Icons

Hugeicons includes icons for:

- Navigation and UI controls
- User interface elements
- Business and finance
- Communication
- Files and documents
- And many more categories

## Customization

- **Size:** Use CSS classes like `w-6 h-6` or inline styles to adjust icon size.
- **Color:** Icons inherit color from parent elements or can be styled with CSS.
- **Variants:** Some icons may have multiple variants (outlined, filled, etc.).

## Accessibility

Icons should include appropriate ARIA labels when used for interactive elements or conveying important information.

## Security

Hugeicons are loaded through the Iconify system, which handles icon delivery securely.

---

For more details, see the [Hugeicons website](https://hugeicons.com/) and [Iconify documentation](https://iconify.design/docs/iconify-in-vue/).
