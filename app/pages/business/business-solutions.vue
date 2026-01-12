<script setup lang="ts">
import floatingShape from '/assets/images/floating-shape.svg'

import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import SolutionCard from '~/components/shared/SolutionCard.vue'

const tabs = ref('inventory-management')

const productCatalogOptions: string[] = [
  'Create unlimited products with SKUs, barcodes, and images',
  'Organize products by categories and brands',
  'Track variants (size, color, flavor) with individual pricing',
  'Set reorder points and receive low-stock alerts',
]

const stockControlOptions: string[] = [
  'Real-time inventory tracking with every sale',
  'Barcode scanning for quick product entry and checkout',
  'Stock adjustments for returns, damages, and corrections',
  'Multi-location inventory tracking for businesses with multiple stores',
]
</script>

<template>
  <div>
    <section>
      <PageHeader
        title="Intelligent Tools to Run Your Business More Efficiently"
        description="Beyond payment acceptance, Finture offers integrated business management solutions designed specifically for micro-merchants and small businesses."
        category="Business Solutions"
      />
    </section>

    <section class="bizkolay">
      <u-container>
        <SolutionCard
          variant="long"
          title="Bizkolay"
          subtitle="All-in-One Business Management for Small Retailers"
          description="Bizkolay ('Business Made Easy') is Finture's comprehensive business management solution designed for small shops, cafes, restaurants, and service providers. Manage inventory, track sales, and maintain financial records—all in one intuitive platform."
          image="/assets/images/instant-money-transfers-example.png"
          image-ratio="1/2"
        />
      </u-container>
    </section>

    <section class="segmented-tabs d-flex flex-column ga-12">
      <u-container>
        <u-tabs v-model="tabs" align-tabs="center">
          <u-tab value="inventory-management">Inventory Management</u-tab>
          <u-tab value="sales-management">Sales Management</u-tab>
        </u-tabs>

        <u-tabs-window v-model="tabs">
          <u-tabs-window-item
            value="inventory-management"
            transition="fade-transition"
            reverse-transition="fade-transition"
          >
            <u-row>
              <u-col cols="12" md="6">
                <div class="segmented-card d-flex flex-column ga-4 h-100">
                  <u-icon icon="hugeicons:layers-02" size="64" color="BL10" />

                  <h5 class="font-weight-semibold">Product Catalog</h5>

                  <u-list bg-color="transparent">
                    <u-list-item
                      v-for="(item, i) in productCatalogOptions"
                      :key="i"
                      class="list-item px-0"
                    >
                      <template #prepend>
                        <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="32" />
                      </template>

                      <u-list-item-title class="text-h5 font-weight-medium list-item-title">
                        {{ item }}
                      </u-list-item-title>
                    </u-list-item>
                  </u-list>
                </div>
              </u-col>
              <u-col cols="12" md="6">
                <div class="segmented-card d-flex flex-column ga-4 h-100">
                  <u-icon icon="hugeicons:task-done-01" size="64" color="BL10" />

                  <h5 class="font-weight-semibold">Stock Control</h5>

                  <u-list bg-color="transparent">
                    <u-list-item
                      v-for="(item, i) in stockControlOptions"
                      :key="i"
                      class="list-item px-0"
                    >
                      <template #prepend>
                        <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="32" />
                      </template>

                      <u-list-item-title class="text-h5 font-weight-medium list-item-title">
                        {{ item }}
                      </u-list-item-title>
                    </u-list-item>
                  </u-list>
                </div>
              </u-col>
            </u-row>
          </u-tabs-window-item>

          <u-tabs-window-item
            value="sales-management"
            transition="fade-transition"
            reverse-transition="fade-transition"
          >
            <u-row>
              <u-col cols="12" md="6">
                <div class="segmented-card d-flex flex-column ga-4 h-100">
                  <u-icon icon="hugeicons:layers-02" size="64" color="BL10" />

                  <h5 class="font-weight-semibold">Product Catalog</h5>

                  <u-list bg-color="transparent">
                    <u-list-item
                      v-for="(item, i) in productCatalogOptions"
                      :key="i"
                      class="list-item px-0"
                    >
                      <template #prepend>
                        <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="32" />
                      </template>

                      <u-list-item-title class="text-h5 font-weight-medium list-item-title">
                        {{ item }}
                      </u-list-item-title>
                    </u-list-item>
                  </u-list>
                </div>
              </u-col>
              <u-col cols="12" md="6">
                <div class="segmented-card d-flex flex-column ga-4 h-100">
                  <u-icon icon="hugeicons:task-done-01" size="64" color="BL10" />

                  <h5 class="font-weight-semibold">Stock Control</h5>

                  <u-list bg-color="transparent">
                    <u-list-item
                      v-for="(item, i) in stockControlOptions"
                      :key="i"
                      class="list-item px-0"
                    >
                      <template #prepend>
                        <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="32" />
                      </template>

                      <u-list-item-title class="text-h5 font-weight-medium list-item-title">
                        {{ item }}
                      </u-list-item-title>
                    </u-list-item>
                  </u-list>
                </div>
              </u-col>
            </u-row>
          </u-tabs-window-item>
        </u-tabs-window>
      </u-container>
    </section>

    <section class="pricing-integration">
      <u-container>
        <div class="d-flex flex-column ga-16">
          <div
            class="card-fancy-bg d-flex flex-column align-center ga-6 pa-10 text-center rounded-xl border border-solid border-grey-lighten-2 bg-BL20 h-100"
          >
            <h2 class="font-weight-semibold">Integration with Finture Payments</h2>

            <p class="text-h5">
              Seamlessly integrated with all Finture payment solutions. Accept payments through
              Physical POS, Soft POS, Virtual POS, or Payment Links sales automatically recorded in
              Bizkolay.
            </p>

            <u-btn color="Pink" size="large" rounded class="px-6" @click="() => {}">
              Try Bizkolay
            </u-btn>

            <u-img :src="floatingShape" class="floating" />
          </div>

          <div class="pricing px-16 py-15 text-center">
            <h4>Pricing</h4>

            <div
              class="d-flex flex-column flex-md-row flex-wrap flex-md-nowrap ga-10 ga-md-4 mt-12"
            >
              <div
                class="flex-grow-1 d-flex flex-column justify-center ga-2 px-10 py-12 bg-DB90 rounded-lg"
              >
                <p class="label-1">Free</p>
                <h3 class="text-DBlue">90-day trial</h3>
                <p class="label-1">(full features, no credit card required)</p>
              </div>

              <div
                class="flex-grow-1 d-flex flex-column justify-center ga-2 px-10 py-12 bg-DB90 rounded-lg"
              >
                <p class="label-1">Basic Plan</p>
                <h3 class="text-DBlue">₺99/month</h3>
                <p class="label-1">(1 user, single location, up to 500 products)</p>
              </div>

              <div
                class="flex-grow-1 d-flex flex-column justify-center ga-2 px-10 py-12 bg-DB90 rounded-lg"
              >
                <p class="label-1">Professional Plan</p>
                <h3 class="text-DBlue">₺249/month</h3>
                <p class="label-1">
                  (unlimited users and products, multi-location, advanced reporting)
                </p>
              </div>
            </div>

            <div
              class="segmented-card d-flex flex-column ga-4 h-100 text-start mt-16 pa-10 pa-md-16"
            >
              <u-row class="align-center">
                <u-col cols="12" md="6">
                  <h4 class="font-weight-semibold">Setup & Support</h4>
                </u-col>
                <u-col cols="12" md="6">
                  <u-list bg-color="transparent">
                    <u-list-item
                      v-for="(item, i) in productCatalogOptions"
                      :key="i"
                      class="list-item px-0"
                    >
                      <template #prepend>
                        <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" size="32" />
                      </template>

                      <u-list-item-title class="text-h5 font-weight-medium list-item-title">
                        {{ item }}
                      </u-list-item-title>
                    </u-list-item>
                  </u-list>
                </u-col>
              </u-row>
            </div>
          </div>
        </div>
      </u-container>
    </section>

    <section>
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped lang="scss">
.bizkolay {
  padding-block: 96px;
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

.pricing-integration {
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

.card-fancy-bg {
  position: relative;
  overflow: hidden;

  > *:not(.floating) {
    position: relative;
    z-index: 1;
    max-width: 800px;
  }

  .floating {
    position: absolute;
    top: 88px;
    right: -30%;
    width: 160%;
    max-width: unset;
    height: 400%;
    max-height: unset;

    :deep(img) {
      object-fit: cover;
      object-position: top center;
    }
  }

  .list-item-title {
    color: var(--Neutral-White, #ffffff);
  }
}
</style>
