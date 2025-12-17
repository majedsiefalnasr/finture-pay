<script setup lang="ts">
import { useDisplay } from 'vuetify'

interface Props {
  name?: string
  role?: string
  bio?: string
  image?: string
  nameLocationOrder?: number
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Name',
  role: 'CEO & Co-Founder',
  bio: '[Brief background: technical expertise, previous companies, vision for product development]. This section can comfortably hold 2-3 paragraphs of text. Ideal for highlighting specific technical achievements or past exit experiences.',
  image: '/images/team-1.png',
  nameLocationOrder: 0,
  icon: 'fa-brands:linkedin',
})

const { mobile } = useDisplay()

// ✅ Final reactive order
const textOrder = computed(() => (mobile.value ? 1 : props.nameLocationOrder))
</script>

<template>
  <template>
    <u-container class="py-12">
      <u-row class="mb-16" align="center">
        <!-- TEXT -->
        <u-col cols="12" md="6" :order="textOrder">
          <h3 class="name">{{ name }}</h3>

          <div class="role">
            {{ role }}
            <u-icon :icon="icon" size="18" class="ml-1" color="primary" />
          </div>

          <p class="bio">
            {{ bio }}
          </p>
        </u-col>

        <!-- IMAGE -->
        <u-col cols="12" md="6" class="d-flex justify-center">
          <u-img :src="image" max-width="420" aspect-ratio="3/4" cover class="rounded-xl" />
        </u-col>
      </u-row>
    </u-container>
  </template>
</template>

<style scoped>
.name {
  font-weight: 600;
  font-size: 22px;
}

.role {
  display: flex;
  align-items: center;
  margin: 6px 0 12px;
  color: #6b7280;
  font-size: 14px;
}

.bio {
  color: #4b5563;
  font-size: 15px;
  line-height: 1.7;
}

@media (max-width: 960px) {
  .name {
    margin-top: 16px;
  }
}
</style>
