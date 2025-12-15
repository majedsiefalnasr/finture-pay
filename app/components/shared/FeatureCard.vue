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
  <div class="text-center">
    <u-icon :icon="icon" size="100" />
    <div class="d-flex flex-column ga-2">
      <h4>{{ title }}</h4>
      <p class="text-B20">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
h4 {
  font-size: 24px !important;
}
</style>
