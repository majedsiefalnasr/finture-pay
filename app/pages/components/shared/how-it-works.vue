<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import HowItWorks from '~/components/shared/howItWorks.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

const howItWorksProps = reactive<Record<string, unknown>>({
  title: 'How It Works',
  subtitle:
    'Open your account in 2 minutes, verify with digital KYC, and start using Finture instantly.',
  list: [
    {
      label: 'Sign Up',
      description: '2 minutes',
      image: '/assets/images/how-it-works/01.png',
    },
    {
      label: 'Verify',
      description: 'Quick Digital KYC',
      image: '/assets/images/how-it-works/02.png',
    },
    {
      label: 'Start Using',
      description: 'Instantly',
      image: '/assets/images/how-it-works/03.png',
    },
  ],
  actionLabel: 'Register with Finture',
  autoplayInterval: 5000,
})

const propDefinitions = [
  {
    name: 'title',
    type: 'string',
    default: 'How It Works',
    description: 'Main title of the feature showcase.',
  },
  {
    name: 'subtitle',
    type: 'string',
    default:
      'Open your account in 2 minutes, verify with digital KYC, and start using Finture instantly.',
    description: 'Subtitle text below the title.',
  },
  {
    name: 'actionLabel',
    type: 'string',
    default: 'Register with Finture',
    description: 'Label for the action button.',
  },
  {
    name: 'autoplayInterval',
    type: 'number',
    default: 5000,
    description: 'Autoplay interval in milliseconds.',
  },
]

const updateProps = (newProps: Record<string, unknown>) => {
  Object.assign(howItWorksProps, newProps)
}

const howItWorksCode = computed(
  () => `<HowItWorks
  title="${howItWorksProps.title}"
  subtitle="${howItWorksProps.subtitle}"
  :list="features"
  action-label="${howItWorksProps.actionLabel}"
  :on-action="handleAction"
  :autoplay-interval="${howItWorksProps.autoplayInterval}"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Feature Showcase
      </p>
      <h3 class="mb-0">Feature Showcase</h3>
      <p class="text-B20 text-body-3 mb-0">
        Resize the container to verify responsiveness and visual consistency.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <HowItWorks
          :title="howItWorksProps.title as string"
          :subtitle="howItWorksProps.subtitle as string"
          :list="howItWorksProps.list as any"
          :action-label="howItWorksProps.actionLabel as string"
          :autoplay-interval="howItWorksProps.autoplayInterval as number"
        />
      </ResizableContainer>

      <PropsEditor
        :props-data="howItWorksProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="howItWorksCode" />
    </div>
  </div>
</template>
