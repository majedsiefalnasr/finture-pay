<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

interface GetStartedProps {
  title: string
  subtitle: string
  primaryButtonText: string
  secondaryButtonText: string
  features: Array<{ icon: string; text: string }>
  backgroundImage: string
}

const getStartedProps = ref({
  title: 'Ready to Get Started?',
  subtitle: 'Join Finture. Open your free account in minutes.',
  primaryButtonText: 'Open Individual Account',
  secondaryButtonText: 'Start Your Business',
  features: [
    { icon: 'line:check', text: 'No credit check' },
    { icon: 'line:check', text: 'Free forever' },
    { icon: 'line:check', text: 'No minimum balance' },
  ],
  backgroundImage: '/assets/images/get-started-section-bg.png',
})

const propDefinitions = [
  {
    name: 'title',
    type: 'string',
    default: 'Ready to Get Started?',
  },
  {
    name: 'subtitle',
    type: 'string',
    default: 'Join Finture. Open your free account in minutes.',
  },
  {
    name: 'primaryButtonText',
    type: 'string',
    default: 'Open Individual Account',
  },
  {
    name: 'secondaryButtonText',
    type: 'string',
    default: 'Start Your Business',
  },
  {
    name: 'features',
    type: 'array',
    default: [
      { icon: 'line:check', text: 'No credit check' },
      { icon: 'line:check', text: 'Free forever' },
      { icon: 'line:check', text: 'No minimum balance' },
    ],
  },
  {
    name: 'backgroundImage',
    type: 'string',
    default: '/assets/images/get-started-section-bg.png',
  },
]

const updateProps = (newProps: Partial<GetStartedProps>) => {
  getStartedProps.value = { ...newProps }
}

const componentCode = computed(
  () => `<GetStarted
  title="${getStartedProps.value.title}"
  subtitle="${getStartedProps.value.subtitle}"
  primaryButtonText="${getStartedProps.value.primaryButtonText}"
  secondaryButtonText="${getStartedProps.value.secondaryButtonText}"
  :features="${JSON.stringify(getStartedProps.value.features, null, 2)}"
  backgroundImage="${getStartedProps.value.backgroundImage}"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Get Started
      </p>
      <h3 class="mb-0">Get Started</h3>
      <p class="text-B20 text-body-3 mb-0">
        A call-to-action section with background image, title, buttons, and feature highlights.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <GetStarted v-bind="getStartedProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="getStartedProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="componentCode" />
    </div>
  </div>
</template>
