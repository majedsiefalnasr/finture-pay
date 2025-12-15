<script setup lang="ts">
import type { ComponentPlaygroundCategory } from '~/constants/component-playgrounds'
import { componentPlaygroundCategories } from '~/constants/component-playgrounds'

definePageMeta({
  layout: 'components-playground',
})

const category: ComponentPlaygroundCategory | undefined = componentPlaygroundCategories.find(
  (cat) => cat.title === 'Shared / Service'
)

const { setSeo } = useSeoMetaI18n()

setSeo({
  title: 'Shared Components | Finture Pay',
  description: 'Component playgrounds for shared UI elements.',
})
</script>

<template>
  <div class="d-flex flex-column ga-6">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        Shared
      </p>
      <div class="d-flex align-center ga-4">
        <u-icon v-if="category?.icon" :icon="category.icon" size="48" />
        <h2 class="mb-0">Shared Components</h2>
      </div>
      <p class="text-B20 text-body-2 mb-0">Playground pages for shared UI components.</p>
    </header>

    <div v-if="category" class="d-flex flex-column ga-4">
      <div class="d-flex flex-column ga-3">
        <div
          v-for="page in category.pages"
          :key="page.to"
          class="d-flex align-center justify-space-between ga-3"
        >
          <div class="d-flex flex-column ga-1">
            <NuxtLink :to="page.to" class="text-decoration-none text-B10 font-weight-medium">
              {{ page.label }}
            </NuxtLink>
            <p v-if="page.description" class="text-B30 text-body-3 mb-0">
              {{ page.description }}
            </p>
          </div>
          <u-btn
            :to="page.to"
            variant="text"
            color="BL10"
            append-icon="line:arrow-narrow-right"
            density="comfortable"
          >
            Open
          </u-btn>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-B20">No shared components found.</p>
    </div>
  </div>
</template>
