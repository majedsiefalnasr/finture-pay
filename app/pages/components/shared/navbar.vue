<script setup lang="ts">
import CodeViewer from '~/components/playground/CodeViewer.vue'
import PropsEditor from '~/components/playground/PropsEditor.vue'
import ResizableContainer from '~/components/playground/ResizableContainer.vue'
import Navbar from '~/components/shared/Navbar.vue'

// Available only in development mode
if (!import.meta.env.DEV) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

definePageMeta({
  layout: 'components-playground',
})

interface NavLink {
  title: string
  path: string
}

interface NavbarProps {
  logoSrc: string
  logoAlt: string
  navLinks: NavLink[]
}

const navbarProps = ref<NavbarProps>({
  logoSrc: '/assets/images/logo.svg',
  logoAlt: 'Finture Logo',
  navLinks: [
    { title: 'Individual', path: '/individual' },
    { title: 'Business', path: '/business' },
    { title: 'Fees and Commissions', path: '/fees' },
    { title: 'Blog', path: '/blog' },
    { title: 'Help Center', path: '/help' },
  ],
})

const propDefinitions = [
  {
    name: 'logoSrc',
    type: 'string',
    default: '/assets/images/logo.svg',
    description: 'Path to the logo image',
  },
  {
    name: 'logoAlt',
    type: 'string',
    default: 'Finture Logo',
    description: 'Alt text for the logo',
  },
  {
    name: 'navLinks',
    type: 'array',
    default: 'Default navigation links',
    description: 'Array of navigation links with title and path',
  },
]

const updateProps = (newProps: Record<string, unknown>) => {
  navbarProps.value = { ...navbarProps.value, ...newProps } as NavbarProps
}

const componentCode = computed(
  () => `<Navbar
  :logo-src="${navbarProps.value.logoSrc}"
  :logo-alt="${navbarProps.value.logoAlt}"
  :nav-links="${JSON.stringify(navbarProps.value.navLinks).replace(/"/g, "'")}"
/>`
)
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Navbar
      </p>
      <h3 class="mb-0">Navbar</h3>
      <p class="text-B20 text-body-3 mb-0">
        Responsive main navigation bar with logo, navigation links, and action buttons. Features
        mobile hamburger menu for smaller screens.
      </p>
    </header>

    <div class="d-flex flex-column ga-10">
      <ResizableContainer>
        <Navbar v-bind="navbarProps" />
      </ResizableContainer>

      <PropsEditor
        :props-data="navbarProps"
        :prop-definitions="propDefinitions"
        @update="updateProps"
      />

      <CodeViewer :code="componentCode" />
    </div>
  </div>
</template>
