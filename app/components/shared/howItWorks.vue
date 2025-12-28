<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface FeatureListItem {
  label: string
  description: string
  image: string
}

interface Props {
  title?: string
  subtitle?: string
  list?: FeatureListItem[]
  actionLabel?: string
  onAction?: () => void
  autoplayInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'How It Works',
  subtitle:
    'Open your account in 2 minutes, verify with digital KYC, and start using Finture instantly.',
  list: () => [
    { label: 'Sign Up', description: '2 minutes', image: '/assets/images/how-it-works/01.png' },
    {
      label: 'Verify',
      description: 'Quick Digital KYC',
      image: '/assets/images/how-it-works/02.png',
    },
    { label: 'Start Using', description: 'Instantly', image: '/assets/images/how-it-works/03.png' },
  ],
  actionLabel: 'Register with Finture',
  onAction: () => {},
  autoplayInterval: 5000,
})

const activeIndex = ref(0)
const isHovered = ref(false)
let autoplayTimer: ReturnType<typeof setInterval> | null = null
const imgOpacity = ref(1)
const displayedImage = ref(props.list[0]?.image)

function setActive(idx: number) {
  if (displayedImage.value !== props.list[idx]?.image) {
    imgOpacity.value = 0
    setTimeout(() => {
      activeIndex.value = idx
      displayedImage.value = props.list[idx]?.image
      imgOpacity.value = 1
    }, 300)
  } else {
    activeIndex.value = idx
  }
}

function startAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer)
  autoplayTimer = setInterval(() => {
    if (!isHovered.value) {
      const nextIndex = (activeIndex.value + 1) % props.list.length
      setActive(nextIndex)
    }
  }, props.autoplayInterval ?? 5000)
}

function stopAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer)
  autoplayTimer = null
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div
    class="bg-B80 py-16"
    @mouseenter="((isHovered = true), stopAutoplay())"
    @mouseleave="((isHovered = false), startAutoplay())"
  >
    <u-container>
      <u-row class="py-0 py-md-8">
        <u-col cols="12" md="6">
          <div class="pe-0 pe-md-10">
            <div class="d-flex flex-column ga-5">
              <h2 class="mb-2">{{ title }}</h2>
              <p class="text-body-1 text-B20 mb-4">{{ subtitle }}</p>
            </div>

            <div class="feature-list d-flex flex-column my-6">
              <div
                v-for="(item, idx) in list"
                :key="idx"
                class="feature-list-item d-flex flex-row align-center pa-4 rounded-lg"
                :class="{
                  'bg-B90': idx === activeIndex,
                }"
                @click="setActive(idx)"
              >
                <div
                  class="feature-list-item-index d-flex align-center justify-center rounded-circle"
                  :class="idx === activeIndex ? 'bg-BL20 text-White' : 'bg-B40 text-White'"
                  style="width: 48px; height: 48px"
                >
                  <span class="text-h3">{{ idx + 1 }}</span>
                </div>
                <div class="d-flex flex-column ga-1 ml-4">
                  <span class="text-h4" :class="idx === activeIndex ? 'text-Black' : 'text-B20'">
                    {{ item.label }}
                  </span>
                  <span class="label-2" :class="idx === activeIndex ? 'text-B20' : 'text-B40'">
                    {{ item.description }}
                  </span>
                </div>
                <u-icon
                  v-if="idx === activeIndex"
                  icon="line:arrow-narrow-right"
                  class="ml-auto d-none d-md-block"
                  color="Blue"
                />
                <u-icon
                  v-if="idx === activeIndex"
                  icon="line:arrow-narrow-down"
                  class="ml-auto d-block d-md-none"
                  color="Blue"
                />
              </div>
            </div>

            <u-btn
              class="mt-6 text-capitalize"
              color="Blue"
              size="x-large"
              rounded
              @click="props.onAction"
            >
              {{ actionLabel }}
            </u-btn>
          </div>
        </u-col>

        <u-col cols="12" md="6">
          <div class="feature-card-image d-flex align-center justify-center">
            <img
              :src="displayedImage"
              :style="{ opacity: imgOpacity }"
              alt="feature image"
              class="rounded-xl w-100 h-auto"
              style="object-fit: cover"
            />
          </div>
        </u-col>
      </u-row>
    </u-container>
  </div>
</template>

<style scoped>
.feature-list-item {
  transition: background-color 0.3s ease;
}

.feature-list-item:hover {
  cursor: pointer;
}

img {
  transition: opacity 0.3s ease;
}
</style>
