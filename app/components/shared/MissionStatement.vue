<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  icon?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Our Mission',
  description:
    'We exist to eliminate financial friction. Every transaction should be instant, transparent, and secure. Every business should have access to enterprise-grade financial tools. Every individual deserves complete control over their money—anytime, anywhere.',
  icon: 'd3:mission',
})
</script>

<template>
  <div class="d-flex flex-column align-center align-md-start ga-8 text-center text-md-start">
    <u-icon :icon="icon" size="96" class="d-none d-md-block" />
    <u-icon :icon="icon" size="80" class="d-block d-md-none" />
    <div class="d-flex flex-column ga-4">
      <h3 class="d-none d-md-block">{{ title }}</h3>
      <h4 class="d-block d-md-none">{{ title }}</h4>
      <p class="text-B20">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
