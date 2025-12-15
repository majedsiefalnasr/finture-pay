<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import FeatureCard from '~/components/shared/service/FeatureCard.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

const featureCardProps = reactive<Record<string, unknown>>({
  title: '100% Transparent',
  subtitle: 'No hidden fees, ever',
  icon: 'features:transparent',
})

const propDefinitions = [
  {
    name: 'title',
    type: 'string',
    default: '100% Transparent',
    description: 'Main title of the feature card.',
  },
  {
    name: 'subtitle',
    type: 'string',
    default: 'No hidden fees, ever',
    description: 'Subtitle text below the title.',
  },
  {
    name: 'icon',
    type: 'select',
    default: 'features:transparent',
    description: 'Icon to display (from features iconset).',
    items: [
      'features:ai',
      'features:banksecurity',
      'features:billing',
      'features:card',
      'features:control',
      'features:currency',
      'features:global',
      'features:lightningFast',
      'features:loyalty',
      'features:merchant',
      'features:multiUsers',
      'features:nfc',
      'features:nocost',
      'features:portability',
      'features:realtime',
      'features:refer',
      'features:regulatory',
      'features:routing',
      'features:seasonal',
      'features:security',
      'features:settlement',
      'features:spendWin',
      'features:subWallet',
      'features:support',
      'features:sync',
      'features:transparent',
    ],
  },
]

const updateProps = (newProps: Record<string, unknown>) => {
  Object.assign(featureCardProps, newProps)
}

const featureCardCode = computed(
  () => `<FeatureCard
  title="${featureCardProps.title}"
  subtitle="${featureCardProps.subtitle}"
  icon="${featureCardProps.icon}"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Feature Card
      </p>
      <h3 class="mb-0">Feature Card</h3>
      <p class="text-B20 text-body-3 mb-0">
        Resize the container to verify responsiveness and visual consistency.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <FeatureCard v-bind="featureCardProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="featureCardProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="featureCardCode" />
    </div>
  </div>
</template>
