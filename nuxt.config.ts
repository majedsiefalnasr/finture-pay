// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

import { schemaOrg } from './app/config/schemaOrg'
import { app, identity, socialMedia } from './app/constants'

export default defineNuxtConfig({
  // Runtime config for secrets and environment variables Use this section to securely manage API keys and other sensitive data. Values in `public` are exposed to the client; others are server-only.
  runtimeConfig: {
    // Example: apiSecret: process.env.API_SECRET,
    public: {
      API_URL:process.env.API_URL,

      // Example: publicApiBase: process.env.PUBLIC_API_BASE || ''
    },
  },

  // Nuxt compatibility date for future-proof builds
  compatibilityDate: '2025-07-15',

  // Enable Nuxt DevTools for enhanced development experience
  devtools: { enabled: true },

  // Nuxt modules to include in the project
  modules: ['@nuxt/eslint', '@nuxtjs/seo', '@nuxtjs/i18n'],

  // Plugins to run before rendering the app
  plugins: ['~/plugins/ultimate-core-ui.ts', { src: '~/plugins/consoleBranding', mode: 'client' },'~/plugins/store.ts'],

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

  // App-level HTML head configuration
  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: http;;
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: *.googletagmanager.com *.mutinycdn.com;
            style-src 'self' 'unsafe-inline' https: http;;
            object-src https: http;;
            base-uri 'self';
            connect-src 'self' https: http: wss: ws: *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.mutinyhq.com *.mutinyhq.io *.mutinycdn.com;
            frame-src 'self' https: http;;
            img-src 'self' https: http: data: *.google-analytics.com *.googletagmanager.com *.mutinycdn.com;
            manifest-src 'self'; media-src 'self' https: http;;
            child-src 'self' blob: https: http;;
            font-src 'self' https: http: data;;
          `,
        },
        { name: 'format-detection', content: 'telephone=no' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: app.title },
      ],
      link: [
        // Favicon and icons
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-32x32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-16x16.png',
          sizes: '16x16',
        },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
      ],
    },
  },

  // Nuxt SEO: site-wide metadata configuration
  site: {
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : app.url,
    name: app.title,
  },

  // SEO module configuration
  seo: {
    meta: {
      description: app.description,
      keywords: app.keywords,
      twitterCreator: socialMedia.x.username,
      twitterSite: socialMedia.x.username,
      author: identity.name,
      colorScheme: app.colorScheme,
      applicationName: app.name,
    },
    redirectToCanonicalSiteUrl: true, // Redirect to canonical URL if not matched
  },

  // Sitemap configuration
  sitemap: {
    autoLastmod: true,
    exclude: ['/secret/**'],
    // Add more sitemap options as needed
  },

  // Robots.txt configuration
  robots: {
    blockAiBots: true,
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `/sitemap.xml`,
    // Add more robots options as needed
  },

  // Schema.org structured data for SEO
  schemaOrg,

  // Link checker configuration
  linkChecker: {
    // enabled: false,
  },
})
