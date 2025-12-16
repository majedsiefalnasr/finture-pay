<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import Footer from '~/components/shared/Footer.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

const footerProps = ref({
  logoSrc: '/assets/images/logo-dark.svg',
  phoneNumber: '0850 XXX XX XX',
  socialLinks: [
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
  linkGroups: [
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
  footerLinks: ['Terms of service', 'Cookie settings'],
})

const propDefinitions = [
  {
    name: 'logoSrc',
    type: 'string',
    default: "'/assets/images/logo-dark.svg'",
    description: 'Source URL for the logo image',
  },
  {
    name: 'phoneNumber',
    type: 'string',
    default: "'0850 XXX XX XX'",
    description: 'Phone number displayed in the footer',
  },
  {
    name: 'socialLinks',
    type: 'SocialLink[]',
    default: 'Array of social media links with title, icon, and link',
    description: 'Array of social media platform links',
  },
  {
    name: 'linkGroups',
    type: 'LinkGroup[]',
    default: 'Array of link groups for navigation',
    description: 'Groups of navigation links organized by category',
  },
  {
    name: 'tcmbText',
    type: 'string',
    default: 'TCMB licensing text',
    description: 'Text about TCMB licensing',
  },
  {
    name: 'copyrightText',
    type: 'string',
    default: 'Copyright notice text',
    description: 'Copyright and legal notice text',
  },
  {
    name: 'footerLinks',
    type: 'string[]',
    default: "['Terms of service', 'Cookie settings']",
    description: 'Additional footer links',
  },
]

const updateProps = (newProps: Record<string, unknown>) => {
  footerProps.value = { ...newProps }
}

const componentCode = computed(
  () => `<Footer
  :logo-src="footerProps.logoSrc"
  :phone-number="footerProps.phoneNumber"
  :social-links="footerProps.socialLinks"
  :link-groups="footerProps.linkGroups"
  :tcmb-text="footerProps.tcmbText"
  :copyright-text="footerProps.copyrightText"
  :footer-links="footerProps.footerLinks"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Footer
      </p>
      <h3 class="mb-0">Footer</h3>
      <p class="text-B20 text-body-3 mb-0">
        Responsive footer component with logo, contact information, social media links, navigation
        groups, and legal information.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <Footer v-bind="footerProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="footerProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="componentCode" />
    </div>
  </div>
</template>
