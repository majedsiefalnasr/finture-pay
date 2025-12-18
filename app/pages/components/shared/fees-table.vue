<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import FeesTable from '~/components/shared/FeesTable.vue'

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

interface FeesTableProps {
  title: string
  icon: string
  fees: Array<{ description: string; fee: string }>
}

const feesTableProps = ref<FeesTableProps>({
  title: 'Individual Account Fees',
  icon: 'line:user01',
  fees: [
    { description: 'Account Opening & Maintenance', fee: 'Free' },
    { description: 'Monthly Account Fee', fee: 'Free' },
    { description: 'Digital Wallet Maintenance', fee: 'Free' },
    { description: 'Account Closure', fee: 'Free' },
  ],
})

const propDefinitions: PropDefinition[] = [
  {
    name: 'title',
    type: 'string',
    default: 'Individual Account Fees',
    description: 'The title of the fees table',
  },
  {
    name: 'icon',
    type: 'string',
    default: 'line:user01',
    description: 'The icon to display in the header',
  },
  {
    name: 'fees',
    type: 'array',
    default: [],
    description: 'Array of fee items with description and fee amount',
  },
]

const updateProps = (newProps: Partial<FeesTableProps>) => {
  feesTableProps.value = { ...feesTableProps.value, ...newProps }
}

const componentCode = computed(() => {
  const props = feesTableProps.value
  let code = `<FeesTable\n  title="${props.title}"\n  icon="${props.icon}"\n  :fees="["`

  props.fees.forEach((fee, index) => {
    code += `\n    { description: '${fee.description}', fee: '${fee.fee}' }`
    if (index < props.fees.length - 1) code += ','
  })

  code += '\n  ]"\n/>'
  return code
})
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Fees Table
      </p>
      <h3 class="mb-0">Fees Table</h3>
      <p class="text-B20 text-body-3 mb-0">
        A table component for displaying account fees with customizable items and styling.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <FeesTable v-bind="feesTableProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="feesTableProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="componentCode" />
    </div>
  </div>
</template>
