<script>
import FeatureCard from '~/components/shared/FeatureCard.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import MissionStatement from '~/components/shared/MissionStatement.vue'
import PageHeader from '~/components/shared/PageHeader.vue'

export default {
  components: {
    PageHeader,
    MissionStatement,
    FeatureCard,
    AppFooter,
    GetStarted,
  },
  data() {
    return {
      ourValuesContent: [
        {
          title: 'Security First',
          subtitle:
            'Bank-grade encryption, multi-factor authentication, and PCI DSS compliance protect every transaction',
          icon: 'features:security',
        },
        {
          title: 'Transparency Always',
          subtitle: 'No hidden fees, clear pricing,real-time notifications',
          icon: 'features:transparent',
        },
        {
          title: 'Innovation Driven',
          subtitle:
            'Continuously evolving our platform with AI-powered insights and cutting-edge features',
          icon: 'features:support',
        },
        {
          title: 'Customer Obsessed',
          subtitle: '24/7 support, intuitive interfaces, and solutions designed around your needs',
          icon: 'features:support',
        },
        {
          title: 'Regulatory Excellence',
          subtitle: 'Full compliance with MASAK, TCMB, and international financial standards',
          icon: 'features:regulatory',
        },
      ],
    }
  },
}
</script>
<template>
  <section class="page-header">
    <PageHeader
      :variant="'help-center'"
      :title="'Building the Future of Financial Freedom'"
      :description="'Finture is revolutionizing financial services by combining cutting-edge technology with human-centered design.'"
      :category="'About Us'"
      :blog-info="''"
      :search-placeholder="''"
    />
  </section>
  
  <section class="how-we-are">
    <h6 class="text-center text-primary">WHO WE ARE</h6>
    <div class="text-center how-description">
      <p>
        As a fully licensed and regulated e-money institution operating under Turkish financial
        regulations, we provide secure, innovative, and accessible payment solutions that empower
        every user—from individuals managing daily expenses to enterprises optimizing complex
        financial operations.
      </p>
    </div>
  </section>

  <section class="mission">
    <u-row class="justify-center">
      <u-col cols="12" md="6" class="mission-card">
        <MissionStatement
          :title="'Our Mission'"
          :description="'We exist to eliminate financial friction. Every transaction should be instant, transparent, and secure. Every business should have access to enterprise-grade financial tools. Every individual deserves complete control over their money—anytime, anywhere.'"
          :icon="'d3:mission'"
        />
      </u-col>
      <u-col ols="12" md="6" class="mission-card">
        <MissionStatement
          :title="'Our Vision'"
          :description="'To become Turkey,s most trusted financial technology partner, setting new standards for innovation, security, and customer experience in the digital payments ecosystem.'"
          :icon="'d3:vision'"
        />
      </u-col>
    </u-row>
  </section>

  <section class="our-values">
    <h3 class="text-center mb-6">Our Values</h3>
    <div class="text-center our-values-description">
      <p>The core promises that define every interaction at Finture.</p>
    </div>

    <u-row cols="12" class="text-center values-feature">
      <u-col
        v-for="(r, index) in ourValuesContent"
        :key="index"
        cols="12"
        md="4"
        class="text-center values-feature-card"
      >
        <FeatureCard :title="r.title" :subtitle="r.subtitle" :icon="r.icon" />
      </u-col>
    </u-row>
  </section>

  <section class="why-finture">
    <u-row align="center">
      <!-- Left Content -->
      <u-col cols="12" md="6" class="why-finture-title">
        <h3 class="font-weight-bold mb-4">Why Finture?</h3>

        <p class="text-body-1 text-medium-emphasis mb-6 why-finture-description">
          Finture has earned trust through reliability, innovation, and unwavering commitment to
          security. Our technology infrastructure handles millions of transactions daily.
        </p>

        <u-list density="compact" class="bg-transparent">
          <u-list-item>
            <template #prepend>
              <u-icon color="primary" icon="line:check"></u-icon>
            </template>
            <u-list-item-title class="why-finture-items">99.9% Uptime Guarantee</u-list-item-title>
          </u-list-item>

          <u-list-item>
            <template #prepend>
              <u-icon color="primary" icon="line:check"></u-icon>
            </template>
            <u-list-item-title class="why-finture-items">
              Dedicated 24/7 Personalized Support
            </u-list-item-title>
          </u-list-item>

          <u-list-item>
            <template #prepend>
              <u-icon color="primary" icon="line:check"></u-icon>
            </template>
            <u-list-item-title class="why-finture-items">
              Certified Security Standards
            </u-list-item-title>
          </u-list-item>
        </u-list>
      </u-col>

      <!-- Right Image -->
      <u-col cols="12" md="6" class="d-flex justify-center">
        <div class="image-wrapper">
          <!-- Status Badge -->
          <div class="status-badge">
            <u-icon size="40" color="primary" icon="features:lightningFast"></u-icon>
            <div class="ml-2">
              <div class="text-caption">System Status</div>
              <div class="font-weight-bold">99.9% Online</div>
            </div>
          </div>

          <u-img
            src="/images/why-festures.jpg"
            alt="Analytics Dashboard"
            class="rounded-xl"
            cover
            height="360"
          />
        </div>
      </u-col>
    </u-row>
  </section>

  <section class="footer">
    <GetStarted />
    <AppFooter />
  </section>
</template>

<style scoped>
.how-description {
  justify-content: center;
  margin: auto;
  width: 55%;
  text-align: center;
}

.our-values-description {
  justify-content: center;
  margin: auto;
  width: 70%;
  text-align: center;
}
.how-we-are {
  margin-top: 100px;
  margin-bottom: 100px;
}
.mission-card {
  padding: 70px;
}
.mission,
.why-finture {
  background: #f5f7f9;
}

.our-values {
  margin-top: 100px;
  margin-bottom: 50px;
}

.our-values-title {
  justify-content: center;
  width: 80%;
}

.values-feature {
  justify-content: center;
}

.values-feature-card {
  padding: 70px;
}

.image-wrapper {
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  background: white;
  padding: 12px;
  width: 100%;
  max-width: 580px;
}

.status-badge {
  display: flex;
  position: absolute;
  top: 16px;
  left: -20px;
  align-items: center;
  z-index: 10;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: white;
  padding: 10px 14px;
}

.why-finture-title {
  padding: 100px;
}
.why-finture-items {
  font-weight: 600;
}
.why-finture {
  padding: 70px;
}

@media (max-width: 980px) {
  .how-description {
    justify-content: center;
    margin: auto;
    width: 80%;
    text-align: center;
  }

  .why-finture-title {
    padding: 1px;
  }
  .why-finture-title h3 {
    text-align: center;
  }
  .why-finture {
    padding: 30px;
  }
  .why-finture-description {
    text-align: center !important;
  }
}
</style>
