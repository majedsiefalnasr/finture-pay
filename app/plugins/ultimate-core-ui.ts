import { createUltimateCoreUI } from 'ultimate-core-ui'

import { createI18n, useI18n } from 'vue-i18n'
import { ar, en } from 'vuetify/locale'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

import { aliases as aliases3d, icons as d3 } from '../iconsets/3d'
import { aliases as aliasesFeatures, icons as features } from '../iconsets/features'
import { aliases as aliasesLine, icons as line } from '../iconsets/line'

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
      themes: {
        light: {
          dark: false,
          colors: {
            // Natural
            White: '#ffffff',
            Black: '#121416',
            B10: '#2d3139',
            B20: '#59606e',
            B30: '#777e92',
            B40: '#959bae',
            B50: '#babdca',
            B60: '#dddee4',
            B70: '#e8eaed',
            B80: '#f4f4f6',
            B90: '#fcfdfe',
            // Blue
            Blue: '#0047ab',
            BL10: '#175ab3',
            BL20: '#326cba',
            BL30: '#4b7ec3',
            BL40: '#6691ce',
            BL50: '#7fa3d4',
            BL60: '#98b6dc',
            BL70: '#b3c7e6',
            BL80: '#ccdaee',
            BL90: '#e7eff7',
            // Dark Blue
            DBlue: '#002f6c',
            DB10: '#184379',
            DB20: '#335a88',
            DB30: '#4b6d96',
            DB40: '#6882a7',
            DB50: '#7f97b5',
            DB60: '#98acc3',
            DB70: '#b2c1d2',
            DB80: '#ccd5e1',
            DB90: '#e5eaee',
            // Pink
            Pink: '#d4436d',
            P10: '#d7567a',
            P20: '#dc6988',
            P30: '#e17a97',
            P40: '#e58fa6',
            P50: '#eaa0b5',
            P60: '#eeb3c3',
            P70: '#f3c6d4',
            P80: '#f6d9e2',
            P90: '#faeef1',
            // Accent
            Red: '#da3e3e',
            DRed: '#9c1616',
            Green: '#34c759',
            DGreen: '#20973e',
            Yellow: '#fdb022',
            DYellow: '#dc6803',
          },
        },
      },
    },
    icons: {
      aliases: { ...aliasesLine, ...aliases3d, ...aliasesFeatures },
      sets: {
        line,
        d3,
        features,
      },
    },
  })

  nuxtApp.vueApp.use(ultimateCoreUI)
})
