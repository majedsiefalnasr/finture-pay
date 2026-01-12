<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  email?: string
  phone?: string
}
withDefaults(defineProps<Props>(), {
  title: 'Questions?',
  description:
    ' If you have questions about any of our agreements or policies, contact our legal team:',
  email: 'info@finturepay.com',
  phone: '0850 XXX XXX',
})
</script>

<template>
  <div class="contact">
    <u-row justify="center">
      <u-col cols="12" class="text-center content-title">
        <h3 class="">{{ title }}</h3>
        <p class="text-body-2 text-medium-emphasis">
          {{ description }}
        </p>
      </u-col>
    </u-row>

    <u-row justify="center" class="mt-8 email-phone-div" dense>
      <!-- Email Card -->
      <u-col cols="12" md="2" class="email-content">
        <u-card elevation="2" class="pa-6 text-center rounded-xl">
          <u-avatar size="56" class="mx-auto mb-4" color="blue-lighten-5">
            <u-icon color="primary" size="28" icon="line:inbox"></u-icon>
          </u-avatar>

          <h3 class="text-subtitle-1 font-weight-medium mb-1">Email</h3>

          <a href="mailto:info@finturepay.com" class="text-primary text-decoration-none">
            {{ email }}
          </a>
        </u-card>
      </u-col>

      <!-- Phone Card -->
      <u-col cols="12" md="2">
        <u-card elevation="2" class="pa-6 text-center rounded-xl">
          <u-avatar size="56" class="mx-auto mb-4" color="blue-lighten-5">
            <u-icon color="primary" size="28" icon="line:phone"></u-icon>
          </u-avatar>

          <h3 class="text-subtitle-1 font-weight-medium mb-1">Phone</h3>

          <span class="text-primary"> {{ phone }} </span>
        </u-card>
      </u-col>
    </u-row>
  </div>
</template>

<style scoped>
.contact {
  background: #f5f7f9;
  padding-bottom: 90px;
}

.content-title {
  margin-top: 70px !important;
}

.v-row--dense > .v-col,
.v-row--dense > [class*='v-col-'] {
  padding: 16px;
}

@media (max-width: 500px) {
  .v-row--dense > .v-col,
  .v-row--dense > [class*='v-col-'] {
    padding: 25px;
  }
}
</style>
