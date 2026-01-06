<script setup lang="ts">
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import ServiceCard from '~/components/shared/ServiceCard.vue'

const servicesDataList = [
  {
    subtitle: 'For Individuals',
    title: 'Send Money Instantly',
    description:
      'Free transfers, multi-currency wallet, QR payments, and cashback rewards up to 5%.',
    icon: 'd3:wallet',
    action_text: 'Learn More',
    action_link: '/individual/wallet',
  },
  {
    subtitle: 'For Businesses',
    title: 'Accept Payments Everywhere',
    description:
      'Physical POS, Soft POS, Virtual POS, multi-currency ,Payment Links . Starting from 1.99%.',
    icon: 'd3:pos',
    action_text: 'Try Free',
    action_link: '/individual/card',
  },
  {
    subtitle: 'Bizkolay',
    title: 'Run Your Business Smarter',
    description: 'Manage your business finances, track expenses, generate reports, and more.',
    icon: 'd3:business',
    action_text: 'Get Started',
    action_link: '/individual/campaigns',
  },
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Personal Finance, Simplified"
        description="Experience banking reimagined for the digital age. Manage your money with powerful tools designed for everyday life."
        category="Individual"
      >
        <template #footer>
          <u-row>
            <u-col v-for="(rec, index) in servicesDataList" :key="index" cols="12" md="4">
              <ServiceCard
                :subtitle="rec.subtitle"
                :title="rec.title"
                :description="rec.description"
                :icon="rec.icon"
                :action-text="rec.action_text"
                :action-link="rec.action_link"
                class="service-card"
              />
            </u-col>
          </u-row>
        </template>
      </PageHeader>
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
</style>
