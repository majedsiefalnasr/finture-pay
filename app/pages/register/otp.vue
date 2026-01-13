<script>
import LoginRegisterLeftCard from '~/components/shared/LoginRegisterLeftCard.vue'
import Timer from '~/components/shared/Timer.vue'
import x from '~/pages_content/registerContent.json'
export default {
  components: {
    LoginRegisterLeftCard,
    Timer,
  },
  data() {
    return {
      email: '',
      otpNumber: '',
      messageError: {
        status: false,
        msg: '',
      },
      loading: false,
      registerPageContent: {},
      activeVerifyBtn: true,
      loadingResend: false,
    }
  },
  watch: {
    '$store.state.Otp.CHECK_OTP_OBJ'() {
      this.loading = false
      if (this.$store.state.Otp.CHECK_OTP_OBJ.status === 'success') {
        localStorage.setItem('OTP_VERIFY', true)
        this.messageError.status = false
        this.messageError.msg = null
        this.$router.push('/register/about_you')
      } else {
        this.otpNumber = ''
        this.messageError.status = true
        this.messageError.msg = 'invalid otp '
      }
    },
    '$store.state.Otp.OTP_OBJ'() {
      if (this.$store.state.Otp.OTP_OBJ.status === 'success') {
        this.activeVerifyBtn = true
        this.loadingResend = false
      } else {
        this.activeVerifyBtn = true
        this.loadingResend = false
        this.messageError.status = true
        this.messageError.msg = 'cannot process your request now please try again later'
      }
    },
  },
  created() {
    if (import.meta.client) {
      this.registerPageContent = x
      if (!localStorage.getItem('REGISTRATION_EMAIL')) {
        this.$router.push('/register')
      } else {
        this.email = localStorage.getItem('REGISTRATION_EMAIL')
      }
    }
  },
  methods: {
    onTimerFinished() {
      this.activeVerifyBtn = false
      // alert('finsihed')
    },
    async verifyOtp() {
      if (this.otpNumber) {
        this.loading = true
        this.$store.dispatch('checkOtp', { otp: this.otpNumber, mobile_or_email: this.email })
      }
    },

    async ResendOtp() {
      this.loadingResend = true
      this.$store.dispatch('sendOtp', this.email)
    },
  },
}
</script>

<template>
  <u-row no-gutters class="fill-height">
    <LoginRegisterLeftCard
      :title="registerPageContent.title"
      :description="registerPageContent.description"
      :have_list="registerPageContent.have_list"
      :vertical_menu_itmes="registerPageContent.vertical_menu_itmes"
      :vertical_menu_title="registerPageContent.vertical_menu_title"
      :horizental_menu_item="registerPageContent.horizental_menu_item"
      :horizental_menu_title="registerPageContent.horizental_menu_title"
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
                  :model-value="40"
                  color="#4B7EC3"
                  class="progress-custom-style"
                ></u-progress-linear>
              </u-col>
              <u-col cols="2" class="progress-status"><span>2/5</span> </u-col>
            </u-row>
            <h4 class="title mb-4" align="start">Verify Your email</h4>

            <p class="subtitle mb-3" align="start">
              We’ve sent a 6-digit code to your email. Please enter it below.
            </p>

            <u-alert
              v-if="messageError.status"
              type="error"
              :text="messageError.msg"
              :closable="false"
              variant="tonal"
              class="mb-4 text-start"
            />

            <u-otp-input v-model="otpNumber" autofocus width="auto" min-width="100%"></u-otp-input>

            <Timer :initial-seconds="120" @finished="onTimerFinished" @resend="ResendOtp" />
            <u-progress-circular
              v-if="loadingResend"
              color="primary"
              indeterminate
              class="mt-2"
            ></u-progress-circular>

            <u-btn
              v-if="activeVerifyBtn"
              color="primary"
              size="large"
              block
              class="mt-4 login-btn"
              :disabled="loading"
              @click="verifyOtp"
            >
              <u-progress-circular
                v-if="loading"
                color="white"
                size="28"
                indeterminate
              ></u-progress-circular>
              <span v-else class="ml-2">Verify</span>
            </u-btn>
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
  margin-top: 40px !important;
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
