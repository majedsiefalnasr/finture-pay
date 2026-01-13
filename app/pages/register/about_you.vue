<script>
import LoginRegisterLeftCard from '~/components/shared/LoginRegisterLeftCard.vue'
import x from '~/pages_content/registerContent.json'

export default {
  components: {
    LoginRegisterLeftCard,
  },
  data() {
    return {
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
    }
  },
  watch: {
    '$store.state.Otp.OTP_OBJ'() {
      this.loading = false
      if (this.$store.state.Otp.OTP_OBJ.status === 'success') {
        localStorage.setItem('REGISTRATION_EMAIL', this.email)
        this.$router.push('/register/otp')
      }
    },
  },
  created() {
    if (import.meta.client) {
      this.loginPageContent = x
      if (localStorage.getItem('REGISTRATION_EMAIL') && localStorage.getItem('OTP_VERIFY')) {
        this.email = localStorage.getItem('REGISTRATION_EMAIL')
      } else {
        this.$router.push('/register')
      }
    }
  },
  methods: {
    ConfirmAddName() {
      if (this.name && this.surname) {
        localStorage.setItem('FIRST_NAME', this.name)
        localStorage.setItem('LAST_NAME', this.surname)
        this.$router.push('/register/password')
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
                  :model-value="60"
                  color="#4B7EC3"
                  class="progress-custom-style"
                ></u-progress-linear>
              </u-col>
              <u-col cols="2" class="progress-status"><span>3/5</span> </u-col>
            </u-row>
            <h3 class="title mb-4" align="start">Tell Us About You</h3>

            <p class="subtitle mb-3" align="start">
              Please enter your details and review the agreements below to continue.
            </p>

            <u-alert
              v-if="messageError.status"
              type="error"
              :text="messageError.msg"
              :closable="false"
              variant="tonal"
              class="mb-4 text-start"
            />

            <u-row cols="12" class="mb-3">
              <u-col cols="6">
                <u-text-field
                  v-model="name"
                  variant="solo-filled"
                  density="comfortable"
                  placeholder="Name"
                  hide-details
                  :rules="[required]"
                />
              </u-col>
              <u-col cols="6">
                <u-text-field
                  v-model="surname"
                  variant="solo-filled"
                  density="comfortable"
                  placeholder="Surname"
                  hide-details
                  :rules="[required]"
                />
              </u-col>
            </u-row>

            <div class="phone-row">
              <u-text-field
                v-model="email"
                variant="solo-filled"
                density="comfortable"
                placeholder="email@gmail.com"
                type="email"
                hide-details
                disabled
              />
            </div>

            <div class="checkbox-wrapper text-start">
              <!-- User Agreement -->
              <u-checkbox
                v-model="acceptAgreement"
                color="primary"
                density="comfortable"
                hide-details
              >
                <template #label>
                  <u-dialog max-width="800">
                    <template #activator="{ props: activatorProps }">
                      <span>
                        I have read, understood, and accept the
                        <NuxtLink v-bind="activatorProps" class="link"> User Agreement</NuxtLink>.
                      </span>
                    </template>
                    <template #default="{ isActive }">
                      <u-card>
                        <u-card-text class="text-h2 pa-12">
                          1. Acceptance of Terms By using our Services, you confirm that you have
                          read, understood, and agreed to this Agreement and our Privacy Policy. If
                          you do not agree, please do not use the Services. 2. Eligibility You must
                          be at least 18 years old or have reached the legal age of majority in your
                          jurisdiction to use the Services. By using the Services, you represent
                          that you meet this requirement. 3. User Responsibilities You agree to
                          provide accurate and complete information during registration and to keep
                          your account information updated. You are responsible for maintaining the
                          confidentiality of your account credentials. You will not use the Services
                          for unlawful or prohibited activities. 4. Intellectual Property All
                          content, trademarks, and software associated with the Services are the
                          property of finture or its licensors
                        </u-card-text>
                        <u-card-actions class="justify-end">
                          <u-btn text="Close" @click="isActive.value = false" />
                        </u-card-actions>
                      </u-card>
                    </template>
                  </u-dialog>
                </template>
              </u-checkbox>

              <u-checkbox v-model="acceptKvkk" color="primary" density="comfortable" hide-details>
                <template #label>
                  <span>
                    I consent to the processing of my personal data within the scope of the
                    <NuxtLink to="/kvkk" class="link">KVKK Information Text</NuxtLink>.
                  </span>
                </template>
              </u-checkbox>

              <!-- Marketing (optional) -->
              <u-checkbox
                v-model="acceptMarketing"
                color="primary"
                density="comfortable"
                hide-details
              >
                <template #label>
                  <span class="muted">
                    I agree to receive promotional offers, announcements, and informational messages
                    via SMS, e-mail, or phone.
                  </span>
                </template>
              </u-checkbox>
            </div>

            <u-btn
              color="primary"
              size="large"
              block
              class="mt-4 login-btn"
              :disabled="loading"
              @click="ConfirmAddName"
            >
              <u-progress-circular
                v-if="loading"
                color="white"
                size="28"
                indeterminate
              ></u-progress-circular>
              <span v-else class="ml-2">Next step</span>
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
</style>
