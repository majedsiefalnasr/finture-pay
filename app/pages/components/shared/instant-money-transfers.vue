<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import InstantMoneyTransfers from '~/components/shared/InstantMoneyTransfers.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

const componentNameProps = reactive<Record<string, unknown>>({
  title: 'Instant Money Transfers',
  description:
    'Send money to anyone in Turkey using just their phone number, email, or Finture username. Transfers complete in seconds, 24/7—even on holidays and weekends.',
  icon: 'line:switchHorizontal01',
  image: '/assets/images/instant-money-transfers-example.png',
  imagePosition: 'end',
})

const propDefinitions = [
  {
    name: 'title',
    type: 'string',
    default: 'Instant Money Transfers',
    description: 'The main title of the component.',
  },
  {
    name: 'description',
    type: 'string',
    default:
      'Send money to anyone in Turkey using just their phone number, email, or Finture username. Transfers complete in seconds, 24/7—even on holidays and weekends.',
    description: 'The description text below the title.',
  },
  {
    name: 'icon',
    type: 'string',
    default: 'line:switchHorizontal01',
    description: 'The icon identifier from the line iconset.',
  },
  {
    name: 'image',
    type: 'string',
    default: '/assets/images/instant-money-transfers-example.png',
    description: 'URL of the image for desktop view.',
  },
  {
    name: 'imagePosition',
    type: 'select',
    default: 'end',
    description: 'Position of the image on desktop: start or end.',
    items: ['start', 'end'],
  },
]

const updateProps = (newProps: Record<string, unknown>) => {
  Object.assign(componentNameProps, newProps)
}

const componentCode = computed(
  () => `<InstantMoneyTransfers
  title="${componentNameProps.title}"
  description="${componentNameProps.description}"
  icon="${componentNameProps.icon}"
  image="${componentNameProps.image}"
  image-position="${componentNameProps.imagePosition}"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Instant Money Transfers
      </p>
      <h3 class="mb-0">Instant Money Transfers</h3>
      <p class="text-B20 text-body-3 mb-0">
        A component for displaying instant money transfer feature with icon, title, description and
        responsive image.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <InstantMoneyTransfers v-bind="componentNameProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="componentNameProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="componentCode" />
    </div>
  </div>
</template>
