<script setup lang="ts">
interface Feature {
  icon: string
  text: string
}

interface Props {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  features?: Feature[]
  backgroundImage?: string
  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Ready to Get Started?',
  subtitle: 'Join Finture. Open your free account in minutes.',
  primaryButtonText: 'Open Individual Account',
  secondaryButtonText: 'Start Your Business',
  features: () => [
    { icon: 'line:check', text: 'No credit check' },
    { icon: 'line:check', text: 'Free forever' },
    { icon: 'line:check', text: 'No minimum balance' },
  ],
  backgroundImage: '/assets/images/get-started-section-bg.png',
  onPrimaryAction: () => {},
  onSecondaryAction: () => {},
})
</script>

<template>
  <div
    class="get-started-section d-flex align-center justify-center px-8 px-md-12 py-12 py-md-16 relative"
    :style="`background-image: url(${backgroundImage}); background-size: cover; background-position: center;`"
  >
    <div class="content d-flex flex-column ga-12 align-center relative py-md-12">
      <div class="text-center">
        <h2 class="mb-3 text-white">{{ title }}</h2>
        <p class="text-body-1 text-DB80">{{ subtitle }}</p>
      </div>
      <div class="d-flex flex-wrap justify-center align-center ga-4">
        <u-btn color="Pink" size="large" rounded class="px-6" @click="props.onPrimaryAction">
          {{ primaryButtonText }}
        </u-btn>
        <u-btn
          variant="outlined"
          color="BL90"
          size="large"
          rounded
          class="px-6 text-white"
          @click="props.onSecondaryAction"
        >
          {{ secondaryButtonText }}
        </u-btn>
      </div>
      <div class="d-flex flex-wrap justify-center align-center ga-10">
        <div v-for="(feature, idx) in features" :key="idx" class="d-flex ga-2 align-center">
          <u-icon :icon="feature.icon" size="20" class="text-DB60" />
          <span class="label-3 text-DB60">{{ feature.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.get-started-section {
  position: relative;
  border-bottom: 1px solid #184379; /* DB10 */
  min-height: 400px;
  overflow: hidden;
}

.background-image {
  position: absolute;
  z-index: -1;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  max-width: 800px;
}
</style>
