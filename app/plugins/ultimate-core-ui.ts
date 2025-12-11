import { createUltimateCoreUI } from 'ultimate-core-ui'

import { createI18n, useI18n } from 'vue-i18n'
import { ar, en } from 'vuetify/locale'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

import { aliases as aliases3d, icons as icons3d } from '../iconsets/3d'
import { aliases as aliasesLine, icons as iconsLine } from '../iconsets/line'

const messages = {
  en: {
    $vuetify: {
      ...en,
    },
  },
  ar: {
    $vuetify: {
      ...ar,
    },
  },
}

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default defineNuxtPlugin((nuxtApp) => {
  const ultimateCoreUI = createUltimateCoreUI({
    locale: {
      adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    theme: {
      defaultTheme: 'light',
    },
    icons: {
      aliases: { ...aliasesLine, ...aliases3d },
      sets: {
        iconsLine,
        icons3d,
      },
    },
  })

  nuxtApp.vueApp.use(ultimateCoreUI)
})
