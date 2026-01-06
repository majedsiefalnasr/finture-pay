<script setup lang="ts">
interface Props {
  title?: string
  icon?: string
  items?: Array
}

withDefaults(defineProps<Props>(), {
  title: 'For Individual Users',
  icon: 'd3:wallet',

  // email: 'destek@finturepay.com',
  // phone: '0850 XXX XX XX',
  // chat: 'Livechat',
})
</script>

<template>
  <u-card class="u-card d-flex flex-column justify-start align-start ga-6">
    <div class="d-flex flex-column ga-4">
      <div class="d-flex flex-column ga-2">
        <u-icon :icon="icon" size="90" />
        <h5 class="title">{{ title }}</h5>

        <u-list density="compact" class="bg-transparent">
          <u-list-item v-for="(rec, index) in items" :key="index">
            <template #prepend>
              <u-icon color="red" :icon="rec.icon"></u-icon>
            </template>

            <u-list-item-title class="item-title" algin="left"
              ><nuxt-link v-if="rec.is_link" to="#" class="text-primary">
                {{ rec.title }}
              </nuxt-link>
              <span v-else>
                {{ rec.title }}
              </span>
            </u-list-item-title>
            <span v-if="rec.description" class="item-description">{{ rec.description }}</span>
          </u-list-item>
        </u-list>
      </div>
    </div>
  </u-card>
</template>

<style scoped>
.u-card {
  box-shadow:
    0 55px 15px 0 rgba(196, 196, 196, 0),
    0 35px 14px 0 rgba(196, 196, 196, 0.01),
    0 20px 12px 0 rgba(196, 196, 196, 0.05),
    0 9px 9px 0 rgba(196, 196, 196, 0.09),
    0 2px 5px 0 rgba(196, 196, 196, 0.1);
  border-radius: 16px;
  padding: 30px 30px 40px 30px;
}

.item-title {
  color: black;
  font-weight: 500;
  text-align: left;
}

.item-description {
  float: left;
  font-size: 12px;
}
.title {
  text-align: left;
}
</style>
