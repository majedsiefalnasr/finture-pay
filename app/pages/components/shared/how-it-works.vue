<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import FeatureShowcase from '~/components/shared/howItWorks.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

const featureShowcaseProps = reactive<Record<string, unknown>>({
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
  Object.assign(featureShowcaseProps, newProps)
}

const featureShowcaseCode = computed(
  () => `<FeatureShowcase
  title="${featureShowcaseProps.title}"
  subtitle="${featureShowcaseProps.subtitle}"
  :list="features"
  action-label="${featureShowcaseProps.actionLabel}"
  :on-action="handleAction"
  :autoplay-interval="${featureShowcaseProps.autoplayInterval}"
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
        <FeatureShowcase
          :title="featureShowcaseProps.title as string"
          :subtitle="featureShowcaseProps.subtitle as string"
          :list="featureShowcaseProps.list as any"
          :action-label="featureShowcaseProps.actionLabel as string"
          :autoplay-interval="featureShowcaseProps.autoplayInterval as number"
        />
      </ResizableContainer>

      <PropsEditor
        :props-data="featureShowcaseProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="featureShowcaseCode" />
    </div>
  </div>
</template>
