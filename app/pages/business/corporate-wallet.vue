<script setup lang="ts">
import FeatureCard from '~/components/shared/FeatureCard.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'

const features = [
  {
    title: 'Multi-User Access & Permissions',
    subtitle:
      'Add team members with customizable role-based permissions. Assign different access levels for viewing, approving, and executing transactions.',
    icon: 'features:refer',
  },
  {
    title: 'Sub-Wallets & Cost Centers',
    subtitle:
      'Create unlimited sub-wallets for different departments, projects, or locations. Track spending by category for precise budget management.',
    icon: 'features:subWallet',
  },
  {
    title: 'Instant Payments',
    subtitle:
      'Pay suppliers, vendors, and contractors instantly—no waiting for bank processing times. Schedule recurring payments for subscriptions and regular expenses.',
    icon: 'features:lightningFast',
  },
  {
    title: 'Real-Time Balance Updates',
    subtitle:
      'View company-wide financial activity instantly. Detailed dashboards show spending trends, upcoming obligations, and cash flow projections.',
    icon: 'features:realtime',
  },
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Centralized Financial Management for Growing Businesses"
        description="The Finture Corporate Wallet is your business's financial command center providing complete visibility, control, and flexibility over company funds."
        category="Corporate Wallet"
      />
    </section>

    <section class="key-features">
      <u-container>
        <div class="d-flex flex-column ga-16 text-center">
          <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
            <h2>Key Features</h2>
            <p class="text-h3">
              Control every lira in one place with powerful tools for access, budgets, payments, and
              real-time balances.
            </p>
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
              title="Integration with BizKolay"
              subtitle="Seamlessly sync with Bizkolay for keeping track of your sales and inventory also collect payments easily."
              icon="features:sync"
              variant="primary"
              class="h-100"
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
.key-features {
  padding-block: 96px;
}
</style>
