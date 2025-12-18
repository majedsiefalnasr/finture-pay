<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import PageHeader from '~/components/shared/PageHeader.vue'

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
})

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
] as PropDefinition[]

const updateProps = (newProps: Partial<PageHeaderProps>) => {
  pageHeaderProps.value = { ...pageHeaderProps.value, ...newProps }
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

  code += '\n/>'
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
        />
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
