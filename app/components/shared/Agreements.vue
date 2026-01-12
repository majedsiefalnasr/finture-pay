<script setup lang="ts">
interface Props {
  date?: string
  title?: string
  description?: string
  icon?: string
  color?: string
  actionText?: string
  actionLink?: string
}

withDefaults(defineProps<Props>(), {
  date: 'UPDATED: OCT 2025',
  title: 'Send Money Instantly',
  description: 'Free transfers, multi-currency wallet, QR payments, and cashback rewards up to 5%.',
  icon: '',
  color: '',
  actionText: 'Learn More',
  actionLink: '#',
})
</script>

<template>
  <u-card class="u-card d-flex flex-column justify-start align-start ga-6">
    <u-row v-if="icon && date" cols="12" md="12" class="row-style">
      <u-col cols="12" md="12">
        <div class="status-badge">
          <u-icon
            size="50"
            :color="color"
            :icon="icon"
            :class="{ 'primary-style': color === 'primary', 'red-style': color === 'red' }"
          ></u-icon>
        </div>
        <p class="date-update">{{ date }}</p>
      </u-col>
      <!-- <u-col cols="12" md="6">
        <p class="date-update">{{ date }}</p>
      </u-col> -->
    </u-row>
    <div class="d-flex flex-column ga-4 custom-content-style">
      <div class="d-flex flex-column ga-2">
        <h5>{{ title }}</h5>
      </div>
      <p class="text-B20">{{ description }}</p>
    </div>

    <u-row cols="12" md="12" class="download">
      <u-col cols="12" md="12" class="content-download">
        <u-btn
          :href="actionLink"
          color="Blue"
          variant="text"
          append-icon="line:arrow-narrow-right"
          class="font-weight-bold"
        >
          {{ actionText }}
        </u-btn>
        <p v-if="icon" class="icon-download">
          <u-icon size="22" icon="line:download02"></u-icon>
          PDF
        </p>
      </u-col>
    </u-row>
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
  border: 1px solid #e8eaed;
  border-radius: 16px;
  padding: 30px 30px 40px 30px;
}

.row-style {
  width: 100%;
}

.date-update {
  float: inline-end;
  margin-top: -30px;
  color: #99a1af;
  font-size: 12px;
}

.terms-icon {
  top: -20px;
  width: 40px;
  height: 40px;
  font-size: 40px;
}

.primary-style {
  border-radius: 10px;
  background: #eff6ff;
  padding: 7px;
}

.red-style {
  border-radius: 10px;
  background: #fef2f2;
  padding: 7px;
}

.download {
  justify-content: center;
  border-top: 1px solid #f3f4f6;
  width: 100%;
}

.icon-download {
  float: inline-end;
  cursor: pointer;
  margin-top: 10px;
  color: #777e92;
  font-size: 12px;
}
.custom-content-style {
  min-height: 170px !important;
}
.content-download {
  margin-top: 20px;
}

@media (max-width: 500px) {
  .date-update {
    margin-top: -30px;
  }
}
</style>
