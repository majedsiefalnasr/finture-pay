<script setup lang="ts">
interface Props {
  name?: string
  bio?: string
  image?: string
}

withDefaults(defineProps<Props>(), {
  name: 'Advisor Name',
  bio: '[Background in payments industry, banking, technology, and Turkish financial markets]',
  image: '/images/1.jpg', // replace with your image path
})
</script>

<template>
  <u-card class="advisor-card" elevation="0">
    <u-row align="center" no-gutters>
      <!-- Avatar -->
      <u-col cols="auto">
        <u-avatar size="80" class="avatar">
          <u-img :src="image" cover />
        </u-avatar>
      </u-col>

      <!-- Text -->
      <u-col class="pl-4">
        <div class="name">{{ name }}</div>
        <div class="bio">{{ bio }}</div>
      </u-col>
    </u-row>
  </u-card>
</template>

<style scoped>
.advisor-card {
  background: #ffffff;
  padding: 16px 20px;
}

.avatar {
  border-radius: 14px;
  height: 200px;
}

.name {
  margin-bottom: 4px;
  color: #111827;
  font-weight: 600;
  font-size: 16px;
}

.bio {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
}
</style>
