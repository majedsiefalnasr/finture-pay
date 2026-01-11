<script setup lang="ts">
import FeesTable from '~/components/shared/FeesTable.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'

const tabs = ref('individual-account')

const pageTitle = computed(() => 'Transparent Pricing\nNo Hidden Costs')

const individualAccountFees: { description: string; fee: string; free?: boolean }[] = [
  { description: 'Account Opening & Maintenance', fee: 'Free', free: true },
  { description: 'Monthly Account Fee', fee: 'Free', free: true },
  { description: 'Digital Wallet Maintenance', fee: 'Free', free: true },
  { description: 'Account Closure', fee: 'Free', free: true },
]

const moneyTransfersFees: { description: string; fee: string; free?: boolean }[] = [
  { description: 'To Another Finture User', fee: 'Free', free: true },
  {
    description: 'To Turkish Bank Account (EFT)',
    fee: 'Free (up to 5/month), ₺2.50 thereafter',
    free: true,
  },
  { description: 'International Transfer (SWIFT)', fee: '₺25 + 1% (min ₺50, max ₺250)' },
  { description: 'Transfer via IBAN Name Verification', fee: 'Free', free: true },
]

const cardServicesFees: { description: string; fee: string; free?: boolean }[] = [
  { description: 'Physical Card Issuance', fee: 'Free (first card)', free: true },
  { description: 'Replacement Card', fee: '₺15' },
  { description: 'Virtual Card Creation', fee: 'Free', free: true },
  { description: 'Annual Card Fee', fee: 'Free', free: true },
  {
    description: 'ATM Withdrawal (Domestic)',
    fee: 'Free (up to 5/month), ₺5 thereafter',
    free: true,
  },
  { description: 'ATM Withdrawal (International)', fee: '€3 per transaction' },
  { description: 'Balance Inquiry at ATM', fee: 'Free', free: true },
]

const otherServicesFees: { description: string; fee: string; free?: boolean }[] = [
  { description: 'Bill Payment', fee: 'Free', free: true },
  { description: 'Mobile Recharge', fee: 'Free', free: true },
  { description: 'Currency Exchange', fee: '0.5% spread on mid-market rate' },
  { description: 'Account Statement (Digital)', fee: 'Free', free: true },
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        :title="pageTitle"
        description="At Finture, transparency is a core value. We believe you deserve to know exactly what you're paying for, with no surprise fees or confusing fine print. Below is our complete fee schedule."
        category="Fees and Commissions"
      />
    </section>

    <section class="segmented-tabs d-flex flex-column ga-12">
      <u-container>
        <u-tabs v-model="tabs" align-tabs="center">
          <u-tab value="individual-account">Individual Account</u-tab>
          <u-tab value="business-account">Business Account</u-tab>
        </u-tabs>

        <u-tabs-window v-model="tabs">
          <u-tabs-window-item
            value="individual-account"
            transition="fade-transition"
            reverse-transition="fade-transition"
          >
            <div class="d-flex flex-column ga-8">
              <FeesTable
                title="Individual Account Fees"
                icon="line:user01"
                :fees="individualAccountFees"
              />

              <FeesTable title="Money Transfers" icon="line:user01" :fees="moneyTransfersFees" />

              <FeesTable title="Card Services" icon="line:user01" :fees="cardServicesFees" />

              <FeesTable title="Other Services" icon="line:user01" :fees="otherServicesFees" />
            </div>
          </u-tabs-window-item>

          <u-tabs-window-item
            value="business-account"
            transition="fade-transition"
            reverse-transition="fade-transition"
          >
            <div class="d-flex flex-column ga-8">
              <FeesTable
                title="Individual Account Fees"
                icon="line:user01"
                :fees="individualAccountFees"
              />

              <FeesTable title="Money Transfers" icon="line:user01" :fees="moneyTransfersFees" />

              <FeesTable title="Card Services" icon="line:user01" :fees="cardServicesFees" />

              <FeesTable title="Other Services" icon="line:user01" :fees="otherServicesFees" />
            </div>
          </u-tabs-window-item>
        </u-tabs-window>
      </u-container>
    </section>

    <section>
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped lang="scss">
.segmented-tabs {
  background: #f5f7f9;
  padding-block: 96px;

  .segmented-card {
    box-shadow: 0 4px 16px 0 rgba(97, 109, 132, 0.08);
    border-radius: 16px;
    background: var(--Neutral-White, #fff);
    padding: 40px 30px 24px 30px;
  }

  .list-item-title {
    color: var(--Neutral-B20, #59606e);
    font-weight: var(--Weights-SemiBold, 600);
    font-size: var(--Heading-H4-fontSize, 20px) !important;
    line-height: 30px !important;
    white-space: unset;
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

  :deep(.v-window-item) {
    padding-block: 96px;
  }
}
</style>
