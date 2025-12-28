<script lang="ts" setup>
interface Props {
  logo?: string
  title?: string
  description?: string
  have_list?: boolean
  vertical_menu_itmes?: Array
  vertical_menu_title?: string
  horizental_menu_item?: Array
  horizental_menu_title?: string
}

const props = withDefaults(defineProps<Props>(), {
  logo: '/images/logo.png',
  title: 'Your Business, Empowered.',
  description:
    'Track transactions, manage your wallet, and accept payments securely from a single dashboard.',
  have_list: false,
  // eslint-disable-next-line vue/require-valid-default-prop
  vertical_menu_itmes: [
    { icon: 'line:check', description: 'Digital wallet with instant money transfers' },
    { icon: 'line:check', description: 'Virtual and physical debit cards' },
    { icon: 'line:check', description: 'Exclusive cashback campaigns and rewards' },
  ],
  vertical_menu_title: 'Individual Account Benefits:',
  // eslint-disable-next-line vue/require-valid-default-prop
  horizental_menu_item: [
    { icon: 'line:lock01', description: '256-bit SSL encryption' },
    { icon: 'line:signature', description: 'MASAK compliant AML/KYC procedures' },
    { icon: 'line:pos', description: 'Real-time fraud monitoring' },
    { icon: 'line:flash', description: 'Instant transaction notifications' },
  ],
  horizental_menu_title: 'Security You Can Trust:',
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

    <div class="brand-content">
      <h1 class="title">{{ props.title }}</h1>
      <p class="description mt-5">{{ props.description }}</p>

      <div v-if="props.have_list" class="mt-5">
        <div class="vertical-menu">
          <h6>{{ vertical_menu_title }}</h6>
          <ul v-if="vertical_menu_itmes.length > 0">
            <li v-for="(v, index) in vertical_menu_itmes" :key="index">
              <div class="check-circle">
                <u-icon color="green" :icon="v.icon" size="small"></u-icon>
              </div>
              {{ v.description }}
            </li>
          </ul>
        </div>
      </div>

      <div v-if="props.have_list" class="horizental-menu mt-5">
        <h6 class="mb-3">{{ horizental_menu_title }}</h6>

        <u-row cols="12">
          <u-col v-for="(h, index) in horizental_menu_item" :key="index" cols="6">
            <u-icon color="green" :icon="h.icon" size="30"></u-icon> {{ h.description }}
          </u-col>
        </u-row>
      </div>
    </div>
  </u-col>
</template>

<style>
.brand-content {
  margin-left: -158px;
  width: 98%;
}
.brand-panel {
  position: relative;
  align-items: center;
  background: linear-gradient(135deg, #0b4dba, #083a91);
  padding: 64px;
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
  font-size: 18px;
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

ul {
  list-style-type: none;
}
li {
  margin-top: 10px;
}

.check-circle {
  display: inline-block;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: white;
  width: 25px;
  height: 25px;
}
</style>
