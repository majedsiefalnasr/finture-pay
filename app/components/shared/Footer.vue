<script setup lang="ts">
interface LinkItem {
  title: string
  link: string
}

interface LinkGroup {
  title: string
  links: LinkItem[]
}

interface SocialLink {
  title: string
  icon: string
  link: string
}

interface Props {
  logoSrc?: string
  phoneNumber?: string
  socialLinks?: SocialLink[]
  linkGroups?: LinkGroup[]
  tcmbText?: string
  copyrightText?: string
  footerLinks?: string[]
}

const { logoSrc, phoneNumber, socialLinks, linkGroups, tcmbText, copyrightText, footerLinks } =
  withDefaults(defineProps<Props>(), {
    logoSrc: '/assets/images/logo-dark.svg',
    phoneNumber: '0850 XXX XX XX',
    socialLinks: () => [
      { title: 'Facebook', icon: 'faBrands:facebook', link: 'https://facebook.com/finture' },
      { title: 'Instagram', icon: 'faBrands:instagram', link: 'https://instagram.com/finture' },
      { title: 'X', icon: 'faBrands:twitter', link: 'https://x.com/finture' },
      {
        title: 'LinkedIn',
        icon: 'faBrands:linkedin',
        link: 'https://linkedin.com/company/finture',
      },
      { title: 'YouTube', icon: 'faBrands:youtube', link: 'https://youtube.com/@finture' },
    ],
    linkGroups: () => [
      {
        title: 'Products',
        links: [
          { title: 'Individual', link: '/individual' },
          { title: 'Business', link: '/business' },
          { title: 'POS Solutions', link: '/pos-solutions' },
          { title: 'Bizkolay', link: '/bizkolay' },
        ],
      },
      {
        title: 'Company',
        links: [
          { title: 'About', link: '/about' },
          { title: 'Careers', link: '/careers' },
          { title: 'Blog', link: '/blog' },
          { title: 'Contact', link: '/contact' },
        ],
      },
      {
        title: 'Support',
        links: [
          { title: 'Help Center', link: '/help' },
          { title: 'FAQs', link: '/faqs' },
          { title: 'Fees', link: '/fees' },
          { title: 'System Status', link: '/status' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { title: 'Terms', link: '/terms' },
          { title: 'Privacy', link: '/privacy' },
          { title: 'KVKK', link: '/kvkk' },
          { title: 'Agreements', link: '/agreements' },
        ],
      },
    ],
    tcmbText:
      'Finture is an electronic money institution licensed by the Central Bank of the Republic of Türkiye pursuant to Law No. 6493.',
    copyrightText:
      '©2025 Tekno Tek Teknoloji Ödeme Hizmetleri ve Elektronik Para A.Ş. All rights reserved.',
    footerLinks: () => ['Terms of service', 'Cookie settings'],
  })
</script>

<template>
  <u-container class="footer bg-DBlue py-10 px-4 px-md-16">
    <div class="d-flex flex-column ga-10">
      <!-- Main Content -->
      <u-row>
        <!-- Left Column: Logo, Contact, Social -->
        <u-col
          cols="12"
          md="4"
          class="d-flex flex-column ga-8 align-center align-md-start text-center text-md-start"
        >
          <!-- Logo -->
          <div class="logo-container">
            <img :src="logoSrc" alt="Finture Logo" class="logo" />
          </div>

          <!-- Contact -->
          <div class="d-flex flex-column ga-2">
            <p class="label-2 text-DB90">Call Us</p>
            <p class="label-3 text-DB60">{{ phoneNumber }}</p>
          </div>

          <!-- Social Links -->
          <div class="d-flex flex-column ga-2">
            <p class="label-2 text-DB90">Follow Us</p>
            <div class="d-flex ga-3 mt-2">
              <a
                v-for="social in socialLinks"
                :key="social.title"
                :href="social.link"
                target="_blank"
                rel="noopener noreferrer"
                :title="social.title"
                class="cursor-pointer"
              >
                <u-icon :icon="social.icon" size="24" class="text-DB60" />
              </a>
            </div>
          </div>
        </u-col>

        <!-- Divider -->
        <u-divider class="my-6 d-block d-md-none" />

        <!-- Link Groups -->
        <u-col cols="12" md="8">
          <u-row class="px-6 px-md-0">
            <u-col
              v-for="group in linkGroups"
              :key="group.title"
              cols="6"
              sm="3"
              class="link-group d-flex flex-column ga-2"
            >
              <p class="label-2 text-DB90">{{ group.title }}</p>
              <div class="d-flex flex-column ga-2">
                <NuxtLink
                  v-for="link in group.links"
                  :key="link.title"
                  :to="link.link"
                  class="label-3 text-DB60 cursor-pointer text-decoration-none"
                >
                  {{ link.title }}
                </NuxtLink>
              </div>
            </u-col>
          </u-row>
        </u-col>
      </u-row>

      <!-- Divider -->
      <u-divider class="my-6" />

      <!-- Credits -->
      <u-row>
        <!-- TCMB Section -->
        <u-col
          cols="12"
          md="8"
          class="d-flex flex-column flex-md-row ga-3 align-center align-md-start"
        >
          <div class="tcmb-logo">
            <img src="/assets/images/tcmb-logo.png" alt="TCMB" class="tcmb-image" />
          </div>
          <p class="label-4 text-DB60 text-center text-md-left" style="max-width: 320px">
            {{ tcmbText }}
          </p>
        </u-col>

        <!-- Copyright and Footer Links -->
        <u-col cols="12" md="4" class="d-flex flex-column ga-4 align-center align-md-end">
          <p class="label-3 text-DB60 text-center text-md-right">
            {{ copyrightText }}
          </p>
          <div class="d-flex ga-4 align-center">
            <p
              v-for="link in footerLinks"
              :key="link"
              class="label-3 text-DB60 underline cursor-pointer"
            >
              {{ link }}
            </p>
          </div>
        </u-col>
      </u-row>
    </div>
  </u-container>
</template>

<style scoped>
.footer {
  background-color: #002f6c; /* DBlue */
}

.logo-container {
  display: flex;
  align-items: center;
  width: 142px;
  height: 52px;
}

.logo {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.link-group {
  min-width: 120px;
}

.tcmb-logo {
  width: 114px;
  height: 47px;
}

.tcmb-image {
  opacity: 0.64;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.divider {
  width: 100%;
}

.cursor-pointer {
  cursor: pointer;
}

.underline {
  text-decoration: underline;
}
</style>
