<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import MissionStatement from '~/components/shared/MissionStatement.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

const missionStatementProps = reactive<Record<string, unknown>>({
  title: 'Our Mission',
  description:
    'We exist to eliminate financial friction. Every transaction should be instant, transparent, and secure. Every business should have access to enterprise-grade financial tools. Every individual deserves complete control over their money—anytime, anywhere.',
  icon: 'd3:mission',
})

const propDefinitions = [
  {
    name: 'title',
    type: 'string',
    default: 'Our Mission',
    description: 'The main title text displayed in the mission statement.',
  },
  {
    name: 'description',
    type: 'textarea',
    default:
      'We exist to eliminate financial friction. Every transaction should be instant, transparent, and secure. Every business should have access to enterprise-grade financial tools. Every individual deserves complete control over their money—anytime, anywhere.',
    description: 'The description text below the title.',
  },
  {
    name: 'icon',
    type: 'select',
    default: 'd3:mission',
    description: 'The icon to display (from the 3d iconset).',
    options: [
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
]

const updateProps = (newProps: Record<string, unknown>) => {
  Object.assign(missionStatementProps, newProps)
}

const componentCode = computed(
  () => `<MissionStatement
  title="${missionStatementProps.title}"
  description="${missionStatementProps.description}"
  icon="${missionStatementProps.icon}"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Mission Statement
      </p>
      <h3 class="mb-0">Mission Statement</h3>
      <p class="text-B20 text-body-3 mb-0">
        Resize the container to verify responsiveness and visual consistency.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <MissionStatement v-bind="missionStatementProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="missionStatementProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="componentCode" />
    </div>
  </div>
</template>
