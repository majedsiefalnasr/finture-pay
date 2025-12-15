<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import ServiceCard from '~/components/shared/service/ServiceCard.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

const serviceCardProps = reactive<Record<string, unknown>>({
  subtitle: 'For Individuals',
  title: 'Send Money Instantly',
  description: 'Free transfers, multi-currency wallet, QR payments, and cashback rewards up to 5%.',
  icon: 'd3:wallet',
  actionText: 'Learn More',
  actionLink: '#',
})

const propDefinitions = [
  {
    name: 'subtitle',
    type: 'string',
    default: 'For Individuals',
    description: 'Subtitle text displayed above the title.',
  },
  {
    name: 'title',
    type: 'string',
    default: 'Send Money Instantly',
    description: 'Main title of the service card.',
  },
  {
    name: 'description',
    type: 'textarea',
    default: 'Free transfers, multi-currency wallet, QR payments, and cashback rewards up to 5%.',
    description: 'Description text below the title.',
  },
  {
    name: 'icon',
    type: 'select',
    default: 'd3:wallet',
    description: 'Icon to display (from iconsets).',
    items: [
      'd3:add',
      'd3:building',
      'd3:business',
      'd3:campaigns',
      'd3:card',
      'd3:dashboard',
      'd3:digitalCodes',
      'd3:electric',
      'd3:error',
      'd3:expense',
      'd3:faceVerification',
      'd3:id',
      'd3:idBack',
      'd3:imageUser',
      'd3:individual',
      'd3:internet',
      'd3:language',
      'd3:mission',
      'd3:mobile',
      'd3:naturalGas',
      'd3:nfc',
      'd3:notification',
      'd3:payUtility',
      'd3:payWithQr',
      'd3:pos',
      'd3:puzzlePiece',
      'd3:remittance',
      'd3:safe',
      'd3:scanId',
      'd3:selfie',
      'd3:technical',
      'd3:topupMoney',
      'd3:transferMoney',
      'd3:vision',
      'd3:wallet',
      'd3:water',
      'd3:withdrawMoney',
    ],
  },
  {
    name: 'actionText',
    type: 'string',
    default: 'Learn More',
    description: 'Text for the action button.',
  },
  {
    name: 'actionLink',
    type: 'string',
    default: '#',
    description: 'Link for the action button.',
  },
]

const updateProps = (newProps: Record<string, unknown>) => {
  Object.assign(serviceCardProps, newProps)
}

const serviceCardCode = computed(
  () => `<ServiceCard
  subtitle="${serviceCardProps.subtitle}"
  title="${serviceCardProps.title}"
  description="${serviceCardProps.description}"
  icon="${serviceCardProps.icon}"
  actionText="${serviceCardProps.actionText}"
  actionLink="${serviceCardProps.actionLink}"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Service
      </p>
      <h3 class="mb-0">Service Card</h3>
      <p class="text-B20 text-body-3 mb-0">
        Resize the container to verify responsiveness and visual consistency.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <ServiceCard v-bind="serviceCardProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="serviceCardProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="serviceCardCode" />
    </div>
  </div>
</template>
