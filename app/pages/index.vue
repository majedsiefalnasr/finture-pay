<script>
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import EverythingPocketLayout from '~/components/shared/EverythingPocketLayout.vue'
import FeatureCard from '~/components/shared/FeatureCard.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import howItWorks from '~/components/shared/howItWorks.vue'
import ServiceCard from '~/components/shared/ServiceCard.vue'
import SolutionCard from '~/components/shared/SolutionCard.vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    ServiceCard,
    FeatureCard,
    howItWorks,
    SolutionCard,
    GetStarted,
    AppFooter,
    EverythingPocketLayout,
  },
  setup() {
    return {
      modules: [Navigation],
    }
  },
  data() {
    return {
      servicesDataList: [
        {
          subtitle: 'For Individuals',
          title: 'Send Money Instantly',
          description:
            'Free transfers, multi-currency wallet, QR payments, and cashback rewards up to 5%.',
          icon: 'd3:wallet',
          action_text: 'Learn More',
          action_link: '#',
        },
        {
          subtitle: 'For Businesses',
          title: 'Accept Payments Everywhere',
          description:
            'Physical POS, Soft POS, Virtual POS, multi-currency ,Payment Links . Starting from 1.99%.',
          icon: 'd3:pos',
          action_text: 'Try Free',
          action_link: '#',
        },
        {
          subtitle: 'Bizkolay',
          title: 'Run Your Business Smarter',
          description:
            'Free transfers, multi-currency wallet, QR payments, and cashback rewards up to 5%.',
          icon: 'd3:dashboard',
          action_text: 'Try Free',
          action_link: '#',
        },
      ],
      fetureDataList: [
        {
          title: '100% Transparent',
          subtitle: 'No hidden fees, ever',
          icon: 'features:transparent',
        },
        {
          title: 'Bank-Level Security',
          subtitle: '256-bit encryption, biometric auth',
          icon: 'features:security',
        },
        {
          title: 'Lightning Fast',
          subtitle: 'Instant transfers, T+1 settlement',
          icon: 'features:lightningFast',
        },
        {
          title: '24/7 Support',
          subtitle: 'Always here to help',
          icon: 'features:support',
        },
      ],
      solutionsDataList: [
        {
          title: 'Physical POS',
          subtitle: 'Android-based smart terminals',
          price: '$750',
          image: '/assets/images/solutions/AndroidPOS.png',
          imageMaxWidth: '',
        },
        {
          title: 'Soft POS',
          subtitle: 'Your phone is the terminal',
          price: '$750',
          image: '/assets/images/solutions/SoftPOS.png',
          imageMaxWidth: '800',
        },
        {
          title: 'Virtual POS',
          subtitle: 'E-commerce payment gateway',
          price: '$750',
          image: '/assets/images/solutions/VirtualPOS.png',
          imageMaxWidth: '',
        },
        {
          title: 'Payment by Link',
          subtitle: 'Share links via SMS/WhatsApp',
          price: '$750',
          image: '/assets/images/solutions/paymentbylink.png',
          imageMaxWidth: '',
        },
      ],
      companiesLogosDataList: [
        {
          src: '/images/c5.png',
          alt: '',
        },
        {
          src: '/images/c4.png',
          alt: '',
        },
        {
          src: '/images/c3.png',
          alt: '',
        },

        {
          src: '/images/c2.png',
          alt: '',
        },

        {
          src: '/images/c1.png',
          alt: '',
        },
      ],
    }
  },
  created() {
    this.$store.dispatch('GET_COUNTRY_DATA')
  },
}
</script>

<template>
  <div>
    <section class="home-hero">
      <u-container>
        <div>
          <img
            src="/assets/images/home-hero/device.png"
            class="home-hero-device d-none d-md-block"
          />

          <div class="text">
            <h1 class="title mb-6">Your Money, Simplified. Your Business, Empowered.</h1>

            <p class="subtitle mb-6">
              Türkiye’s complete payment platform. Digital wallets, payment solutions, and business
              tools — all in one app.
            </p>

            <div class="mb-4">
              <u-btn to="/register" color="Pink" rounded size="large">
                Open Individual Account
              </u-btn>
            </div>

            <div>
              <u-btn :to="'/login'" variant="outlined" color="White" rounded size="large">
                Start Your Business Account
              </u-btn>
            </div>
          </div>

          <u-img src="/assets/images/home-hero/device.png" class="d-block d-md-none mt-6" />
        </div>

        <div class="services">
          <h2>Value Propositions</h2>

          <Swiper
            :modules="modules"
            :slides-per-view="1.1"
            :space-between="20"
            :breakpoints="{
              768: {
                slidesPerView: 2.1,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }"
            class="services-swiper"
          >
            <SwiperSlide v-for="(rec, index) in servicesDataList" :key="index">
              <ServiceCard
                :subtitle="rec.subtitle"
                :title="rec.title"
                :description="rec.description"
                :icon="rec.icon"
                :action-text="rec.action_text"
                :action-link="rec.action_link"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </u-container>
    </section>

    <section class="features">
      <u-container>
        <div class="d-flex flex-column ga-16">
          <div class="features-header d-flex flex-column ga-6 mb-6 mx-auto">
            <h2>Why Finture</h2>
            <p class="text-h3">
              Transparency, security, speed, and always-on support the four core promises that set
              Finture apart.
            </p>
          </div>

          <u-row class="justify-center">
            <u-col v-for="(f, index) in fetureDataList" :key="index" cols="12" sm="6" md="3">
              <FeatureCard :title="f.title" :subtitle="f.subtitle" :icon="f.icon" />
            </u-col>
          </u-row>
        </div>
      </u-container>
    </section>

    <section class="how-it-work">
      <howItWorks />
    </section>

    <section class="accept-payments">
      <u-container>
        <div class="d-flex flex-column ga-16">
          <div class="accept-payments-header d-flex flex-column ga-6 mb-6 mx-auto">
            <h2>Accept Payments Your Way</h2>
            <p class="text-h3">
              Secure, flexible payment solutions for every way your customers want to pay.
            </p>
          </div>

          <u-row>
            <u-col v-for="(s, index) in solutionsDataList" :key="index" cols="12" sm="6" md="3">
              <SolutionCard
                :title="s.title"
                :subtitle="s.subtitle"
                :price="s.price"
                :image="s.image"
                :image-max-width="s.imageMaxWidth"
              />
            </u-col>
          </u-row>
        </div>
      </u-container>
    </section>

    <section class="everything-pocket">
      <EverythingPocketLayout />
    </section>

    <section class="companies">
      <u-container>
        <div class="d-flex flex-column ga-16">
          <div class="companies-header d-flex flex-column ga-4 ga-md-6 mb-6 mx-auto">
            <h2>Your Money is Safe. Always.</h2>
          </div>

          <div class="d-flex ga-6 justify-space-around flex-wrap">
            <template v-for="(logo, index) in companiesLogosDataList" :key="index">
              <img :src="logo.src" :alt="logo.alt" height="96" class="trust-logo" />
            </template>
          </div>
        </div>
      </u-container>
    </section>

    <section class="footer">
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped>
.features,
.accept-payments,
.companies {
  padding-block: 96px;
}

.companies {
  padding-bottom: 160px;
}

.features-header,
.accept-payments-header,
.companies-header {
  max-width: 800px;
  text-align: center;
}

.companies-header h2 {
  color: var(--Neutral-B30, #777e92);
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
}

.trust-logo {
  opacity: 0.7;
  transition: opacity 0.2s ease;
  max-height: 96px;
  object-fit: none;
}

.trust-logo:hover {
  opacity: 1;
}

.home-hero {
  background-image: url('/assets/images/home-hero/bg-desktop.png');
  background-position: bottom center;
  background-size: cover;
  padding-block-start: 85px;
}

.home-hero .home-hero-device {
  float: inline-end;
  shape-margin: 48px;
  shape-outside: url(/assets/images/home-hero/device.png);
  shape-image-threshold: 0.5;
  margin-top: 60px;
  margin-inline-end: -50px;
  width: 70%;
}

.home-hero .text {
  color: #fff;
}

.home-hero .title {
  font-weight: var(--Weights-Bold, 700);
  font-size: 72px;
  line-height: 84px;
  letter-spacing: var(--Heading-H1-letterSpacing, 0);
}

.home-hero .subtitle {
  font-weight: var(--Weights-Regular, 400);

  font-size: var(--Heading-H4-fontSize, 20px) !important;
  line-height: 30px !important;
  letter-spacing: var(--Heading-H4-letterSpacing, 0);
}

.home-hero .services {
  margin-block-start: 140px;
}

.home-hero .services h2 {
  margin-block-end: 24px;
  color: #fff;
  font-weight: 700;
  font-size: 36px !important;
  line-height: 120% !important;
  letter-spacing: var(--Heading-H1-letterSpacing, 0);
}

.services-swiper {
  padding: 20px 0;
}

:deep(.swiper) {
  overflow: visible;
}

:deep(.swiper-wrapper) {
  align-items: stretch;
}

:deep(.swiper-slide) {
  display: flex;
  align-items: stretch;
  height: auto;
}

:deep(.swiper-slide > *) {
  width: 100%;
}

@media (max-width: 1199.98px) {
  .home-hero .home-hero-device {
    shape-margin: 48px;
    margin-top: 290px;
    width: 70%;
  }
}

@media (max-width: 991.98px) {
  .home-hero {
    background-image: url('/assets/images/home-hero/bg-mobile.png');
  }

  .home-hero .home-hero-device {
    shape-margin: 48px;
    margin-top: 290px;
    width: 70%;
  }
}

@media (max-width: 767.98px) {
  .home-hero .text {
    text-align: center;
  }

  .home-hero .title {
    font-size: 48px !important;
    line-height: 120% !important;
  }

  .home-hero .services {
    margin-block-start: 80px;
  }
}

@media (max-width: 575.98px) {
}
</style>
