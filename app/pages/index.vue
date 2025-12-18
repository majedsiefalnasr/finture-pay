<script>
import AnnouncementCard from '~/components/shared/AnnouncementCard.vue'
import BlogFeature from '~/components/shared/BlogFeature.vue'
import BlogRecentPostsCard from '~/components/shared/BlogRecentPostsCard.vue'
import TeamCard from '~/components/shared/TeamCard.vue'
import CheckExist from '~~/scripts/utilities/check_exist'
export default {
  components: {
    AnnouncementCard,
    TeamCard,
    BlogFeature,
    BlogRecentPostsCard,
  },
  setup() {
    definePageMeta({
      layout: 'default', // Optional; uses default if omitted
    })
  },
  data() {
    return {
      emailOrPhone: '',
      otpCode: '',
      accountCreation: null,
    }
  },
  created() {
    this.$store.dispatch('GET_COUNTRY_DATA')
  },
  methods: {
    demo_subscription() {
      this.$store.dispatch('demoSubscription', {
        name: 'samir moatfa',
        email: 'samerfathey2002@gmail.com',
        password: 'Admin*99',
        business_name: 'company1',
        businessGetId: 'company1',
        vat_number: '',
        commercial_register: '',
        company_string_name: 'company1',
        contact: '1558414779',
        city: '',
        street: '',
        postcode: '',
        country_code: localStorage.getItem('COUNTRY_CODE'),
        created_from: 'site',
        product_id: 1,
        country_id: this.$store.state.Pricing.services[0]['country'],
        currency: this.$store.state.Pricing.services[0]['currency'],
        product_package_id: this.$store.state.Pricing.services[0]['id'],
        services_list: [
          {
            service_code: this.$store.state.Pricing.services[0]['service_number'],
            service_count: 2,
            service_hour: 2,
            service_name: this.$store.state.Pricing.services[0]['service_name'],
          },
        ],
      })
    },
    async check_account_creation() {
      const checkDataObj = new CheckExist({ apiUrl: useRuntimeConfig().public.API_URL })
      const checkAccount = await checkDataObj.checkAcountCreation(
        localStorage.getItem('TEMPORARY_TOKEN')
      )
      this.accountCreation = checkAccount.data
    },

    async check_email_or_phone_exist() {
      const checkDataTypeObj = new CheckExist({ apiUrl: useRuntimeConfig().public.API_URL })
      const check_data = await checkDataTypeObj.checkEmailOrPhoneExist(this.emailOrPhone)
      console.log(check_data)
    },
    sendOtp() {
      this.$store.dispatch('sendOtp', this.emailOrPhone)
    },
    checkOtpVerify() {
      this.$store.dispatch('checkOtp', { otp: this.otpCode, mobile_or_email: this.emailOrPhone })
    },
    get_prices() {
      this.$store.dispatch('GET_PRODUCT_PRICE')
      this.$store.dispatch('GET_ACTIVE_SERVIVES_PRICES')
    },

    checkout_amount() {
      const service = {
        duration: 'Annually',
        package_name: 'Finture',
        coupon: '',
        services: [
          {
            service_code: 1,
            service_count: 1,
            service_hour: 1,
            service_name: 'pos egypt',
            service_currency: 'EGP',
          },
        ],
      }

      this.$store.dispatch('GET_CHECKOUT_PRICE_WITH_SERVICES_OBJECT', service)
    },
  },
}
</script>

<template>
  <u-container >
    <BlogRecentPostsCard/>
    <hr/>
    <BlogFeature />
    <hr />
    <TeamCard />
    <hr />
    <AnnouncementCard />
    <hr />
    <h1>Home Page</h1>
    <!-- Page-specific content -->

    <u-text-field v-model="emailOrPhone" label="email or phone"></u-text-field>
    <u-text-field v-model="otpCode" label="insert otp"></u-text-field>

    <u-btn
      text="check email-phone exist"
      color="success"
      @click="check_email_or_phone_exist"
    ></u-btn>
    <u-btn text="send otp" color="danger" @click="sendOtp"></u-btn>
    <u-btn text="check otp" color="red" @click="checkOtpVerify"></u-btn>

    <u-btn color="primary" text="Serice price" @click="get_prices"></u-btn>

    <u-btn color="primary" text="checkout amount" @click="checkout_amount"></u-btn>

    <hr />
    <u-btn
      v-if="$store.state.Pricing.services"
      color="primary"
      text="Demo Subscription"
      @click="demo_subscription"
    ></u-btn>

    <u-btn
      v-if="$store.state.Pricing.services"
      color="primary"
      text="check account is created"
      @click="check_account_creation"
    ></u-btn>

    <hr />
    price: {{ $store.state.Pricing.monthly_price }}
    <hr />
    service: {{ $store.state.Pricing.services }}
    <hr />
    checkout amount: {{ $store.state.Pricing.price }}

    account creation status :{{ accountCreation }}
  </u-container>
</template>
