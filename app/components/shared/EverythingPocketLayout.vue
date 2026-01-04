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
      <div class="content d-flex justify-end align-end ga-8">
        <div class="text d-flex flex-column ga-4 ga-md-6">
          <h3 class="title">Everything in Your Pocket</h3>

          <u-list bg-color="transparent">
            <u-list-item v-for="(item, i) in features" :key="i" class="list-item">
              <template #prepend>
                <u-icon icon="hugeicons:tick-02" color="Blue" class="icon" />
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

.hero-card .content > .text {
  margin-inline-start: 60%;
}

.hero-card .content > .text .icon {
  width: 36px;
}

.hero-card .content > .text .list-item {
  min-height: unset;
}

@media (max-width: 991.98px) {
  .hero-card .content > .text {
    margin-inline-start: 40%;
  }
}

@media (max-width: 767.98px) {
  .hero-card .content {
    padding-inline: 20px;
    padding-block: 20px;
  }

  .hero-card .content:before {
    background-image: url('/assets/images/everything-pocket/bg-mobile.png');
  }

  .hero-card .content > .text {
    margin-inline-start: 0%;
    margin-block-start: 60%;
    width: 100%;
  }

  .hero-card .content > .text .title {
    font-size: 30px !important;
    line-height: 120% !important;
  }

  .hero-card .content > .text .text-h3 {
    font-size: 16px !important;
  }

  .hero-card .content > .text .icon {
    width: 15px;
  }
}

@media (max-width: 575.98px) {
  .hero-card .content > .text {
    margin-block-start: 120%;
  }
}
</style>
