<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import SolutionCard from '~/components/shared/SolutionCard.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

const solutionCardProps = reactive<Record<string, unknown>>({
  title: 'Physical POS',
  subtitle: 'Android-based smart terminals',
  price: '$750',
  image: '/assets/images/solutions/AndroidPOS.png',
  imageMaxWidth: '',
})

const propDefinitions = [
  {
    name: 'title',
    type: 'string',
    default: 'Physical POS',
    description: 'Main title of the solution card.',
  },
  {
    name: 'subtitle',
    type: 'string',
    default: 'Android-based smart terminals',
    description: 'Subtitle text below the title.',
  },
  {
    name: 'price',
    type: 'string',
    default: '$750',
    description: 'Price displayed on the card.',
  },
  {
    name: 'image',
    type: 'string',
    default: '/assets/images/solutions/AndroidPOS.png',
    description: 'Image source URL or path.',
  },
  {
    name: 'imageMaxWidth',
    type: 'string',
    default: '',
    description: 'Maximum width for the image.',
  },
]

const updateProps = (newProps: Record<string, unknown>) => {
  Object.assign(solutionCardProps, newProps)
}

const solutionCardCode = computed(
  () => `<SolutionCard
  title="${solutionCardProps.title}"
  subtitle="${solutionCardProps.subtitle}"
  price="${solutionCardProps.price}"
  image="${solutionCardProps.image}"
  imageMaxWidth="${solutionCardProps.imageMaxWidth}"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Solution
      </p>
      <h3 class="mb-0">Solution Card</h3>
      <p class="text-B20 text-body-3 mb-0">
        Resize the container to verify responsiveness and visual consistency.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer :width="310">
        <SolutionCard v-bind="solutionCardProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="solutionCardProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="solutionCardCode" />
    </div>
  </div>
</template>
