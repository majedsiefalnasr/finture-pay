<script>
export default {
  name: 'SubmissionSuccess',
  data() {
    return {
      REGISTRATION_EMAIL: '',
      REG_CODE: '',
      NAME: '',
    }
  },

  created() {
    if (import.meta.client) {
      const REGISTRATION_EMAIL = localStorage.getItem('EMAIL')
      const REG_CODE = localStorage.getItem('REG_CODE')
      const NAME = localStorage.getItem('NAME')

      if (REGISTRATION_EMAIL && REG_CODE && NAME) {
        this.REGISTRATION_EMAIL = REGISTRATION_EMAIL
        this.REG_CODE = REG_CODE
        this.NAME = NAME
      } else {
        this.$router.push('/register')
      }
    }
  },
}
</script>

<template>
  <u-container fluid class="success-wrapper">
    <u-row align="center" justify="center" class="fill-height text-center">
      <u-col cols="12" sm="8" md="6" class="demo-success">
        <!-- Success Icon -->
        <u-avatar size="96" class="mb-6 success-icon">
          <u-icon size="56" color="primary" :icon="'line:check'"> </u-icon>
        </u-avatar>

        <!-- Title -->
        <h1 class="title mb-4">
          Submission<br />
          Successful
        </h1>

        <!-- Description -->
        <p class="subtitle mb-8">
          Your company data has been saved. We'll notify you once the verification is complete.
        </p>

        <p algin="start">Name: {{ NAME }} </p>
        <p algin="start">Email: {{ REGISTRATION_EMAIL }}</p>
        <p  algin="start">Registration code: {{ REG_CODE }}</p>


        <!-- Button -->
        <u-btn color="white" size="large" class="home-btn" to="/"> Go to Homepage </u-btn>
      </u-col>
    </u-row>
  </u-container>
</template>

<style scoped>
.success-wrapper {
  background: #0b4dbb;
  min-height: 100vh;
  color: #ffffff;
}

.success-icon {
  background: #ffffff;
}

.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
}

.subtitle {
  margin: 0 auto;
  max-width: 420px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
}

.home-btn {
  border-radius: 32px;
  padding: 0 36px;
  font-weight: 600;
  text-transform: none;
}
.demo-success {
  margin-top: 200px !important;
}
</style>
