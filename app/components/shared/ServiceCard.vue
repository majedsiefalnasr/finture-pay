<script setup lang="ts">
interface Props {
  subtitle?: string
  title?: string
  description?: string
  icon?: string
  actionText?: string
  actionLink?: string
}

withDefaults(defineProps<Props>(), {
  subtitle: 'For Individuals',
  title: 'Send Money Instantly',
  description: 'Free transfers, multi-currency wallet, QR payments, and cashback rewards up to 5%.',
  icon: 'd3:wallet',
  actionText: 'Learn More',
  actionLink: '#',
})
</script>

<template>
  <u-card class="u-card d-flex flex-column justify-start align-start ga-6">
    <u-icon :icon="icon" size="90" />
    <div class="d-flex flex-column ga-4">
      <div class="d-flex flex-column ga-2">
        <p class="text-B20">{{ subtitle }}</p>
        <h4>{{ title }}</h4>
      </div>
      <p class="text-B20">{{ description }}</p>
    </div>
    <u-btn
      :href="actionLink"
      color="Blue"
      variant="text"
      append-icon="line:arrow-narrow-right"
      class="font-weight-bold"
    >
      {{ actionText }}
    </u-btn>
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
</style>
