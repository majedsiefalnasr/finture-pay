<script setup>
const features = [
  'Instant money transfers',
  'Bill payments & recharge',
  'Real-time notifications',
  'Card freeze/unfreeze',
  'Spending limits & budgets',
]
</script>

<template>
  <div class="hero-card">
    <u-container>
      <div class="content d-flex flex-column ga-8">
        <div class="text">
          <h3 class="title">Everything in Your Pocket</h3>

          <u-list bg-color="transparent">
            <u-list-item v-for="(item, i) in features" :key="i">
              <template #prepend>
                <u-icon icon="hugeicons:tick-02" color="Blue" size="36" />
              </template>

              <u-list-item-title class="text-h3 font-weight-medium">{{ item }}</u-list-item-title>
            </u-list-item>
          </u-list>

          <div class="app-download d-flex ga-3">
            <a href="#">
              <img
                height="48"
                src="/assets/images/everything-pocket/app-store.png"
                alt="App Store"
              />
            </a>
            <a href="#">
              <img
                height="48"
                src="/assets/images/everything-pocket/google-play.png"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </u-container>
  </div>
</template>

<style scoped>
.hero-card .content {
  position: relative;
  border-radius: 24px;
  padding-inline: 80px;
  padding-block: 96px;
  overflow: hidden;
}

.hero-card .content:before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-image: url('/assets/images/everything-pocket/bg-desktop.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  content: '';
}

.hero-card .content > * {
  z-index: 1;
}
</style>
