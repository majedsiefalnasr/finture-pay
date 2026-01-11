<script setup lang="ts">
import FeatureCard from '~/components/shared/FeatureCard.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'

const physicalDebitCard: string[] = [
  'Accepted at 40+ million merchants worldwide (Mastercard/Visa network)',
  'Contactless payments for quick transactions',
  'ATM withdrawals at 2 million+ locations globally',
  'Free first card, quick replacement if lost or stolen',
]

const cardFeatures = [
  {
    title: 'Global Acceptance',
    subtitle:
      'Use your Finture card anywhere Mastercard/Visa is accepted online, in-store, or abroad.',
    icon: 'features:global',
  },
  {
    title: 'Dynamic Currency Conversion',
    subtitle:
      'Traveling abroad? Pay in local currency with competitive exchange rates and transparent fees—no surprises.',
    icon: 'features:currency',
  },
  {
    title: 'Transaction Controls',
    subtitle:
      'Set daily, weekly, or monthly spending limits Block specific merchant categories (gambling, adult content, etc.) Disable online transactions or international usage when not needed Instant freeze/unfreeze via app',
    icon: 'features:control',
  },
  {
    title: 'Real-Time Balance Updates',
    subtitle:
      'Every purchase reflects instantly in your wallet balance with detailed merchant information and location.',
    icon: 'features:lightningFast',
  },
]

const fees = [
  {
    value: '0₺',
    title: 'Annual Card Fee',
    subtitle: 'Free forever',
  },
  {
    value: '0%',
    title: 'Foreign Transaction Fee',
    subtitle: 'On international purchases',
  },
  {
    value: '5 Free',
    title: 'ATM Withdrawals',
    subtitle: 'Per month, worldwide',
  },
  {
    value: '0.5%',
    title: 'Forex Markup',
    subtitle: 'Transparent live rates',
  },
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Spend Smarter, Everywhere"
        description="The Finture card combines the convenience of traditional payment cards with modern digital features—giving you global acceptance and complete control."
        category="Card"
      />
    </section>

    <section class="debit-cards">
      <u-container>
        <u-row>
          <u-col cols="12" md="6" class="text-center text-md-start">
            <u-img
              src="/assets/images/individual/cards1.png"
              alt="Physical Debit Card"
              width="350"
              class="mb-12 mx-auto mx-md-0"
            />

            <h3>Physical Debit Card</h3>

            <u-list bg-color="transparent" class="mt-4">
              <u-list-item
                v-for="(item, i) in physicalDebitCard"
                :key="i"
                class="list-item text-start"
              >
                <template #prepend>
                  <u-icon icon="hugeicons:tick-02" color="Green" class="icon" size="32" />
                </template>

                <u-list-item-title class="text-h3 list-item-title">
                  <h6 class="font-weight-medium">{{ item }}</h6>
                </u-list-item-title>
              </u-list-item>
            </u-list>
          </u-col>

          <u-col cols="12" md="6" class="text-center text-md-start">
            <u-img
              src="/assets/images/individual/cards2.png"
              alt="Virtual Cards"
              width="350"
              class="mb-12 mx-auto mx-md-0"
            />

            <h3>Virtual Cards</h3>

            <h6 class="text-B20 font-weight-medium mt-4">
              Generate unlimited virtual cards for online shopping with customizable limits and
              expiry dates—perfect for subscription management and enhanced security.
            </h6>
          </u-col>
        </u-row>
      </u-container>
    </section>

    <section class="card-features">
      <u-container>
        <div class="d-flex flex-column ga-16 text-center">
          <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
            <h2>Card Features</h2>
            <p class="text-h3">Designed for control, security, and global freedom.</p>
          </div>
        </div>

        <u-row class="text-center mt-16">
          <u-col v-for="(feature, index) in cardFeatures" :key="index" cols="12" md="6">
            <FeatureCard
              :title="feature.title"
              :subtitle="feature.subtitle"
              :icon="feature.icon"
              class="px-4 mb-16"
            />
          </u-col>
        </u-row>
      </u-container>
    </section>

    <section class="no-hidden-fees">
      <u-container>
        <div class="d-flex flex-column ga-16 text-center">
          <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
            <h2>No Hidden Fees</h2>
            <p class="text-h3">We believe in total transparency. What you see is what you pay.</p>
          </div>
        </div>

        <u-row class="text-center mt-16 px-4 px-sm-0">
          <u-col v-for="(feature, index) in fees" :key="index" cols="12" sm="6" lg="3">
            <div class="text-center no-hidden-fees-card">
              <h3 class="text-BL10 mb-6">{{ feature.value }}</h3>
              <h6>{{ feature.title }}</h6>
              <p class="text-h5">{{ feature.subtitle }}</p>
            </div>
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

.card-features,
.debit-cards,
.no-hidden-fees {
  padding-block: 96px;
}

.debit-cards,
.no-hidden-fees {
  background: #f5f7f9;
}

.debit-cards .list-item-title {
  color: var(--Neutral-B20, #59606e);
  font-weight: var(--Weights-SemiBold, 600);
  font-size: var(--Heading-H4-fontSize, 20px) !important;
  line-height: 30px !important;
  white-space: unset;
}

.no-hidden-fees-card {
  align-content: center;
  box-shadow: 0 4px 16px 0 rgba(97, 109, 132, 0.08);
  border-radius: 16px;
  background: var(--Neutral-White, #fff);
  padding: 24px;
  height: 100%;
}
</style>
