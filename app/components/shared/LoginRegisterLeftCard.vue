<script lang="ts" setup>
interface Props {
  logo?: string
  title?: string
  description?: string
  is_menu?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  logo: '/images/logo.png',
  title: 'Your Business, Empowered.',
  description:
    'Track transactions, manage your wallet, and accept payments securely from a single dashboard.',
  is_menu: false,
})
</script>

<template>
  <u-col cols="12" md="6" class="brand-panel d-none d-md-flex">
    <div class="shape shape-top"></div>
    <div class="shape shape-bottom"></div>

    <div class="brand-logo">
      <span class="logo">
        <u-img :src="props.logo" width="150" class="logo-img" />
      </span>
    </div>

    <div v-if="!props.is_menu" class="brand-content">
      <h2 class="title">{{ props.title }}</h2>
      <p class="description">{{ props.description }}</p>
    </div>
  </u-col>
</template>

<style scoped>
.brand-content {
  margin-left: -158px;
  width: 60%;
}
.brand-panel {
  display: flex;
  position: relative;
  background: linear-gradient(180deg, #0b4dba 0%, #083a91 100%);
  padding: 72px;
  overflow: hidden;
  color: white;
}

/* CONTENT */
.brand-logo {
  position: relative;
  z-index: 2;
  max-width: 420px;
}

.logo {
  display: block;
  margin-bottom: 64px;
  font-weight: 700;
  font-size: 18px;
}

h2 {
  margin-bottom: 16px;
  font-size: 40px;
  line-height: 1.25;
}

.description {
  opacity: 0.9;
  max-width: 360px;
  font-size: 14px;
}

.copyright {
  position: absolute;
  bottom: 32px;
  opacity: 0.7;
  font-size: 12px;
}

/* SHAPES */
.shape {
  position: absolute;
  z-index: 1;
  border-radius: 48px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.02));
}

/* top-left shape */
.shape-top {
  top: 220px;
  left: -210px;
  transform: rotate(-47deg);
  width: 420px;
  height: 420px;
}

/* bottom-right shape */
.shape-bottom {
  right: -135px;
  bottom: -200px;
  transform: rotate(45deg);
  width: 527px;
  height: 494px;
}

.logo-img {
  margin-top: -370px;
  margin-left: 62px;
}
</style>
