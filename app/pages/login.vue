<script>
import LoginRegisterLeftCard from '~/components/shared/LoginRegisterLeftCard.vue'
import x from '~/pages_content/loginContent.json'
import Login from '~~/scripts/addons/login'

export default {
  components: {
    LoginRegisterLeftCard,
  },
  data() {
    return {
      account_type: 'individual',
      loginDataObject: {
        email: '',
        password: '',
      },
      messageError: {
        status: false,
        msg: '',
      },
      loading: false,
      loginPageContent: {},
    }
  },
  created() {
    if (import.meta.client) {
      this.loginPageContent = x
    }
  },
  methods: {
    async login() {
      this.loading = true
      const loginObj = new Login({ apiUrl: useRuntimeConfig().public.API_URL })
      await loginObj.loginWithEmailOrrRegCode(this.loginDataObject).then((RESPONSE) => {
        if (RESPONSE) {
          this.loading = false
          const responseDaata = RESPONSE.data
          if (responseDaata['status'] !== 'success') {
            this.messageError.status = true
            this.messageError.msg = responseDaata.msg
          } else {
            this.messageError.status = false
            this.messageError.msg = null
            localStorage.setItem('ACT', responseDaata.access_token)
          }
        } else {
          this.loading = false
          this.messageError.status = true
          this.messageError.msg = 'cannot process your request now please try again later'
        }
      })
    },
  },
}
</script>

<template>
  <u-row no-gutters class="fill-height">
    <LoginRegisterLeftCard
      :title="loginPageContent.title"
      :description="loginPageContent.description"
      :have_list="loginPageContent.have_list"
      :vertical_menu_itmes="loginPageContent.vertical_menu_itmes"
      :vertical_menu_title="loginPageContent.vertical_menu_title"
      :horizental_menu_item="loginPageContent.horizental_menu_item"
      :horizental_menu_title="loginPageContent.horizental_menu_title"
    />

    <u-col cols="12" md="6" class="login-panel">
      <u-container class="h-100">
        <div class="d-flex flex-column ga-6 h-100">
          <div class="back-home">
            <NuxtLink u-if="mdAndUp" to="/" class="back-link"> Back to Home → </NuxtLink>
          </div>

          <div class="ma-auto pb-16" align="center">
            <div class="login-card">
              <h3 class="text-center title mb-4">Access Dashboard</h3>

              <p class="text-center subtitle mb-3">
                Securely log in to manage your wallet, track transactions, accept payments, and
                access all Finture services.
              </p>

              <!-- ACCOUNT TYPE -->
              <u-btn-toggle v-model="account_type" class="mb-5 account-toggle" border mandatory>
                <u-btn value="individual">Individual</u-btn>
                <u-btn value="business">Business</u-btn>
              </u-btn-toggle>

              <u-alert
                v-if="messageError.status"
                type="error"
                :text="messageError.msg"
                closable
                variant="tonal"
                class="mb-4 text-start"
              />

              <!-- PHONE -->
              <div class="phone-row">
                <u-text-field
                  v-model="loginDataObject.email"
                  variant="solo-filled"
                  density="comfortable"
                  placeholder="Email or registration code"
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
              <u-btn
                color="primary"
                size="large"
                block
                class="mt-4 login-btn"
                :disabled="loading"
                @click="login"
              >
                <u-progress-circular
                  v-if="loading"
                  color="white"
                  size="28"
                  indeterminate
                ></u-progress-circular>
                <span v-else class="ml-2">Login to Finture</span>
              </u-btn>

              <p class="register">
                You don’t have an account?
                <NuxtLink to="/register" class="nuxt-link-style">Register Now!</NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </u-container>
    </u-col>
  </u-row>
</template>

<style scoped>
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

@media (max-width: 500px) {
  .title {
    font-size: 28px !important;
  }
}

.account-toggle .v-btn--variant-elevated {
  background: unset;
}

.account-toggle {
  border-radius: 8px;
  background: var(--Neutral-B70, #e8eaed);
  padding: 2px;
}

.account-toggle .v-btn--active {
  box-shadow:
    0 3px 8px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px 0 rgba(0, 0, 0, 0.04);
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  background-color: #fff;
}

.account-toggle .v-btn--active > :deep(.v-btn__overlay) {
  opacity: 0 !important;
}
</style>
