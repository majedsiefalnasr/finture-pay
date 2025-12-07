# MDI Font Integration

This project uses [Material Design Icons (MDI)](https://materialdesignicons.com/) for a comprehensive set of icons via font loading.

## Installation & Usage

- MDI Font is installed via npm and listed in `package.json`.
- The font is loaded by importing it in your main CSS file or via a Nuxt plugin.

## How it works

- **Font Loading:** The MDI font files are included in the bundle.
- **CSS Classes:** Icons are used via CSS classes like `mdi mdi-home`.
- **Global Availability:** Once loaded, MDI classes are available throughout the app.

### Using MDI Icons in your app

You can use MDI icons in your templates like this:

```vue
<template>
  <i class="mdi mdi-home"></i>
  <span class="mdi mdi-account"></span>
</template>
```

## Customization

- **Size:** Adjust size with CSS font-size or utility classes.
- **Color:** Icons inherit color from parent elements.
- **Variants:** MDI offers filled, outlined, and other variants.

## Accessibility

Icons should have appropriate ARIA labels when used for important information.

## Security

No external requests; icons are bundled locally.

---

For more details, see the [MDI documentation](https://materialdesignicons.com/).
