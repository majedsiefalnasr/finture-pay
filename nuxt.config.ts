// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  pages: true,
  ssr: false,
  devtools: {enabled: true},
  css: ['ultimate-core-ui/style.css'],
  plugins: ['~/plugins/ultimate-core-ui.ts'],
  components: true,
})
