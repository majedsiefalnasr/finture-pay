<script setup lang="ts">
import floatingShape from '/assets/images/floating-shape.svg'

interface BlogInfo {
  date: string
  readTime: string
}

interface Props {
  variant?: 'default' | 'blog' | 'help-center'
  title: string
  description?: string
  category: string
  blogInfo?: BlogInfo
  searchPlaceholder?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  title: 'Building the Future of\nFinancial Freedom',
  category: 'About Us',
  searchPlaceholder: "Search for answers (e.g. 'Reset Password', 'Fees')",
})

const searchQuery = ref('')
</script>

<template>
  <div
    class="about-us-header overflow-hidden position-relative d-flex flex-column align-center justify-center px-4 py-16 text-white bg-Blue"
  >
    <!-- Floating shapes -->
    <u-img :src="floatingShape" class="floating floating-1" />
    <u-img :src="floatingShape" class="floating floating-2" />

    <!-- Main container -->
    <u-container style="z-index: 1">
      <div class="content d-flex flex-column align-center ga-6">
        <!-- Title badge -->
        <div class="title-badge d-flex align-center justify-center px-4 py-2 rounded-pill bg-BL80">
          <span class="text-BL10 label-2 font-weight-semibold text-center">{{ category }}</span>
        </div>

        <!-- Main heading -->
        <h1
          class="heading text-center"
          :class="$vuetify.display.mobile ? 'text-h3' : 'text-h1'"
          :style="{ whiteSpace: $vuetify.display.mobile ? 'normal' : 'pre-line' }"
        >
          {{ title }}
        </h1>

        <!-- Description -->
        <p v-if="description" class="description text-center text-white">
          {{ description }}
        </p>

        <!-- Blog info -->
        <div
          v-if="variant === 'blog' && blogInfo"
          class="blog-info d-flex align-center justify-center ga-4"
        >
          <div class="info-item d-flex align-center ga-2">
            <u-icon icon="line:calendar" size="20" />
            <span class="text-white">
              {{ blogInfo.date }}
            </span>
          </div>

          <div
            class="dot"
            style="width: 4px; height: 4px; background-color: white; border-radius: 50%"
          ></div>

          <div class="info-item d-flex align-center ga-2">
            <u-icon icon="line:clock" size="19" />
            <span class="text-white">
              {{ blogInfo.readTime }}
            </span>
          </div>
        </div>

        <!-- Search bar -->
        <u-text-field
          v-if="variant === 'help-center' && searchPlaceholder"
          v-model="searchQuery"
          :placeholder="searchPlaceholder"
          prepend-inner-icon="line:search"
          variant="solo"
          hide-details="auto"
          rounded="pill"
          class="search-bar w-100"
          :style="{ maxWidth: $vuetify.display.mobile ? '344px' : '660px' }"
          color="B30"
        />
      </div>
    </u-container>
  </div>
</template>

<style scoped>
.floating {
  position: absolute;
  user-select: none;
}

.floating-1 {
  top: 69px;
  left: -179px;
  width: 402px;
  height: 374px;
}

.floating-2 {
  right: -200px;
  bottom: -200px;
  width: 748px;
  height: 695px;
}

.text-h1 {
  font-weight: 700 !important;
  font-size: 64px !important;
  line-height: 130% !important;
}

.text-h3 {
  font-weight: 600 !important;
  font-size: 32px !important;
  line-height: 42px !important;
}

.description {
  font-size: 20px !important;
  line-height: 150% !important;
}

.content {
  margin: auto;
  max-width: 1000px;
}
</style>
