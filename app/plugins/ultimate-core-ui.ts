import {createUltimateCoreUI} from 'ultimate-core-ui'

export default defineNuxtPlugin(nuxtApp => {
  const ultimateCoreUI = createUltimateCoreUI({
    theme: {
      defaultTheme: 'light',
    },
  })

  nuxtApp.vueApp.use(ultimateCoreUI)
})
