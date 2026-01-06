<script setup lang="ts">
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import SolutionCard from '~/components/shared/SolutionCard.vue'

import { ref } from 'vue'

const tab = ref('android-physical-pos')
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
      <u-sheet elevation="4">
        <u-tabs v-model="tab" color="primary" grow center-active>
          <u-tab value="android-physical-pos">Android Physical POS</u-tab>
          <u-tab value="soft-pos">Soft POS</u-tab>
          <u-tab value="virtual-pos">Virtual POS</u-tab>
          <u-tab value="payment-by-link">Payment by Link</u-tab>
        </u-tabs>

        <u-divider></u-divider>

        <u-tabs-window v-model="tab">
          <u-tabs-window-item value="android-physical-pos">
            <u-container>
              <SolutionCard
                variant="long"
                title="Instant Money Transfers"
                description="Send money to anyone in Turkey using just their phone number, email, or Finture username. Transfers complete in seconds, 24/7—even on holidays and weekends."
                icon="line:switchHorizontal01"
                image="/assets/images/instant-money-transfers-example.png"
                image-ratio="1/2"
              />
            </u-container>
          </u-tabs-window-item>
          <u-tabs-window-item value="soft-pos">
            <u-sheet class="pa-5">Two</u-sheet>
          </u-tabs-window-item>
          <u-tabs-window-item value="virtual-pos">
            <u-sheet class="pa-5">Three</u-sheet>
          </u-tabs-window-item>
          <u-tabs-window-item value="payment-by-link">
            <u-sheet class="pa-5">Three</u-sheet>
          </u-tabs-window-item>
        </u-tabs-window>
      </u-sheet>
    </section>

    <section>
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped></style>
