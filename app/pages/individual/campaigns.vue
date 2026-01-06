<script setup lang="ts">
import FeatureCard from '~/components/shared/FeatureCard.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import HowItWorks from '~/components/shared/howItWorks.vue'
import PageHeader from '~/components/shared/PageHeader.vue'

const features = [
  {
    title: 'Refer & Earn',
    subtitle:
      'Invite friends to Finture and both receive ₺50 when they complete their first transaction. No limit on referrals.',
    icon: 'features:global',
  },
  {
    title: 'Seasonal Promotions',
    subtitle:
      'Special holiday campaigns, birthday bonuses, and surprise rewards throughout the year.',
    icon: 'features:global',
  },
  {
    title: 'Merchant Partnerships',
    subtitle:
      'Exclusive discounts at 10,000+ partner merchants across Turkiye from restaurants and cafes to electronics retailers and travel services.',
    icon: 'features:global',
  },
  {
    title: 'Spend & Win',
    subtitle:
      'Monthly prize draws—every transaction is an entry to win gift cards, gadgets, and travel vouchers.',
    icon: 'features:global',
  },
]

const featuresShowcaseList = [
  {
    label: 'Browse active campaigns',
    description: "Log in to the app and check the 'Rewards' tab.",
    image: '/assets/images/how-it-works/01.png',
  },
  {
    label: 'Activate campaigns',
    description: 'Tap to activate offers you are interested in.',
    image: '/assets/images/how-it-works/01.png',
  },
  {
    label: 'Shop as usual',
    description: 'Use your Finture card (physical or virtual) at checkout.',
    image: '/assets/images/how-it-works/01.png',
  },
  {
    label: 'Earn rewards automatically',
    description: 'No codes or complicated processes. Cashback is instant.',
    image: '/assets/images/how-it-works/01.png',
  },
  {
    label: 'Track your rewards',
    description: 'See your savings grow in real-time on your dashboard.',
    image: '/assets/images/how-it-works/01.png',
  },
]

const handleFeaturesShowcaseAction = () => {
  navigateTo('/')
}
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Exclusive Rewards & Cashback"
        description="Your spending should reward you. Discover ongoing campaigns designed to help you save money and earn rewards on everyday purchases."
        category="Campaigns"
      />
    </section>

    <section class="current-campaigns">
      <u-container>
        <div class="d-flex flex-column ga-16 text-center">
          <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
            <h2>Current Campaigns</h2>
            <p class="text-h3">Designed for control, security, and global freedom.</p>
          </div>
        </div>

        <u-row class="mt-16">
          <u-col cols="12" md="8">
            <u-row>
              <u-col v-for="(feature, index) in features" :key="index" cols="12" md="6">
                <FeatureCard
                  :title="feature.title"
                  :subtitle="feature.subtitle"
                  :icon="feature.icon"
                  class="px-4 mb-16"
                />
              </u-col>
            </u-row>
          </u-col>

          <u-col cols="12" md="4">
            <FeatureCard
              title="Loyalty Tiers"
              subtitle="The more you use Finture, the more you earn. Unlock higher cashback rates, priority support, and exclusive perks as you move through Bronze, Silver, Gold, and Platinum tiers."
              icon="features:global"
              variant="primary"
              class="h-100"
            />
          </u-col>
        </u-row>
      </u-container>
    </section>

    <section class="how-it-work">
      <HowItWorks
        title="How It Works"
        subtitle="Start earning in 5 simple steps."
        :list="featuresShowcaseList"
        action-label="View All Active Campaigns"
        :on-action="handleFeaturesShowcaseAction"
        :autoplay-interval="5000"
      />
    </section>

    <section>
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped>
.current-campaigns {
  padding-block: 96px;
}
</style>
