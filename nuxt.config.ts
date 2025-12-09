// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Runtime config for secrets and environment variables Use this section to securely manage API keys and other sensitive data. Values in `public` are exposed to the client; others are server-only.
  runtimeConfig: {
    // Example: apiSecret: process.env.API_SECRET,
    public: {
      // Example: publicApiBase: process.env.PUBLIC_API_BASE || ''
    },
  },

  // Nuxt compatibility date for future-proof builds
  compatibilityDate: '2025-07-15',

  // Enable Nuxt DevTools for enhanced development experience
  devtools: { enabled: true },

  // Nuxt modules to include in the project
  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],

  // Plugins to run before rendering the app
  plugins: ['~/plugins/ultimate-core-ui.ts', { src: '~/plugins/consoleBranding', mode: 'client' }],

  // Global CSS files to include in the project
  css: ['ultimate-core-ui/style.css', '~/assets/styles/main.scss'],

  // Build configuration for SSR with Ultimate Core UI (Vuetify)
  build: {
    transpile: ['ultimate-core-ui'],
  },

  // Vite configuration for SSR compatibility
  vite: {
    ssr: {
      noExternal: ['ultimate-core-ui'],
    },
  },

  // Router configuration
  router: {
    options: {
      strict: false, // Treat /page and /page/ as distinct
    },
  },

  // Auto-imported components configuration
  components: ['~/components'],

  // Enable automatic route generation from the
  pages: true,

  // Enable server-side rendering for better SEO and performance with Ultimate Core UI
  ssr: true,

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        language: 'en',
        name: 'English',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        code: 'ar',
        iso: 'ar-EG',
        language: 'ar',
        name: 'العربية',
        file: 'ar.json',
        dir: 'rtl',
      },
    ],
    langDir: 'locales',
    strategy: 'prefix_except_default',
    vueI18n: 'i18n.config.ts',
    detectBrowserLanguage: false, // Disable automatic detection
  },
})
