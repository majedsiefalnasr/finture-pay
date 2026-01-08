<script setup lang="ts">
import floatingShape from '/assets/images/floating-shape.svg'
interface Props {
  title: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Join the Team',
  description:
    'Join our mission to transform Turkish financial services. We,re always looking for talented engineers, product designers, and compliance professionals.',
})
</script>

<template>
  <div
    class="page-header overflow-hidden position-relative d-flex flex-column align-center justify-center px-4 text-white bg-Blue"
  >
    <!-- Floating shapes -->
    <u-img :src="floatingShape" class="floating floating-2 text-center" />

    <!-- Main container -->
    <u-container style="z-index: 1">
      <div class="content d-flex flex-column align-center ga-6">
        <h1 class="heading text-center" style="white-space: pre-line">
          {{ title }}
        </h1>

        <!-- Description -->
        <p v-if="description" class="description text-center text-white">
          {{ description }}
        </p>

        <div class="mb-4">
          <u-btn to="/register" color="Pink" rounded size="large"> View Open Positions </u-btn>
        </div>
      </div>
    </u-container>
  </div>
</template>

<style scoped>
.page-header {
  border-radius: 20px;
  padding-block: 40px;
}

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
  top: 110px;
  width: 1800px;
  height: 1800px;
}

.heading {
  font-weight: 700 !important;
  font-size: 64px !important;
  line-height: 130% !important;
}

.description {
  font-size: 20px !important;
  line-height: 150% !important;
}

.content {
  margin: auto;
  max-width: 1000px;
}

.slot {
  background: linear-gradient(180deg, #0047ab 0%, #4b7ec3 52.27%, #fff 98%);
}

.slot .footer-slot {
  padding-block: 100px 40px;
}

@media (max-width: 958.98px) {
  .heading {
    font-weight: 600 !important;
    font-size: 32px !important;
    line-height: 42px !important;
  }
}
</style>
