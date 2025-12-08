<script setup lang="ts">
// Global setup,

// i18n integration for locale and text direction management
type LocaleObject = { code: string; dir?: 'ltr' | 'rtl' | 'auto' }
const { locale, locales } = useI18n()
const currentLocale = computed(() => locale.value || 'en')
const currentLocaleDir = computed(() => {
  const found = (locales.value as LocaleObject[]).find((l) => l.code === locale.value)
  return found && (found.dir === 'rtl' || found.dir === 'ltr' || found.dir === 'auto')
    ? found.dir
    : 'ltr'
})

watchEffect(() => {
  useHead({
    htmlAttrs: {
      lang: currentLocale.value,
      dir: currentLocaleDir.value,
    },
  })
})
</script>

<template>
  <u-locale-provider :rtl="currentLocaleDir === 'rtl' ? true : false">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </u-locale-provider>
</template>
