<script setup lang="ts">
interface Props {
  image?: string
  title?: string
  description?: string
  actionText?: string
  actionLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  image: '/images/blog-feature-1.png',
  title: '5 Ways Small Businesses Can Reduce Payment Processing Costs',
  description:
    'Learn practical strategies to minimize transaction fees and maximize profitability while accepting digital payments.',
  actionText: 'Learn More',
  actionLink: '#',
})
</script>

<template>
  <u-card class="article-card" elevation="0" rounded="xl">
    <u-img :src="image" height="220" cover class="rounded-t-xl" />

    <u-card-text class="pa-6">
      <h6 class="title">{{ title }}</h6>

      <p class="description">
        {{ description }}
      </p>

      <u-btn
        :href="actionLink"
        color="Blue"
        variant="text"
        append-icon="line:arrow-narrow-right"
        class="font-weight-bold"
      >
        {{ actionText }}
      </u-btn>
    </u-card-text>
  </u-card>
</template>
<style scoped>
.article-card {
  background-color: #ffffff;
  max-width: 420px;
}

.title {
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.3;
}

.description {
  margin-bottom: 16px;
  color: #6b7280;
  font-size: 15px;
  line-height: 1.6;
}

.read-more {
  font-weight: 600;
  text-transform: none;
}
</style>
