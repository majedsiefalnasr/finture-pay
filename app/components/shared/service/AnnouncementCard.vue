<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  icon?: string
  actionText?: string
  actionLink?: string
  day?: number
  month?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Finture Launches Soft POS Solution',
  description:
    'We ,re excited to announce Soft POS—turn your smartphone into a contactless payment terminal with zero hardware cost. Perfect for mobile businesses and service providers.',
  icon: 'd3:wallet',
  actionText: 'Learn More',
  actionLink: '#',
  day: 16,
  month: 'AUG',
})
</script>

<template>
  <u-card class="pa-4 d-flex align-start" elevation="0" rounded="lg">
    <div class="date-box mr-5">
      <div class="day">{{ day }}</div>
      <div class="month">{{ month }}</div>
    </div>

    <div class="flex-grow-1">
      <div class="title">
        {{ title }}
      </div>
      <div class="subtitle">
        {{ description }}
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

.date-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #E5EAEE;
  width: 58px;
  height: 58px;
  text-align: center;
}

.day {
  color: #002F6C;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
}

.month {
  color: #002F6C;
  font-weight: 600;
  font-size: 12px;
}

.title {
  font-weight: 600;
  font-size: 16px;
}

.subtitle {
  margin-top: 2px;
  color: #6b7280;
  font-size: 14px;
}

@media (max-width: 500px) {
  .date-box {
    width: 250px !important;
  }
}
@media (min-width: 501px) and (max-width: 1280px){

  .date-box {
    width: 110px !important;
  }
}
</style>
