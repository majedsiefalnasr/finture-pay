<script>
import LoginRegisterLeftCard from '~/components/shared/LoginRegisterLeftCard.vue'
import x from '~/pages_content/registerContent.json'

export default {
  components: {
    LoginRegisterLeftCard,
  },
  data() {
    return {
      password: '',
      showPassword: false,
      confirmPassword: '',
      showConfirmPassword: false,
      email: '',
      name: '',
      surname: '',
      acceptAgreement: false,
      acceptKvkk: false,
      acceptMarketing: false,
      messageError: {
        status: false,
        msg: '',
      },
      loading: false,
      loginPageContent: {},
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 6 || 'Password must be at least 6 characters',
      ],
    }
  },
  watch: {
    '$store.state.Subscriptions.DEMO_SUB_OBJ'() {
      this.loading = false
      if (this.$store.state.Subscriptions.DEMO_SUB_OBJ.status === 'success') {
        localStorage.setItem('REGISTRATION_EMAIL', '')
        localStorage.setItem('OTP_VERIFY', '')
        localStorage.setItem('FIRST_NAME', '')
        localStorage.setItem('LAST_NAME', '')
        this.$router.push('/register/success')
      }
    },
  },
  created() {
    if (import.meta.client) {
      this.loginPageContent = x
      if (
        localStorage.getItem('REGISTRATION_EMAIL') &&
        localStorage.getItem('OTP_VERIFY') &&
        localStorage.getItem('FIRST_NAME') &&
        localStorage.getItem('LAST_NAME')
      ) {
        this.email = localStorage.getItem('REGISTRATION_EMAIL')
      } else {
        this.$router.push('/register')
      }
    }
  },
  methods: {
    checkPasswordMatched() {
      if (this.password === this.confirmPassword) {
        return true
      } else {
        return false
      }
    },
    FinishRegistration() {
      this.loading = true
      const first_name = localStorage.getItem('FIRST_NAME')
      const last_name = localStorage.getItem('LAST_NAME')
      const passwordMatched = this.checkPasswordMatched()
      if (passwordMatched) {
        this.messageError.status = false
        this.messageError.msg = ''
        if (this.password && this.confirmPassword && first_name && last_name) {


          this.$store.dispatch('demoSubscription', {
            name: first_name + ' ' + last_name,
            email: this.email,
            password: this.password,
            business_name: 'Finture',
            businessGetId: 'Finture',
            vat_number: '',
            commercial_register: '',
            company_string_name: 'Finture',
            contact: '',
            city: '',
            street: '',
            postcode: '',
            country_code: localStorage.getItem('COUNTRY_CODE'),
            created_from: 'site',
            product_id: 1,
            country_id: localStorage.getItem('COUNTRY_NUMBER'),
            currency: localStorage.getItem('CURRENCY'),
            product_package_id: 4,
            services_list: [
              {
                service_code: 4,
                service_count: 2,
                service_hour: 2,
                service_name: 'pos',
              },
            ],
          })
        }
      } else {
        this.messageError.status = true
        this.messageError.msg = 'password & confirm password not matched'
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
                  :model-value="80"
                  color="#4B7EC3"
                  class="progress-custom-style"
                ></u-progress-linear>
              </u-col>
              <u-col cols="2" class="progress-status"><span>4/5</span> </u-col>
            </u-row>
            <h3 class="title mb-4" align="start">Set Your Password</h3>

            <p class="subtitle mb-3" align="start">
              Create a 6-digit password to secure your account.
            </p>

            <u-alert
              v-if="messageError.status"
              type="error"
              :text="messageError.msg"
              :closable="false"
              variant="tonal"
              class="mb-4"
            />

            <u-text-field
              v-model="password"
              label="Password"
              density="comfortable"
              variant="solo-filled"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              :append-inner-icon="showPassword ? 'line:eye' : 'line:eyeOff'"
              @click:append-inner="showPassword = !showPassword"
            />

            <!-- Confirm Password -->
            <u-text-field
              v-model="confirmPassword"
              :rules="passwordRules"
              label="Confirm Password"
              density="comfortable"
              variant="solo-filled"
              :type="showConfirmPassword ? 'text' : 'password'"
              :append-inner-icon="showConfirmPassword ? 'line:eye' : 'line:eyeOff'"
              @click:append-inner="showConfirmPassword = !showConfirmPassword"
            />

            <div class="text-left text-success mb-4">
              <p>. It consists of exactly 6 numbers (only digits: 0–9)</p>
              <p>. Do not use repeating digits</p>
              <p>. Do not reuse your old passwords</p>
            </div>
            <u-btn
              color="primary"
              size="large"
              block
              class="mt-5 login-btn"
              :disabled="loading"
              @click="FinishRegistration"
            >
              <u-progress-circular
                v-if="loading"
                color="white"
                size="28"
                indeterminate
              ></u-progress-circular>
              <span v-else class="ml-2">Finish Registration</span>
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

.checkbox-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 520px;
}

.link {
  color: #0b4dba;
  font-weight: 600;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.muted {
  color: #6b7280;
}

.password-rules {
  margin-top: 8px;
  padding-left: 18px;
  color: #1aa64a;
  font-size: 14px;
}

.password-rules li {
  float: inline-start;
  margin-bottom: 4px;
}
</style>
