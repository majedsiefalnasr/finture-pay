<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import ServiceCard from '~/components/shared/ServiceCard.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})
interface PropDefinition {
  name: string
  type: string
  default: unknown
  description: string
  options?: string[]
}
interface PageHeaderProps {
  variant: 'default' | 'blog' | 'help-center'
  title: string
  description?: string
  category: string
  blogDate?: string
  blogReadTime?: string
  searchPlaceholder?: string
  showFooter?: boolean
}

const pageHeaderProps = ref<PageHeaderProps>({
  variant: 'default',
  title: 'Building the Future of\nFinancial Freedom',
  description:
    'Finture is revolutionizing financial services by combining cutting-edge technology with human-centered design.',
  category: 'About Us',
  blogDate: 'October 24, 2025',
  blogReadTime: '5 min read',
  searchPlaceholder: "Search for answers (e.g. 'Reset Password', 'Fees')",
  showFooter: true,
})

const servicesDataList = [
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
    description: 'Manage your business finances, track expenses, generate reports, and more.',
    icon: 'd3:business',
    action_text: 'Get Started',
    action_link: '#',
  },
]

const propDefinitions = [
  {
    name: 'variant',
    type: 'select',
    options: ['default', 'blog', 'help-center'],
    default: 'default',
    description: 'The variant of the header',
  },
  {
    name: 'title',
    type: 'string',
    default: 'Building the Future of Financial Freedom',
    description: 'The main title text',
  },
  {
    name: 'description',
    type: 'textarea',
    default: '-',
    description: 'The description text',
  },
  {
    name: 'category',
    type: 'string',
    default: 'About Us',
    description: 'The category badge text',
  },
  {
    name: 'blogDate',
    type: 'string',
    default: '-',
    description: 'The blog post date',
  },
  {
    name: 'blogReadTime',
    type: 'string',
    default: '-',
    description: 'The estimated read time',
  },
  {
    name: 'searchPlaceholder',
    type: 'string',
    default: "Search for answers (e.g. 'Reset Password', 'Fees')",
    description: 'The search input placeholder',
  },
  {
    name: 'showFooter',
    type: 'boolean',
    default: true,
    description: 'Whether to show the footer slot content',
  },
] as PropDefinition[]

const updateProps = (newProps: Partial<PageHeaderProps>) => {
  console.log('updateProps called with:', newProps)
  console.log('showFooter before:', pageHeaderProps.value.showFooter)
  pageHeaderProps.value = { ...pageHeaderProps.value, ...newProps }
  console.log('showFooter after:', pageHeaderProps.value.showFooter)
}

const componentCode = computed(() => {
  const props = pageHeaderProps.value
  let code = `<PageHeader\n  title="${props.title}"\n  description="${props.description}"\n  category="${props.category}"`

  if (props.variant !== 'default') {
    code += `\n  variant="${props.variant}"`
  }

  if (props.variant === 'blog') {
    code += `\n  :blog-info="{ date: '${props.blogDate}', readTime: '${props.blogReadTime}' }"`
  }

  if (props.variant === 'help-center' && props.searchPlaceholder) {
    code += `\n  search-placeholder="${props.searchPlaceholder}"`
  }

  if (props.showFooter) {
    code +=
      '\n>\n  <!-- Optional footer slot -->\n  <template #footer>\n    <Swiper\n      :slides-per-view="1.1"\n      :space-between="20"\n      :breakpoints="{\n        768: {\n          slidesPerView: 2.1,\n          spaceBetween: 24,\n        },\n        1200: {\n          slidesPerView: 3,\n          spaceBetween: 24,\n        },\n      }"\n      class="services-swiper"\n    >\n      <SwiperSlide v-for="(rec, index) in servicesDataList" :key="index">\n        <ServiceCard\n          :subtitle="rec.subtitle"\n          :title="rec.title"\n          :description="rec.description"\n          :icon="rec.icon"\n          :action-text="rec.action_text"\n          :action-link="rec.action_link"\n        />\n      </SwiperSlide>\n    </Swiper>\n  </template>\n</PageHeader>'
  } else {
    code += '\n/>'
  }

  return code
})
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Page Header
      </p>
      <h3 class="mb-0">Page Header</h3>
      <p class="text-B20 text-body-3 mb-0">
        Versatile page header component with variants for default, blog, and help center pages.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <PageHeader
          :variant="pageHeaderProps.variant"
          :title="pageHeaderProps.title"
          :description="pageHeaderProps.description"
          :category="pageHeaderProps.category"
          :blog-info="
            pageHeaderProps.variant === 'blog' &&
            pageHeaderProps.blogDate &&
            pageHeaderProps.blogReadTime
              ? { date: pageHeaderProps.blogDate, readTime: pageHeaderProps.blogReadTime }
              : undefined
          "
          :search-placeholder="
            pageHeaderProps.variant === 'help-center'
              ? pageHeaderProps.searchPlaceholder
              : undefined
          "
        >
          <template v-if="pageHeaderProps.showFooter" #footer>
            <Swiper
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
          </template>
        </PageHeader>
      </ResizableContainer>

      <PropsEditor
        :props-data="pageHeaderProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="componentCode" />
    </div>
  </div>
</template>

<style scoped>
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
</style>
