// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  pages: true,
  ssr: false,
  devtools: { enabled: true },
  css: ['ultimate-core-ui/style.css'],
  plugins: ['~/plugins/ultimate-core-ui.ts'],
  components: true,
  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],

  // Internationalization settings
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
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
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    vueI18n: 'i18n.config.ts',
    detectBrowserLanguage: false, // Disable automatic detection
  },
})
