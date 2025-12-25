<script>
import LoginRegisterLeftCard from '~/components/shared/LoginRegisterLeftCard.vue'
import Login from '~~/scripts/addons/login'

export default {
  components: {
    LoginRegisterLeftCard,
  },
  data() {
    return {
      loginDataObject: {
        emailOrRegistrationCode: '',
        password: '',
      },
      loading: false,
    }
  },
  methods: {
    async login() {
      const loginObj = new Login({ apiUrl: useRuntimeConfig().public.API_URL })
      await loginObj.loginWithEmailOrrRegCode(this.loginDataObject).then((RESPONSE) => {
        if (RESPONSE) {
          console.log(RESPONSE)
        } else {
          console.log(RESPONSE)
        }
      })
    },
  },
}
</script>

<template>
  <u-container fluid class="fill-height pa-0">
    <u-row no-gutters class="fill-height">
      <LoginRegisterLeftCard />

      <u-col cols="12" md="6" class="login-panel">
        <div class="row">
          <div col="12" md="12" class="back-home">
            <NuxtLink u-if="mdAndUp" to="/" class="back-link"> Back to Home → </NuxtLink>
          </div>

          <div cols="12" md="12" class="justfiy-center login" align="center">
            <div class="login-card">
              <h3 class="text-center title mb-4">Access Dashboard</h3>

              <p class="text-center subtitle mb-3">
                Securely log in to manage your wallet, track transactions, accept payments, and
                access all Finture services.
              </p>

              <!-- ACCOUNT TYPE -->
              <u-btn-toggle class="mb-5 account-toggle" mandatory divided>
                <u-btn value="individual">Individual</u-btn>
                <u-btn value="business">Business</u-btn>
              </u-btn-toggle>

              <!-- PHONE -->
              <div class="phone-row">
                <u-text-field
                  v-model="loginDataObject.emailOrRegistrationCode"
                  variant="solo-filled"
                  density="comfortable"
                  placeholder="email or registration code"
                  hide-details
                />
              </div>

              <!-- PASSWORD -->
              <u-text-field
                v-model="loginDataObject.password"
                variant="solo-filled"
                density="comfortable"
                type="password"
                placeholder="Password"
              />

              <!-- LOGIN BUTTON -->
              <u-btn @click="login" color="primary" size="large" block class="mt-4 login-btn">
                Login to Finture
              </u-btn>

              <p class="register">
                You don’t have an account?
                <NuxtLink to="/register" class="nuxt-link-style">Register Now!</NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </u-col>
    </u-row>
  </u-container>
</template>

<style scoped>
.login {
  margin-top: 100px;
}
.back-home {
  margin-top: -150px;
}

.back-link {
  color: #0047ab;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
}
.nuxt-link-style {
  color: #0047ab;
  text-decoration: none;
}
.login-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
}

.login-card {
  padding: 24px;
  width: 100%;
  max-width: 80%;
}

.title {
  color: #002f6c;
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
