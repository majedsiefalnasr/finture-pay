<script setup lang="ts">
import { useDisplay } from 'vuetify'
import LoginRegisterLeftCard from '~/components/shared/LoginRegisterLeftCard.vue';

const { mdAndUp } = useDisplay()
</script>

<template>
  <u-container fluid class="fill-height pa-0">
    <u-row no-gutters class="fill-height">

        <LoginRegisterLeftCard/>

      <u-col cols="12" md="6" class="login-panel">
        <div class="login-card">
          <!-- MOBILE HEADER -->
          <div u-if="!mdAndUp" class="mobile-header">
            <strong class="brand">finture</strong>
            <u-btn icon variant="text">
              <u-icon>mdi-close</u-icon>
            </u-btn>
          </div>

          <!-- DESKTOP BACK LINK -->
          <NuxtLink u-if="mdAndUp" to="/" class="back-link"> Back to Home → </NuxtLink>

          <h2 class="title">Access Dashboard</h2>

          <p class="subtitle">
            Securely log in to manage your wallet, track transactions, accept payments, and access
            all Finture services.
          </p>

          <!-- ACCOUNT TYPE -->
          <u-btn-toggle class="mb-4 account-toggle" mandatory divided>
            <u-btn value="individual">Individual</u-btn>
            <u-btn value="business">Business</u-btn>
          </u-btn-toggle>

          <!-- PHONE -->
          <div class="phone-row">
            <u-btn variant="outlined" class="country-btn">
              🇹🇷 +90
              <u-icon size="18">mdi-chevron-down</u-icon>
            </u-btn>

            <u-text-field
              variant="solo-filled"
              density="comfortable"
              placeholder="Phone number"
              hide-details
            />
          </div>

          <!-- PASSWORD -->
          <u-text-field
            variant="solo-filled"
            density="comfortable"
            type="password"
            placeholder="Password"
          />

          <!-- LOGIN BUTTON -->
          <u-btn color="primary" size="large" block class="mt-4 login-btn">
            Login to Finture
          </u-btn>

          <p class="register">
            You don’t have an account?
            <NuxtLink to="/register">Register Now!</NuxtLink>
          </p>
        </div>
      </u-col>
    </u-row>
  </u-container>
</template>

<style scoped>
/* LEFT PANEL */
.brand-panel {
  position: relative;
  align-items: center;
  background: linear-gradient(135deg, #0b4dba, #083a91);
  padding: 64px;
  color: white;
}

.brand-content {
  max-width: 420px;
}

.logo {
  margin-bottom: 64px;
  font-weight: 700;
}

.brand-panel h2 {
  margin-bottom: 16px;
  font-size: 40px;
  line-height: 1.2;
}

.description {
  opacity: 0.9;
  max-width: 360px;
}

.copyright {
  position: absolute;
  bottom: 32px;
  opacity: 0.7;
  font-size: 12px;
}




/* RIGHT PANEL */
.login-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
}

.login-card {
  padding: 24px;
  width: 100%;
  max-width: 420px;
}

.title {
  margin-bottom: 8px;
}

.subtitle {
  margin-bottom: 24px;
  color: #666;
  font-size: 14px;
}

.back-link {
  display: block;
  margin-bottom: 32px;
  font-size: 13px;
  text-align: right;
}

/* PHONE ROW */
.phone-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.country-btn {
  min-width: 90px;
}

/* BUTTON */
.login-btn {
  border-radius: 28px;
}

/* REGISTER */
.register {
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
}

/* MOBILE HEADER */
.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.brand {
  font-size: 18px;
}
</style>
