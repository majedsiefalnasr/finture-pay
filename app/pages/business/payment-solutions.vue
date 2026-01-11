<script setup lang="ts">
import floatingShape from '/assets/images/floating-shape.svg'

import FeatureCard from '~/components/shared/FeatureCard.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import SolutionCard from '~/components/shared/SolutionCard.vue'
import HowItWorks from '~/components/shared/howItWorks.vue'

import { onMounted, ref, watch } from 'vue'

const masterTab = ref('android-physical-pos')

const virtualPOSTab = ref('payment-methods')

// Check for initial hash on page load
onMounted(() => {
  const hash = window.location.hash.replace('#', '')
  const validTabs = ['android-physical-pos', 'soft-pos', 'virtual-pos', 'payment-by-link']
  if (validTabs.includes(hash)) {
    masterTab.value = hash
  }
})

watch(masterTab, () => {
  nextTick(() => {
    // Update URL hash for deep linking
    window.location.hash = masterTab.value
  })
})

const androidPhysicalPOSKeyFeaturesList = [
  {
    title: 'Universal Card Acceptance',
    subtitle:
      'Accept Visa, Mastercard, American Express, and Troy cards with industry-leading approval rates.',
    icon: 'features:card',
  },
  {
    title: 'Contactless Payments',
    subtitle:
      'NFC technology enables tap-to-pay transactions with cards, phones (Apple Pay, Google Pay, Samsung Pay), and wearables.',
    icon: 'features:nfc',
  },
  {
    title: 'EMV Chip & PIN',
    subtitle:
      'Full compliance with EMV chip card standards for maximum security andfraud protection.',
    icon: 'features:security',
  },
]

const keyAdvantagesList = [
  {
    title: 'Zero Hardware Cost',
    subtitle:
      'No need to purchase, maintain, or carry separate POS terminals. Your existing smartphone is all you need.',
    icon: 'features:nocost',
  },
  {
    title: 'Instant Setup',
    subtitle:
      'Download the app, complete quick registration, and start accepting payments within 30 minutes.',
    icon: 'features:lightningFast',
  },
  {
    title: 'Maximum Portability',
    subtitle:
      'Accept payments anywhere with your phone perfect for mobile businesses and on-the-go transactions.',
    icon: 'features:portability',
  },
  {
    title: 'Bank-Grade Security',
    subtitle:
      'PCI DSS certified software ensures every transaction meets the highest security standards. End-to-end encryption protects payment data.',
    icon: 'features:banksecurity',
  },
  {
    title: 'Real-Time Settlement',
    subtitle:
      'Funds settle to your account within 1 business day (T+1) or opt for instant settlement (small fee applies).',
    icon: 'features:settlement',
  },
]

const softPosPerfectFor = [
  {
    title: 'Delivery drivers and field service professionals',
    icon: 'hugeicons:truck',
  },
  {
    title: 'Taxi drivers and transportation services',
    icon: 'hugeicons:car-02',
  },
  {
    title: 'Market vendors and popup shops',
    icon: 'hugeicons:store-01',
  },
  {
    title: 'Small businesses wanting ultra-portable payment solutions',
    icon: 'hugeicons:briefcase-09',
  },
  {
    title: 'Home service providers (cleaners, tutors, repair technicians)',
    icon: 'hugeicons:tools',
  },
]

const receiptOptions: string[] = [
  'SMS receipt delivery',
  'Email receipt deliveryference)',
  'Print receipts via Bluetooth thermal printer',
  'No receipt (customer preference)',
]

const virtualPOSKeyFeaturesList = [
  {
    title: 'Smart Routing',
    subtitle:
      'Intelligent transaction routing across multiple acquiring banks maximizes approval rates and minimizes payment failures.',
    icon: 'features:routing',
  },
  {
    title: 'Subscription Billing',
    subtitle:
      'Automated recurring billing for subscription businesses. Flexible billing cycles (weekly, monthly, annual) with automatic retry logic for failed payments.',
    icon: 'features:billing',
  },
  {
    title: 'Multi-Currency Support',
    subtitle:
      'Accept payments in TRY, USD, EUR, GBP, and more. Automatic currency conversion with transparent rates.',
    icon: 'features:currency',
  },
]

const reportingAnalyticsOptions: string[] = [
  'Total sales, refunds, and chargebacks',
  'Conversion rates and abandonment analysis',
  'Payment method performance',
  'Geographic distribution of customers',
  'Peak transaction times',
]

const settlementOptions: string[] = [
  'T+1 standard settlement (funds in account next business day)',
  'Optional same-day settlement (small fee applies)',
  'Automatic reconciliation with detailed transaction reports',
]

const virtualPOSPaymentMethodSupport = [
  {
    title: 'Credit & Debit Cards',
    description:
      'Visa, Mastercard, American Express, Troy—with installment options up to 12 months.',
    icon: 'hugeicons:credit-card-accept',
  },
  {
    title: '3D Secure Authentication',
    description: 'Advanced fraud protection with 3D Secure 2.0 technology.',
    icon: 'hugeicons:shield-02',
  },
  {
    title: 'Smart Fraud Detection',
    description:
      'AI-powered risk engine analyzes every transaction in real-time, flagging suspicious activity.',
    icon: 'hugeicons:user-check-01',
  },
]

const virtualPOSIntegrationOptions = [
  {
    title: 'Credit & Debit Cards',
    description:
      'Visa, Mastercard, American Express, Troy—with installment options up to 12 months.',
    icon: 'hugeicons:credit-card-accept',
  },
  {
    title: '3D Secure Authentication',
    description: 'Advanced fraud protection with 3D Secure 2.0 technology.',
    icon: 'hugeicons:shield-02',
  },
  {
    title: 'Smart Fraud Detection',
    description:
      'AI-powered risk engine analyzes every transaction in real-time, flagging suspicious activity.',
    icon: 'hugeicons:user-check-01',
  },
]

const paymentByLinkPerfectFor = [
  {
    title: 'Service professionals (coaches, consultants, designers)',
    icon: 'hugeicons:briefcase-09',
  },
  {
    title: 'Social media businesses',
    icon: 'hugeicons:favourite',
  },
  {
    title: 'Invoice payments and account receivables',
    icon: 'hugeicons:file-02',
  },
  {
    title: 'Appointment deposits',
    icon: 'hugeicons:calendar-01',
  },
  {
    title: 'Event ticket sales',
    icon: 'hugeicons:ticket-01',
  },
  {
    title: 'Donation collection',
    icon: 'hugeicons:save-money-dollar',
  },
  {
    title: 'Remote sales and phone orders',
    icon: 'hugeicons:call-add',
  },
]

const howItWorksList = [
  {
    label: 'Create Payment Link',
    description:
      'Log into Finture dashboard or mobile app. Enter amount, description, and customer details (optional).',
    image: '/assets/images/how-it-works/01.png',
  },
  {
    label: 'Share with Customer',
    description:
      'Send link via SMS, email, WhatsApp, social media, or generate QR code. Links work on any device—no app required.',
    image: '/assets/images/how-it-works/01.png',
  },
  {
    label: 'Customer Pays Securely',
    description:
      'Customer clicks link, reviews details, and pays with credit/debit card or digital wallet. 3D Secure authentication ensures security.',
    image: '/assets/images/how-it-works/01.png',
  },
  {
    label: 'Receive Instant Notification',
    description:
      'Get real-time notification when payment completed. Funds settle to your account within 1 business day.',
    image: '/assets/images/how-it-works/01.png',
  },
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Accept Payments Anywhere, Anytime Across Every Channel"
        description="Finture's comprehensive payment acceptance ecosystem ensures you never miss a sale. Whether customers shop online, in-store, or through social media, Finture has the solution."
        category="Payment Solutions"
      />
    </section>

    <section class="solutions-content">
      <u-tabs v-model="masterTab" color="primary" grow center-active>
        <u-tab value="android-physical-pos">Android Physical POS</u-tab>
        <u-tab value="soft-pos">Soft POS</u-tab>
        <u-tab value="virtual-pos">Virtual POS</u-tab>
        <u-tab value="payment-by-link">Payment by Link</u-tab>
      </u-tabs>

      <u-divider></u-divider>

      <u-tabs-window v-model="masterTab">
        <u-tabs-window-item id="android-physical-pos" value="android-physical-pos">
          <u-container>
            <div class="d-flex flex-column ga-16">
              <SolutionCard
                variant="long"
                title=""
                subtitle="Transform Your Smartphone into a Smart POS Terminal"
                description="Turn any Android device into a full-featured point-of-sale system. Accept all major credit and debit cards, process contactless payments, and manage sale no expensive dedicated hardware required."
                image="/assets/images/instant-money-transfers-example.png"
                image-ratio="1/2"
              />

              <div class="d-flex flex-column ga-4">
                <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
                  <h2>Key Features</h2>
                  <p class="text-h3">
                    Control every lira in one place with powerful tools for access, budgets,
                    payments, and real-time balances.
                  </p>
                </div>

                <u-row class="justify-center">
                  <u-col
                    v-for="(f, index) in androidPhysicalPOSKeyFeaturesList"
                    :key="index"
                    cols="12"
                    md="4"
                    class="my-12"
                  >
                    <FeatureCard :title="f.title" :subtitle="f.subtitle" :icon="f.icon" />
                  </u-col>
                </u-row>
              </div>

              <u-row>
                <u-col cols="12" md="6">
                  <div
                    class="d-flex flex-column ga-6 pa-10 rounded-xl border border-solid border-grey-lighten-2 bg-grey-lighten-5 h-100"
                  >
                    <h5 class="font-weight-semibold">Receipt Options</h5>

                    <u-list bg-color="transparent">
                      <u-list-item
                        v-for="(item, i) in receiptOptions"
                        :key="i"
                        class="list-item px-0"
                      >
                        <template #prepend>
                          <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="32" />
                        </template>

                        <u-list-item-title class="text-h5 font-weight-medium feature-item-title">{{
                          item
                        }}</u-list-item-title>
                      </u-list-item>
                    </u-list>
                  </div>
                </u-col>

                <u-col cols="12" md="6">
                  <div
                    class="card-fancy-bg d-flex flex-column ga-6 pa-10 rounded-xl border border-solid border-grey-lighten-2 bg-BL20 h-100"
                  >
                    <h5 class="font-weight-semibold">Offline Mode</h5>

                    <p class="text-h4">
                      Continue accepting payments even without internet connection. Transactions
                      automatically sync when connection restored.
                    </p>

                    <u-img :src="floatingShape" class="floating" />
                  </div>
                </u-col>
              </u-row>

              <div class="pricing px-16 py-15 text-center">
                <h4>Pricing</h4>

                <div class="d-flex flex-column flex-md-row ga-10 mt-12">
                  <div
                    class="flex-grow-1 d-flex flex-column ga-2 justify-center align-center px-10 py-12 bg-DB90 rounded-lg"
                  >
                    <p class="label-1">Device</p>
                    <h3 class="text-DBlue">Starting from ₺3499</h3>
                    <p class="label-1">(Android terminal with card reader)</p>
                  </div>

                  <div
                    class="flex-grow-1 d-flex flex-column ga-2 justify-center align-center px-10 py-12 bg-DB90 rounded-lg"
                  >
                    <p class="label-1">Transaction Fees</p>
                    <h3 class="text-DBlue">Starting from 1.99%</h3>
                    <p class="label-1">(based on volume and business type)</p>
                  </div>
                </div>

                <div class="d-flex ga-4 justify-center mt-12">
                  <div class="d-flex ga-2">
                    <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                    <div class="label-1 text-DB20">No monthly rental fees</div>
                  </div>
                  <div class="d-flex ga-2">
                    <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                    <div class="label-1 text-DB20">Free software updates and technical support</div>
                  </div>
                </div>
              </div>
            </div>
          </u-container>
        </u-tabs-window-item>

        <u-tabs-window-item id="soft-pos" value="soft-pos">
          <u-container>
            <SolutionCard
              variant="long"
              title="Soft POS"
              subtitle="Accept Payments with Zero Hardware—Your Phone is the Terminal"
              description="Finture Soft POS revolutionizes payment acceptance by turning your smartphone into a contactless payment terminal—no additional hardware needed."
              image="/assets/images/instant-money-transfers-example.png"
              image-ratio="1/2"
            />
          </u-container>

          <div class="how-it-works bg-B80">
            <u-container>
              <SolutionCard
                variant="long"
                title="How It Works"
                description="Customers simply tap their contactless card or mobile wallet on the merchant's phone. Finture's certified Soft POS technology securely reads payment information through NFC—completing transactions in seconds."
                image="/assets/images/instant-money-transfers-example.png"
                image-ratio="1/2"
                image-position="start"
              />

              <div class="mt-16 pt-9">
                <h3 class="text-center">Perfect For</h3>

                <u-row class="mt-10">
                  <u-col v-for="(item, index) in softPosPerfectFor" :key="index" col="12" md="6">
                    <div class="d-flex align-center ga-2">
                      <u-icon :icon="item.icon" color="BL10" class="icon" size="40" />

                      <div class="text-h4 text-B20">
                        {{ item.title }}
                      </div>
                    </div>
                  </u-col>
                </u-row>
              </div>
            </u-container>
          </div>

          <u-container>
            <div class="d-flex flex-column ga-4">
              <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
                <h2>Key Advantages</h2>
                <p class="text-h3">Everything you gain with tap-to-phone payments.</p>
              </div>

              <u-row class="justify-center">
                <u-col
                  v-for="(f, index) in keyAdvantagesList"
                  :key="index"
                  cols="12"
                  md="4"
                  class="my-12"
                >
                  <FeatureCard :title="f.title" :subtitle="f.subtitle" :icon="f.icon" />
                </u-col>
              </u-row>
            </div>

            <div class="pricing px-16 py-15 text-center mt-12">
              <u-row>
                <u-col col="12" md="6">
                  <div class="d-flex flex-column ga-10">
                    <h4>Pricing</h4>

                    <div
                      class="flex-grow-1 d-flex flex-column ga-2 justify-center align-center px-10 py-12 bg-DB90 rounded-lg"
                    >
                      <p class="label-1">Transaction Fees</p>
                      <h3 class="text-DBlue">2.29%</h3>
                      <p class="label-1">per transaction</p>
                    </div>

                    <div class="d-flex ga-4 justify-center">
                      <div class="d-flex ga-2">
                        <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                        <div class="label-1 text-DB20">No setup fees</div>
                      </div>
                      <div class="d-flex ga-2">
                        <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                        <div class="label-1 text-DB20">No monthly fees</div>
                      </div>
                    </div>
                  </div>
                </u-col>

                <u-col col="12" md="6">
                  <div class="d-flex flex-column ga-10">
                    <h4>Requirements</h4>

                    <div
                      class="flex-grow-1 d-flex flex-column ga-2 justify-center align-center px-10 py-12 bg-DB90 rounded-lg"
                    >
                      <div class="d-flex flex-column ga-4 justify-center align-center text-start">
                        <div class="d-flex ga-2">
                          <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                          <div class="label-1 text-DB20">
                            Android 8.0+ or iOS 14+ smartphone with NFC capability
                          </div>
                        </div>
                        <div class="d-flex ga-2">
                          <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                          <div class="label-1 text-DB20">Active Finture Business account</div>
                        </div>
                        <div class="d-flex ga-2">
                          <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                          <div class="label-1 text-DB20">
                            Stable internet connection (4G/5G or WiFi)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </u-col>
              </u-row>
            </div>
          </u-container>
        </u-tabs-window-item>

        <u-tabs-window-item id="virtual-pos" value="virtual-pos">
          <div class="d-flex flex-column ga-16">
            <u-container>
              <SolutionCard
                variant="long"
                title="Virtual POS"
                subtitle="Your Complete E-Commerce Payment Gateway"
                description="Enable secure online payment acceptance on your website, mobile app, or e-commerce platform. Finture's Virtual POS integrates seamlessly with leading platforms and provides customers with a smooth, trusted checkout experience."
                image="/assets/images/instant-money-transfers-example.png"
                image-ratio="1/2"
              />
            </u-container>

            <div class="segmented-tabs d-flex flex-column ga-12">
              <u-container>
                <u-tabs v-model="virtualPOSTab" align-tabs="center">
                  <u-tab value="payment-methods">Payment Method Support</u-tab>
                  <u-tab value="integration-options">Integration Options</u-tab>
                </u-tabs>

                <u-tabs-window v-model="virtualPOSTab">
                  <u-tabs-window-item value="payment-methods">
                    <u-expand-transition>
                      <u-row>
                        <u-col
                          v-for="(method, index) in virtualPOSPaymentMethodSupport"
                          :key="index"
                          cols="12"
                          md="4"
                        >
                          <div
                            class="segmented-card d-flex flex-column align-center ga-4 text-center h-100"
                          >
                            <u-icon :icon="method.icon" color="Blue" size="64" />
                            <h5>{{ method.title }}</h5>
                            <p>{{ method.description }}</p>
                          </div>
                        </u-col>
                      </u-row>
                    </u-expand-transition>
                  </u-tabs-window-item>

                  <u-tabs-window-item value="integration-options">
                    <u-expand-transition>
                      <u-row>
                        <u-col
                          v-for="(method, index) in virtualPOSIntegrationOptions"
                          :key="index"
                          cols="12"
                          md="4"
                        >
                          <div
                            class="segmented-card d-flex flex-column align-center ga-4 text-center h-100"
                          >
                            <u-icon :icon="method.icon" color="Blue" size="64" />
                            <h5>{{ method.title }}</h5>
                            <p>{{ method.description }}</p>
                          </div>
                        </u-col>
                      </u-row>
                    </u-expand-transition>
                  </u-tabs-window-item>
                </u-tabs-window>
              </u-container>
            </div>

            <u-container>
              <div class="d-flex flex-column ga-16">
                <div class="d-flex flex-column ga-4">
                  <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
                    <h2>Key Features</h2>
                    <p class="text-h3">
                      Control every lira in one place with powerful tools for access, budgets,
                      payments, and real-time balances.
                    </p>
                  </div>

                  <u-row class="justify-center">
                    <u-col
                      v-for="(f, index) in virtualPOSKeyFeaturesList"
                      :key="index"
                      cols="12"
                      md="4"
                      class="my-12"
                    >
                      <FeatureCard :title="f.title" :subtitle="f.subtitle" :icon="f.icon" />
                    </u-col>
                  </u-row>
                </div>

                <u-row>
                  <u-col cols="12" md="6">
                    <div
                      class="d-flex flex-column ga-6 pa-10 rounded-xl border border-solid border-grey-lighten-2 bg-grey-lighten-5 h-100"
                    >
                      <h5 class="font-weight-semibold">Reporting & Analytics</h5>

                      <u-list bg-color="transparent">
                        <u-list-item
                          v-for="(item, i) in reportingAnalyticsOptions"
                          :key="i"
                          class="list-item px-0"
                        >
                          <template #prepend>
                            <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="32" />
                          </template>

                          <u-list-item-title
                            class="text-h5 font-weight-medium feature-item-title"
                            >{{ item }}</u-list-item-title
                          >
                        </u-list-item>
                      </u-list>
                    </div>
                  </u-col>

                  <u-col cols="12" md="6">
                    <div
                      class="card-fancy-bg d-flex flex-column ga-6 pa-10 rounded-xl border border-solid border-grey-lighten-2 bg-BL20 h-100"
                    >
                      <h5 class="font-weight-semibold">Settlement</h5>

                      <u-list bg-color="transparent">
                        <u-list-item
                          v-for="(item, i) in settlementOptions"
                          :key="i"
                          class="list-item px-0"
                        >
                          <template #prepend>
                            <u-icon icon="hugeicons:tick-02" color="White" class="icon" size="32" />
                          </template>

                          <u-list-item-title
                            class="text-h5 font-weight-medium feature-item-title"
                            >{{ item }}</u-list-item-title
                          >
                        </u-list-item>
                      </u-list>

                      <u-img :src="floatingShape" class="floating" />
                    </div>
                  </u-col>
                </u-row>

                <div class="pricing px-16 py-15 text-center">
                  <h4>Pricing</h4>

                  <div
                    class="d-flex flex-column flex-md-row flex-wrap flex-md-nowrap ga-10 ga-md-4 mt-12"
                  >
                    <div
                      class="flex-grow-1 d-flex flex-column justify-center ga-2 px-10 py-12 bg-DB90 rounded-lg"
                    >
                      <p class="label-1">Setup Fee</p>
                      <h3 class="text-DBlue">Free</h3>
                    </div>

                    <div
                      class="flex-grow-1 d-flex flex-column justify-center ga-2 px-10 py-12 bg-DB90 rounded-lg"
                    >
                      <p class="label-1">Monthly Fee</p>
                      <h3 class="text-DBlue">Free</h3>
                      <p class="label-1">(transaction-based pricing only)</p>
                    </div>

                    <div
                      class="flex-grow-1 d-flex flex-column justify-center ga-2 px-10 py-12 bg-DB90 rounded-lg"
                    >
                      <p class="label-1">Transaction Fees: Starting from</p>
                      <h3 class="text-DBlue">2.49% + ₺0.25</h3>
                      <p class="label-1">(volume-based discounts available)</p>
                    </div>

                    <div
                      class="flex-grow-1 d-flex flex-column justify-center ga-2 px-10 py-12 bg-DB90 rounded-lg"
                    >
                      <p class="label-1">Chargeback fee</p>
                      <h3 class="text-DBlue">₺25</h3>
                      <p class="label-1">per case</p>
                    </div>
                  </div>
                </div>
              </div>
            </u-container>
          </div>
        </u-tabs-window-item>

        <u-tabs-window-item id="payment-by-link" value="payment-by-link">
          <div class="d-flex flex-column ga-16">
            <u-container>
              <SolutionCard
                variant="long"
                title="Payment by Link"
                subtitle="Request Payments Without a Website Share a Secure Payment Link"
                description="Payment by Link simplifies payment collection for businesses without e-commerce infrastructure. Generate and share secure payment links via SMS, email, WhatsApp, or social media customers pay with one click."
                image="/assets/images/instant-money-transfers-example.png"
                image-ratio="1/2"
              />

              <div class="mt-16 pt-9">
                <h3>Perfect For</h3>

                <u-row class="mt-10">
                  <u-col
                    v-for="(item, index) in paymentByLinkPerfectFor"
                    :key="index"
                    col="12"
                    md="6"
                  >
                    <div class="d-flex align-center ga-2">
                      <u-icon :icon="item.icon" color="BL10" class="icon" size="40" />

                      <div class="text-h4 text-B20">
                        {{ item.title }}
                      </div>
                    </div>
                  </u-col>
                </u-row>
              </div>
            </u-container>

            <section class="how-it-work">
              <HowItWorks title="How It Works" :list="howItWorksList" :autoplay-interval="5000" />
            </section>

            <u-container>
              <div class="pricing px-16 py-15 text-center">
                <h4>Pricing</h4>

                <div class="d-flex flex-column flex-md-row ga-10 mt-12">
                  <div
                    class="flex-grow-1 d-flex flex-column ga-2 justify-center align-center px-10 py-12 bg-DB90 rounded-lg"
                  >
                    <p class="label-1">Transaction fees</p>
                    <h3 class="text-DBlue">2.69% + ₺0.25</h3>
                    <p class="label-1">per successful payment</p>
                  </div>

                  <div
                    class="flex-grow-1 d-flex flex-column ga-2 justify-center align-center px-10 py-12 bg-DB90 rounded-lg"
                  >
                    <p class="label-1">Optional instant settlement</p>
                    <h3 class="text-DBlue">+0.5%</h3>
                  </div>
                </div>

                <div class="d-flex ga-4 justify-center mt-12">
                  <div class="d-flex ga-2">
                    <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                    <div class="label-1 text-DB20">No setup or monthly fees</div>
                  </div>
                  <div class="d-flex ga-2">
                    <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="20" />

                    <div class="label-1 text-DB20">Unlimited link creation</div>
                  </div>
                </div>
              </div>
            </u-container>
          </div>
        </u-tabs-window-item>
      </u-tabs-window>
    </section>

    <section>
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped lang="scss">
.solutions-content :deep(.v-window-item) {
  padding-block: 96px;
  scroll-margin-top: 100px;
}

.solutions-content > :deep(.v-tabs) {
  position: sticky;
  top: 70px;
  z-index: 10;
  background: white;
}

.solutions-content > :deep(.v-divider) {
  position: sticky;
  top: 117px;
  z-index: 11;
}

.features-header {
  max-width: 800px;
  text-align: center;
}

.card-fancy-bg {
  position: relative;
  overflow: hidden;

  > *:not(.floating) {
    position: relative;
    z-index: 1;
  }

  .floating {
    position: absolute;
    top: 88px;
    right: -50%;
    width: 160%;
    max-width: unset;
    height: 400%;
    max-height: unset;

    :deep(img) {
      object-fit: cover;
      object-position: top center;
    }
  }
}

.rounded-lg {
  border-radius: 16px !important;
}

.pricing {
  position: relative;
  border-radius: 24px;
  background-color: #f5f7f9;
  overflow: hidden;

  > * {
    position: relative;
    z-index: 1;
  }

  &:before {
    position: absolute;
    opacity: 0.4;
    z-index: 0;
    inset: 0;
    background-image: url(/assets/images/floating-shape-gray.svg);
    background-size: 120px;
    background-repeat: space;
    content: '';
  }
}

.how-it-works {
  margin-block: 96px;
  padding-block: 96px;

  :deep(.text-Blue) {
    color: #121416 !important;
  }
}

.segmented-tabs {
  background: #f5f7f9;
  padding-block: 96px;

  .segmented-card {
    box-shadow: 0 4px 16px 0 rgba(97, 109, 132, 0.08);
    border-radius: 16px;
    background: var(--Neutral-White, #fff);
    padding: 40px 30px 24px 30px;
  }

  :deep(.v-tabs) {
    height: unset;
  }

  :deep(.v-tab__slider) {
    display: none;
  }

  :deep(.v-slide-group__content) {
    flex: unset;
    justify-content: center;
    justify-content: center;
    align-items: center;
    margin: 12px auto;
    border-radius: 8px;
    background: var(--Neutral-B70, #e8eaed);
    padding: 2px;
  }

  :deep(.v-tab) {
    border-radius: 7px;
  }

  :deep(.v-tab-item--selected) {
    box-shadow:
      0 3px 8px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px 0 rgba(0, 0, 0, 0.04);
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    background: var(--Neutral-White, #fff);
  }
}
</style>
