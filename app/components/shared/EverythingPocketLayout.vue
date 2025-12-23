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
    <u-row no-gutters align="center">
      <!-- LEFT: IMAGE -->
      <u-col cols="12" md="6" class="left-col">
        <u-img src="/images/bk-cover1.png" alt="Finture App" class="hero-image" contain />
      </u-col>

      <!-- RIGHT: CONTENT -->
      <u-col cols="12" md="6" class="right-col">
        <h2 class="hero-title">Everything in Your Pocket</h2>

        <ul class="feature-list">
          <li v-for="(item, i) in features" :key="i">
            <i class="fa fa-check"></i>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="store-buttons store">
          <u-img src="/images/app.png" class="store" alt="App Store" />
          <u-img src="/images/google.png" class="store" alt="Google Play" />
        </div>
      </u-col>
    </u-row>
  </div>
</template>

<style scoped>
/* OUTER WRAPPER */
.hero-outer {
  background: #ffffff;
  padding: 80px 24px;
}

/* MAIN CARD */
.hero-card {
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
}

/* LEFT SIDE */
.left-col {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
}

.hero-image {
  transform: translateY(8px);
  max-width: 100%;
  border-top-left-radius: 30px !important;
  border-bottom-left-radius: 30px !important;
}

/* RIGHT SIDE */
.right-col {
  padding: 64px 72px;
  margin-top:50px;
}

.hero-title {
  margin-bottom: 32px;
  color: #000;
  font-weight: 700;
  font-size: 40px;
}

/* FEATURES */
.feature-list {
  margin: 0 0 36px;
  padding: 0;
  list-style: none;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  color: #111;
  font-size: 16px;
}

/* STORE BUTTONS */
.store-buttons {
  display: flex;
}

.store-buttons img {
  cursor: pointer;
  height: 44px;
}

.store {
  width: 50% !important;
  margin:10px;

}
</style>
