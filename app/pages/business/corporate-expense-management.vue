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
    icon: 'line:flow',
    title: 'Approval Workflows',
    description:
      'Customize multi-level approval chains based on amount, category, or employee. Approvers receive instant notifications and can approve/reject with one click from their phone.',
    image: '/assets/images/individual/instant-money-transfers.png',
    imagePosition: 'end',
  },
  {
    icon: 'line:pieChart',
    title: 'Comprehensive Reporting & Analytics',
    description:
      'Generate detailed expense reports for accounting, tax filing, and financial analysis. Export to Excel or PDF.',
    image: '/assets/images/individual/qr-code-payments.png',
    imagePosition: 'start',
  },
]

const features: string[] = [
  'Improve policy compliance and reduce unauthorized spending',
  'Gain real-time visibility into company spending',
  'Simplify month-end closing and financial reporting',
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Take Control of Business Spending"
        description="Eliminate spreadsheets, manual receipt collection, and approval bottlenecks. Finture's corporate expense management automates the entire process from submission to reimbursement."
        category="Corporate Expense Management"
      />
    </section>

    <section class="key-features">
      <u-container>
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

    <section class="benefits">
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
              <h2 class="font-weight-semibold">Benefits</h2>
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

.benefits {
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
