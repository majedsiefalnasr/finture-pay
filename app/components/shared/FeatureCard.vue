<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  icon?: string
}

withDefaults(defineProps<Props>(), {
  title: '100% Transparent',
  subtitle: 'No hidden fees, ever',
  icon: 'features:transparent',
})
</script>

<template>
  <div class="text-center d-flex flex-column align-center justify-center ga-4">
    <u-icon :icon="icon" size="100" class="two-tone-icon" />
    <div class="d-flex flex-column ga-2">
      <h5>{{ title }}</h5>
      <p class="text-B20">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped></style>
