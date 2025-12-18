<script setup lang="ts">
interface Props {
  date?: string
  title?: string
  description?: string
  image?: string
}

const props = withDefaults(defineProps<Props>(), {
  date: 'Oct 24, 2025',
  title: 'Finture Reaches 500,000 Users Milestone',
  description:
    'We are thrilled to announce a major milestone in our journey. Thanks to our loyal community, Finture now serves half a million users across Turkiye.',
  image: '/images/bolg-recent-post.png',
})
</script>

<template>
  <u-container class="py-6">
    <u-row no-gutters>
      <!-- Image -->
      <u-col cols="12" md="2" class="mb-2 d-flex justify-center">
        <u-img :src="image" height="150" width="220" cover class="rounded-lg" />
      </u-col>

      <!-- Content -->
      <u-col cols="12" md="9" class="pl-md-6 text-center text-md-left">
        <div class="date">{{ date }}</div>

        <h6 class="title">{{ title }}</h6>

        <p class="description">
          {{ description }}
        </p>
      </u-col>
    </u-row>
  </u-container>
</template>
`
<style scoped>
.date {
  margin-bottom: 6px;
  color: #6b7280;
  font-size: 13px;
}

.title {
  margin-bottom: 6px;
  color: #2563eb;
  font-weight: 600;
  font-size: 18px;
}

.description {
  color: #374151;
  font-size: 15px;
  line-height: 1.6;
}
</style>
