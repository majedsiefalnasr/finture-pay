<script>
import LoginRegisterLeftCard from '~/components/shared/LoginRegisterLeftCard.vue'
import x from '~/pages_content/registerContent.json'
import CheckExist from '~~/scripts/utilities/check_exist'

export default {
  components: {
    LoginRegisterLeftCard,
  },
  data() {
    return {
      email: '',
      account_type: 'individual',

      messageError: {
        status: false,
        msg: '',
      },
      loading: false,
      loginPageContent: {},
    }
  },
  watch: {
    '$store.state.Otp.OTP_OBJ'() {
      this.loading = false
      if (this.$store.state.Otp.OTP_OBJ.status === 'success') {
        localStorage.setItem('REGISTRATION_EMAIL', this.email)
        localStorage.setItem('ACCOUNT_TYPE', this.account_type)
        this.$router.push('/register/otp')
      }
    },
  },
  created() {
    if (import.meta.client) {
      this.loginPageContent = x
    }
  },
  methods: {
    async login() {
      this.loading = true
      if (this.email) {
        const checkDataTypeObj = new CheckExist({ apiUrl: useRuntimeConfig().public.API_URL })
        const check_data = await checkDataTypeObj.checkEmailOrPhoneExist(this.email)
        if (check_data.data.status === 'success') {
          this.messageError.status = false
          this.messageError.msg = ''
          this.$store.dispatch('sendOtp', this.email)
        } else if (check_data.data.status === 'invalid' && check_data.data.message === 'exist') {
          this.loading = false
          this.email = ''
          this.messageError.status = true
          this.messageError.msg = 'email already exist please try again with another email'
        } else {
          this.loading = false
          this.email = ''
          this.messageError.status = true
          this.messageError.msg = check_data.data.message
        }
      }
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
      <div class="row custom-row-style">
        <div col="12" md="12" class="back-home">
          <NuxtLink u-if="mdAndUp" to="/" class="back-link"> Back to Home → </NuxtLink>
        </div>

        <div cols="12" md="12" class="justfiy-center login" align="center">
          <div class="login-card">
            <u-row cols="12">
              <u-col cols="10">
                <u-progress-linear
                  :model-value="20"
                  color="#4B7EC3"
                  class="progress-custom-style"
                ></u-progress-linear>
              </u-col>
              <u-col cols="2" class="progress-status"><span>1/5</span> </u-col>
            </u-row>
            <h3 class="title mb-4" align="start">Let’s Get Started</h3>

            <p class="subtitle mb-3" align="start">Enter your email to begin your journey.</p>

            <!-- ACCOUNT TYPE -->
            <u-btn-toggle v-model="account_type" class="mb-5 account-toggle" mandatory divided>
              <u-btn value="individual">Individual</u-btn>
              <u-btn value="business">Business</u-btn>
            </u-btn-toggle>

            <u-alert
              v-if="messageError.status"
              type="error"
              :text="messageError.msg"
              :closable="false"
              variant="tonal"
              class="mb-4"
            />

            <!-- PHONE -->
            <div class="phone-row">
              <u-text-field
                v-model="email"
                variant="solo-filled"
                density="comfortable"
                placeholder="email@gmail.com"
                type="email"
                hide-details
              />
            </div>
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
              <span v-else class="ml-2">Send Verification Code</span>
            </u-btn>

            <p class="register">
              Already have an account?
              <NuxtLink to="/login" class="nuxt-link-style">Login</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </u-col>
  </u-row>
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
  min-width: 80% !important;
  max-width: 90% !important;
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

  .custom-row-style {
    width: 100%;
  }
}

@media (min-width: 500px) {
  .custom-row-style {
    padding: 50px;
    width: 75%;
  }
}

.progress-custom-style {
  margin-bottom: 50px;
}
.progress-status {
  margin-top: -10px;
  color: #0047ab;
}
.progress-status span {
  float: left;
}
</style>
