<script>
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import SupportCard from '~/components/shared/SupportCard.vue'

export default {
  components: {
    AppFooter,
    GetStarted,
    PageHeader,
    SupportCard,
  },
  data() {
    return {
      socials: [
        {
          name: 'linkedin',
          icon: 'faBrands:linkedin',
          text: 'linkedin.com/company/finture',
        },
        {
          name: 'x',
          icon: 'faBrands:twitter',
          text: '@finture_tr',
        },
        {
          name: 'instagram',
          icon: 'faBrands:instagram',
          text: '@finture.tr',
        },
        {
          name: 'facebook',
          icon: 'faBrands:facebook',
          text: 'facebook.com/finture.tr',
        },
        {
          name: 'youtube',
          icon: 'faBrands:youtube',
          text: 'youtube.com/finture',
        },
      ],
      data: [
        {
          icon: 'd3:individual',
          title: 'For Individual Users',
          items: [
            { icon: 'line:mail01', title: 'destek@finturepay.com', description: '', is_link: true },
            {
              icon: 'line:phone',
              title: '0850 XXX XX XX',
              description: 'Available 7 days/week, 8:00-22:00',
              is_link: false,
            },
            {
              icon: 'line:messageSquare01',
              title: 'Livechat',
              description: 'Available in mobile app and website',
              is_link: false,
            },
          ],
        },
        {
          icon: 'd3:business',
          title: 'For Business Users',
          items: [
            {
              icon: 'line:mail01',
              title: 'isletme@finturepay.com',
              description: '',
              is_link: true,
            },
            {
              icon: 'line:phone',
              title: '0850 XXX XX XX',
              description: 'Available 7 days/week, 8:00-22:00',
              is_link: false,
            },
            {
              icon: 'line:userCheck01',
              title: 'Dedicated Account Manager',
              description: 'For Professional and Enterprise accounts',
              is_link: false,
            },
          ],
        },
        {
          icon: 'd3:technical',
          title: 'Technical Support',
          items: [
            {
              icon: 'line:mail01',
              title: 'teknik@finturepay.com',
              description: '',
              is_link: true,
            },
            {
              icon: 'line:bookClosed',
              title: 'Developer Documentation',
              description: 'developers.finturepay.com',
              is_link: false,
            },
            {
              icon: 'line:lifeBuoy02',
              title: 'API Support Portal',
              description: 'Available 24/7',
              is_link: false,
            },
          ],
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <section class="page-header">
      <PageHeader
        :variant="'help-center'"
        :title="'We,re Here to Help'"
        :description="'Whether you have questions about Finture services, need technical support, or want to explore partnership opportunities, our team is ready to assist.'"
        :category="'Contact'"
        :blog-info="''"
        :search-placeholder="''"
      />
    </section>

    <section class="customer-support">
      <h2 class="text-center mb-6">Customer Support</h2>
      <u-row cols="12" class="text-center customer-support-row" md="12">
        <u-col
          v-for="(r, index) in data"
          :key="index"
          cols="12"
          md="4"
          class="text-center customer-support-row"
        >
          <SupportCard :icon="r.icon" :title="r.title" :items="r.items" />
        </u-col>
      </u-row>
    </section>

    <section class="office-address">
      <h2 class="">Office Address</h2>
      <hr class="line-style" />

      <u-row cols="12" md="12">
        <!-- LEFT INFO -->
        <u-col cols="12" md="6">
          <div class="info-block">
            <span class="label">LEGAL NAME</span>
            <p class="value">
              TEKNO TEK TEKNOLOJİ ÖDEME HİZMETLERİ VE ELEKTRONİK PARA ANONİM ŞİRKETİ
            </p>
          </div>

          <div class="info-block">
            <span class="label">ADDRESS</span>
            <p class="value">
              Yenibosna Merkez Mahallesi Kavak Sokak No 27 B Blok Kat 11 Daire 74 Bahçelievler –
              İstanbul – Türkiye – 34197
            </p>
          </div>

          <u-row class="info-row">
            <u-col cols="12" sm="6">
              <span class="label">TAX NUMBER</span>
              <p class="value">8360943829 Yenibosna</p>
            </u-col>

            <u-col cols="12" sm="6">
              <span class="label">TRADE REGISTRY</span>
              <p class="value">456423-5</p>
            </u-col>
          </u-row>

          <div class="info-block">
            <span class="label">KEP ADDRESS</span>
            <p class="value">tekno@hs06.kep.tr</p>
          </div>
        </u-col>

        <!-- RIGHT MAP -->
        <u-col cols="12" md="6">
          <div class="map-wrapper">
            <iframe
              src="https://www.google.com/maps?q=Yenibosna%20Istanbul&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </u-col>
      </u-row>
    </section>

    <section class="follow">
      <u-card class="follow-card" elevation="0">
        <h3 class="title">Follow Us</h3>
        <p class="subtitle">Stay updated with product launches, campaigns, and fintech insights:</p>

        <u-sheet class="social-box" rounded>
          <u-row justify="space-between" align="center">
            <u-col
              v-for="item in socials"
              :key="item.name"
              cols="12"
              sm="4"
              md="2"
              class="text-center"
            >
              <u-icon :icon="item.icon" size="28" class="mb-2 custom-icon" />
              <div class="link-text">{{ item.text }}</div>
            </u-col>
          </u-row>
        </u-sheet>
      </u-card>
    </section>

    <section class="footer">
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped>
.customer-support {
  justify-content: center;
  background: #f5f7f9;
  padding-bottom: 70px;
}

.customer-support h2 {
  padding: 60px;
}

.customer-support-row {
  justify-content: center;
  margin: auto;
  width: 95%;
}

.office-address {
  justify-content: center;
  margin: auto;
  width: 95%;
}

.office-address h2 {
  margin-top: 50px;
  margin-bottom: 50px;
}
.office-wrapper {
  background: #fff;
  padding: 60px 80px;
}

/* TITLE */
.title {
  color: #111;
  font-weight: 800;
  font-size: 42px;
}

/* TEXT BLOCKS */
.info-block {
  margin-bottom: 28px;
}

.info-row {
  margin-bottom: 28px;
}

.label {
  display: block;
  margin-bottom: 6px;
  color: #9ca3af;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.value {
  max-width: 590px;
  color: #111827;
  font-size: 16px;
  line-height: 1.7;
}

/* MAP */
.map-wrapper {
  border-radius: 6px;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.map-wrapper iframe {
  border: 0;
  width: 100%;
  height: 100%;
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .office-wrapper {
    padding: 32px 20px;
  }

  .title {
    font-size: 32px;
  }

  .map-wrapper {
    margin-top: 24px;
    height: 300px;
  }
}

.line-style {
  margin-bottom: 30px;
  color: #e3e5e7;
}
.follow-card {
  border-radius: 12px;
  background: #ffffff;
  padding: 24px;
}

.title {
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 20px;
}

.subtitle {
  margin-bottom: 20px;
  color: #6b7280;
  font-size: 14px;
}

.social-box {
  background: #f5f6f8;
  padding: 20px;
}

.link-text {
  color: #1f2937;
  font-size: 13px;
  word-break: break-word;
}

.follow {
  justify-content: center;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 90px;
  border: 1px solid #e5e6ea;
  border-radius: 13px;
  background: #e5e6ea !important;
  width: 95%;
}
.custom-icon {
  color: #002f6c;
}
</style>
