<script setup lang="ts">
interface Props {
  variant?: 'default' | 'long'
  title?: string
  subtitle?: string
  description?: string
  price?: string
  image?: string
  imageMaxWidth?: string
  icon?: string
  imagePosition?: 'start' | 'end'
  imageRatio?: '1/1' | '1/2' | '2/1'
}

const props = defineProps<Props>()

const defaultProps = computed(() => ({
  title: 'Physical POS',
  subtitle: undefined,
  description: 'Android-based smart terminals',
  price: '$750',
  image: '/assets/images/solutions/AndroidPOS.png',
  imageMaxWidth: undefined,
  imageRatio: '1/1' as const,
  icon: undefined,
  imagePosition: undefined,
}))

const effectiveProps = computed(() => ({
  title: props.title ?? defaultProps.value.title,
  subtitle: props.subtitle ?? defaultProps.value.subtitle,
  description: props.description ?? defaultProps.value.description,
  price: props.price ?? defaultProps.value.price,
  image: props.image ?? defaultProps.value.image,
  imageMaxWidth: props.imageMaxWidth ?? defaultProps.value.imageMaxWidth,
  icon: props.icon ?? defaultProps.value.icon,
  imagePosition: props.imagePosition ?? defaultProps.value.imagePosition,
  imageRatio: props.imageRatio ?? defaultProps.value.imageRatio,
}))

const contentPaddingClass = computed(() =>
  effectiveProps.value.imagePosition === 'end' ? 'pe-3 pe-md-16' : 'ps-3 ps-md-16'
)

const imageMd = computed(() => {
  if (effectiveProps.value.imageRatio === '1/1') return 6
  if (effectiveProps.value.imageRatio === '1/2') return 4
  if (effectiveProps.value.imageRatio === '2/1') return 8
  return 6
})

const contentMd = computed(() => {
  if (effectiveProps.value.imageRatio === '1/1') return 6
  if (effectiveProps.value.imageRatio === '1/2') return 8
  if (effectiveProps.value.imageRatio === '2/1') return 4
  return 6
})
</script>

<template>
  <div v-if="props.variant === 'long'" class="long-variant">
    <u-row>
      <!-- Mobile: image first -->
      <u-col cols="12" class="d-block d-md-none">
        <img :src="effectiveProps.image" :alt="effectiveProps.title" width="100%" />
      </u-col>

      <!-- Desktop: image if position start -->
      <u-col
        v-if="effectiveProps.imagePosition === 'start'"
        cols="12"
        :md="imageMd"
        class="d-none d-md-block"
      >
        <img
          :src="effectiveProps.image"
          :alt="effectiveProps.title"
          class="object-cover"
          width="100%"
        />
      </u-col>

      <!-- Content -->
      <u-col
        cols="12"
        :md="contentMd"
        class="d-flex flex-column ga-6 align-center align-md-start justify-center text-center text-md-start pt-6 pt-md-0"
        :class="contentPaddingClass"
      >
        <!-- Icon -->
        <div
          v-if="effectiveProps.icon"
          class="bg-white border border-B60 rounded-xl pa-4 elevation-2 d-flex align-center justify-center"
        >
          <u-icon :icon="effectiveProps.icon" size="40" class="two-tone-icon" />
        </div>

        <div class="d-flex flex-column ga-6 align-center align-md-start text-center text-md-start">
          <!-- Title -->
          <h2 v-if="effectiveProps.title">{{ effectiveProps.title }}</h2>
          <!-- Title -->
          <h4 v-if="effectiveProps.subtitle">{{ effectiveProps.subtitle }}</h4>
          <!-- Description -->
          <p v-if="effectiveProps.description" class="text-body-1 text-B20">
            {{ effectiveProps.description }}
          </p>
        </div>
      </u-col>

      <!-- Desktop: image if position end -->
      <u-col
        v-if="effectiveProps.imagePosition === 'end'"
        cols="12"
        :md="imageMd"
        class="d-none d-md-block"
      >
        <img
          :src="effectiveProps.image"
          :alt="effectiveProps.title"
          class="object-cover"
          width="100%"
        />
      </u-col>
    </u-row>
  </div>

  <div v-else class="default-variant">
    <div class="d-flex flex-column ga-6">
      <u-img
        :src="effectiveProps.image"
        :alt="effectiveProps.title"
        :max-width="effectiveProps.imageMaxWidth"
      ></u-img>
      <div class="d-flex flex-column ga-2">
        <h3 v-if="effectiveProps.title" class="text-h3">{{ effectiveProps.title }}</h3>
        <p v-if="effectiveProps.description" class="text-B20">{{ effectiveProps.description }}</p>
        <p v-if="effectiveProps.price" class="text-h4 text-Blue font-weight-bold">
          {{ effectiveProps.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounded-xl {
  border-radius: 16px !important;
}
</style>
