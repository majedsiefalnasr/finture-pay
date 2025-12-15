<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  price?: string
  image?: string
  imageMaxWidth?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Physical POS',
  subtitle: 'Android-based smart terminals',
  price: '$750',
  image: '/assets/images/AndroidPOS.png',
})
</script>

<template>
  <div class="d-flex flex-column ga-6">
    <u-img :src="image" :alt="title" :max-width="imageMaxWidth"></u-img>
    <div class="d-flex flex-column ga-2">
      <h3 class="text-h3">{{ title }}</h3>
      <p class="text-B20">{{ subtitle }}</p>
      <p class="text-h4 text-Blue font-weight-bold">{{ price }}</p>
    </div>
  </div>
</template>

<style scoped></style>
