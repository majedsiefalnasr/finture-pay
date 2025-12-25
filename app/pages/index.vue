<script>
import EverythingPocketLayout from '~/components/shared/EverythingPocketLayout.vue'
import FeatureCard from '~/components/shared/FeatureCard.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import howItWorks from '~/components/shared/howItWorks.vue'
import ServiceCard from '~/components/shared/ServiceCard.vue'
import SolutionCard from '~/components/shared/SolutionCard.vue'
export default {
  components: {
    ServiceCard,
    FeatureCard,
    howItWorks,
    SolutionCard,
    GetStarted,
    AppFooter,
    EverythingPocketLayout,
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
}
</script>

<template>
  <div>
    <section class="hero-wrapper">
      <u-row align="center">
        <!-- LEFT CONTENT -->
        <u-col cols="12" md="6">
          <h1 class="hero-title">
            Your Money, Simplified.<br />
            Your Business, Empowered.
          </h1>

          <p class="hero-subtitle">
            Türkiye’s complete payment platform.<br />
            Digital wallets, payment solutions,<br />
            and business tools — all in one app.
          </p>

          <div class="hero-actions">
            <u-btn color="error" rounded size="large"> Open Individual Account </u-btn>

            <u-btn variant="outlined" color="white" rounded size="large">
              Start Your Business Account
            </u-btn>
          </div>
        </u-col>

        <!-- RIGHT IMAGE -->
        <u-col cols="12" md="6" class="hero-image-wrapper">
          <u-img src="/images/hero-1.png" max-width="560" contain />
        </u-col>
      </u-row>
    </section>

    <section class="services">
      <u-row class="justify-center">
        <u-col
          v-for="(rec, index) in servicesDataList"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          class="mb-4 d-flex justify-center"
        >
          <ServiceCard
            :subtitle="rec.subtitle"
            :title="rec.title"
            :description="rec.description"
            :icon="rec.icon"
            :action-text="rec.action_text"
            :action-link="rec.action_link"
          />
        </u-col>
      </u-row>
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
          <div class="companies-header d-flex flex-column ga-6 mb-6 mx-auto">
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

/* ////////////////// */
/* .why-finture {
  background-color: #ffffff;
  padding: 100px 24px;
}

.section-title {
  margin-bottom: 12px;
  color: #000;
  font-weight: 700;
  font-size: 36px;
}

.section-subtitle {
  margin: 0 auto;
  max-width: 640px;
  color: #6b7280;
  font-size: 20px;
  line-height: 1.6;
}

.features-row {
  margin: 0 auto;
  max-width: 1200px;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 24px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.08);
  width: 64px;
  height: 64px;
}

.feature-title {
  margin-bottom: 8px;
  color: #000;
  font-weight: 600;
  font-size: 18px;
}

.feature-desc {
  color: #6b7280;
  font-size: 14px;
}
.feature-title {
  margin-top: 120px;
}

.how-it-work {
  margin-top: 100px;
}
.security-section {
  background-color: #ffffff;
  padding: 80px 24px;
}

.companies-title {
  color: #6b7280;
  font-weight: 600;
  font-size: 32px;
}

.logos-row {
  margin: 0 auto;
  margin-bottom: 100px;
  max-width: 1100px;
}

.companies-title {
  margin-top: 120px !important;
}
.everything-pocket {
  margin-top: 170px !important;
}

.hero-wrapper {
  background: linear-gradient(135deg, #0b5fd7, #3a8dde);
  padding: 80px 0 60px;
  color: #fff;
}

.hero-title {
  margin-bottom: 24px;
  font-weight: 800;
  font-size: 48px;
  line-height: 1.2;
}

.hero-subtitle {
  opacity: 0.9;
  margin-bottom: 32px;
  font-size: 16px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero-image-wrapper {
  display: flex;
  justify-content: center;
}

.cards-section {
  margin-top: 80px;
}

.cards-title {
  margin-bottom: 24px;
  color: #fff;
  font-weight: 700;
}

.value-card {
  border-radius: 16px;
  height: 100%;
} */
</style>
