<script setup lang="ts">
interface FeeItem {
  description: string
  fee: string
}

interface Props {
  title: string
  icon: string
  fees: FeeItem[]
}

withDefaults(defineProps<Props>(), {
  title: 'Individual Account Fees',
  icon: 'line:user01',
  fees: () => [],
})
</script>

<template>
  <u-card class="fees-table" rounded="xl">
    <!-- Header -->
    <div class="d-flex align-center ga-4 px-7 py-6 bg-BL90">
      <div class="bg-DBlue d-flex align-center justify-center rounded-circle pa-2">
        <u-icon :icon="icon" size="24" />
      </div>
      <h3 class="text-DBlue text-h3">{{ title }}</h3>
    </div>

    <!-- Fees List -->
    <div class="fees-list d-flex flex-column px-7">
      <div
        v-for="(fee, index) in fees"
        :key="index"
        class="fee-item d-flex flex-column flex-md-row ga-4 py-4"
        :class="{ 'border-bottom': index < fees.length - 1 }"
      >
        <p style="max-width: 300px">
          {{ fee.description }}
        </p>
        <p class="text-Blue font-weight-semibold ms-0 ms-md-auto">
          {{ fee.fee }}
        </p>
      </div>
    </div>
  </u-card>
</template>

<style scoped>
.fees-table {
  box-shadow: 0px 4px 16px 0px rgba(97, 109, 132, 0.08);
}

.fee-item {
  font-size: 20px;
  line-height: 30px;
}

.fee-item.border-bottom {
  border-bottom: 1px solid rgb(var(--v-theme-DB80, 244, 244, 246));
}

.fee-item:last-child {
  border-bottom: none;
}

@media (max-width: 600px) {
  .fee-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
