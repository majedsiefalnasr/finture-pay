<script setup lang="ts">
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import SolutionCard from '~/components/shared/SolutionCard.vue'

interface Transfer {
  icon: string
  title: string
  description: string
  image: string
  imagePosition: 'end' | 'start'
}

const transfers: Transfer[] = [
  {
    icon: 'line:switchHorizontal01',
    title: 'Instant Money Transfers',
    description:
      'Send money to anyone in Turkey using just their phone number, email, or Finture username. Transfers complete in seconds, 24/7—even on holidays and weekends.',
    image: '/assets/images/individual/instant-money-transfers.png',
    imagePosition: 'end',
  },
  {
    icon: 'line:qrCode01',
    title: 'QR Code Payments',
    description:
      'Pay at participating merchants by simply scanning a QR code. No card required, completely contactless.',
    image: '/assets/images/individual/qr-code-payments.png',
    imagePosition: 'start',
  },
  {
    icon: 'line:işlemler',
    title: 'Bill Payments Made Easy',
    description:
      'Pay utilities, phone bills, internet, subscriptions, and more—all from one place. Set up automatic payments and never miss a due date.',
    image: '/assets/images/individual/bill-payments-made-easy.png',
    imagePosition: 'end',
  },
  {
    icon: 'line:bell01',
    title: 'Real-Time Notifications',
    description:
      'Stay informed with instant push notifications for every transaction, ensuring complete visibility and security.',
    image: '/assets/images/individual/real-time-notifications.png',
    imagePosition: 'start',
  },
  {
    icon: 'line:creditCard02',
    title: 'Transaction History & Analytics',
    description:
      'Access detailed transaction history with smart categorization. Visual spending analytics help you understand and optimize your financial habits.',
    image: '/assets/images/individual/transaction-history-analytics.png',
    imagePosition: 'end',
  },
]

const features: string[] = [
  'Instant card freeze/unfreeze capability',
  'Set transaction limits for added control',
  'Biometric authentication required for sensitive actions',
  'Deposit protection up to ₺150,000 per Central Bank of Turkiye regulations',
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Your Money, Your Way"
        description="The Finture digital wallet puts complete financial control in your pocket. Store, send, receive, and manage funds with unmatched convenience and security."
        category="Wallet"
      />
    </section>

    <section class="key-features">
      <u-container>
        <div class="d-flex flex-column ga-16 text-center">
          <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
            <h2>Key Features</h2>
            <p class="text-h3">Everything you need to manage your daily finances.</p>
          </div>
        </div>

        <div class="features-list d-flex flex-column">
          <SolutionCard
            v-for="(transfer, index) in transfers"
            :key="index"
            variant="long"
            :title="transfer.title"
            :description="transfer.description"
            :icon="transfer.icon"
            :image="transfer.image"
            :image-position="transfer.imagePosition"
          />
        </div>
      </u-container>
    </section>

    <section class="security-features">
      <u-container>
        <u-row>
          <u-col
            cols="12"
            md="6"
            class="d-flex flex-column ga-6 align-center align-md-start justify-center pt-6 pt-md-0 pe-3 pe-md-16"
          >
            <div
              class="d-flex flex-column ga-6 align-center align-md-start text-center text-md-start"
            >
              <h2 class="font-weight-semibold">Security Features</h2>
              <p class="text-body-1 text-B20">
                All your card and account security controls are right at your fingertips.
              </p>
            </div>

            <u-list bg-color="transparent">
              <u-list-item v-for="(item, i) in features" :key="i" class="list-item">
                <template #prepend>
                  <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" />
                </template>

                <u-list-item-title class="text-h3 font-weight-medium feature-item-title">{{
                  item
                }}</u-list-item-title>
              </u-list-item>
            </u-list>
          </u-col>

          <u-col cols="12" md="6">
            <u-img
              src="/assets/images/individual/virtualPOS.png"
              alt="Security Features"
              class="feature-item-image"
            />
          </u-col>
        </u-row>
      </u-container>
    </section>

    <section>
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped>
.service-card {
  height: 100%;
}

.key-features {
  padding-block: 96px;
}

.security-features {
  background: #f5f7f9;
  padding-block: 96px;
}

.features-list {
  gap: 100px;
  padding-block-start: 64px;
}

.feature-item-title {
  color: var(--Neutral-B20, #59606e);
  font-weight: var(--Weights-SemiBold, 600);
  font-size: var(--Heading-H4-fontSize, 20px) !important;
  line-height: 30px !important;
  white-space: unset;
}

.feature-item-image {
  box-shadow:
    0 20px 24px -4px rgba(16, 24, 40, 0.08),
    0 8px 8px -4px rgba(16, 24, 40, 0.03);
  border: 14px solid #fff;
  border-radius: 24px;
}
</style>
