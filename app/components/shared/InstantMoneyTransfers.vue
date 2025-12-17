<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  icon?: string
  image?: string
  imagePosition?: 'start' | 'end'
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Instant Money Transfers',
  description:
    'Send money to anyone in Turkey using just their phone number, email, or Finture username. Transfers complete in seconds, 24/7—even on holidays and weekends.',
  icon: 'line:switchHorizontal01',
  image: '/assets/images/instant-money-transfers-example.png',
  imagePosition: 'end',
})

const contentPaddingClass = computed(() =>
  props.imagePosition === 'end' ? 'pe-md-16' : 'ps-md-16'
)
</script>

<template>
  <u-row>
    <!-- Mobile: image first -->
    <u-col cols="12" class="d-block d-md-none">
      <img :src="image" alt="{{ title }}" width="100%" />
    </u-col>

    <!-- Desktop: image if position start -->
    <u-col v-if="imagePosition === 'start'" cols="12" md="6" class="d-none d-md-block">
      <img :src="image" alt="{{ title }}" class="object-cover" width="100%" />
    </u-col>

    <!-- Content -->
    <u-col
      cols="12"
      md="6"
      class="d-flex flex-column ga-6 align-center align-md-start justify-center text-center text-md-start pt-12 pt-md-0"
      :class="contentPaddingClass"
    >
      <!-- Icon -->
      <div
        class="bg-white border border-B60 rounded-xl pa-4 elevation-2 d-flex align-center justify-center"
      >
        <u-icon :icon="icon" size="40" class="two-tone-icon" />
      </div>

      <div class="d-flex flex-column ga-6 align-center align-md-start text-center text-md-start">
        <!-- Title -->
        <h2 class="text-h2 font-weight-semibold">{{ title }}</h2>
        <!-- Description -->
        <p class="text-body-1 text-B20">{{ description }}</p>
      </div>
    </u-col>

    <!-- Desktop: image if position end -->
    <u-col v-if="imagePosition === 'end'" cols="12" md="6" class="d-none d-md-block">
      <img :src="image" alt="{{ title }}" class="object-cover" width="100%" />
    </u-col>
  </u-row>
</template>

<style scoped>
.rounded-xl {
  border-radius: 16px !important;
}
</style>
