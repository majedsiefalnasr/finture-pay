<script setup lang="ts">
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import ServiceCard from '~/components/shared/ServiceCard.vue'

const servicesDataList = [
  {
    subtitle: 'Corporate Wallet',
    title: 'Centralized Financial Management for Growing Businesses',
    description:
      "The Finture Corporate Wallet is your business's financial command center—providing complete visibility, control, and flexibility over company funds.",
    icon: 'd3:wallet',
    action_text: 'Learn More',
    action_link: '/business/corporate-wallet',
  },
  {
    subtitle: 'Corporate Expense Management',
    title: 'Take Control of Business Spending',
    description:
      "Eliminate spreadsheets, manual receipt collection, and approval bottlenecks. Finture's corporate expense management automates the entire process from submission to reimbursement.",
    icon: 'd3:expense',
    action_text: 'Learn More',
    action_link: '/business/corporate-expense-management',
  },
  {
    subtitle: 'Payment Solutions',
    title: 'Accept Payments Anywhere, Anytime Across Every Channel',
    description:
      "Finture's comprehensive payment acceptance ecosystem ensures you never miss a sale. Whether customers shop online, in-store, or through social media, Finture has the solution.",
    icon: 'd3:card',
    action_text: 'Learn More',
    action_link: '/business/payment-solutions',
  },
  {
    subtitle: 'Business Solutions',
    title: 'Intelligent Tools to Run Your Business More Efficiently',
    description:
      'Beyond payment acceptance, Finture offers integrated business management solutions designed specifically for micro-merchants and small businesses.',
    icon: 'd3:business',
    action_text: 'Learn More',
    action_link: '/business/business-solutions',
  },
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Empower Your Business with Next-Generation Financial Tools"
        description="Small and medium businesses are the backbone of Turkey's economy. Finture provides SMEs with enterprise-grade financial solutions at accessible prices—helping you accept payments, manage expenses, track inventory, and grow your business."
        category="Business"
      >
        <template #footer>
          <u-row>
            <u-col v-for="(rec, index) in servicesDataList" :key="index" cols="12" md="6">
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
