<script setup lang="ts">
import type { ComponentPlaygroundCategory } from '~/constants/component-playgrounds'
import { componentPlaygroundCategories } from '~/constants/component-playgrounds'

const categories: ComponentPlaygroundCategory[] = componentPlaygroundCategories

const { setSeo } = useSeoMetaI18n()

setSeo({
  title: 'Components Index | Finture Pay',
  description: 'Quick links to component demo and QA pages.',
})
</script>

<template>
  <u-container class="py-10">
    <div class="d-flex flex-column ga-6">
      <header class="d-flex flex-column ga-2">
        <p class="text-B30 label-2 mb-0">Components / Index</p>
        <h2 class="mb-0">Component Playgrounds</h2>
        <p class="text-B20 text-body-2 mb-0">
          Use this index as a sitemap for component demo pages.
        </p>
      </header>

      <div class="d-flex flex-column ga-4" role="navigation" aria-label="Component playgrounds">
        <u-card
          v-for="category in categories"
          :key="category.title"
          class="pa-6 d-flex flex-column ga-4"
        >
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center ga-2">
              <u-icon v-if="category.icon" :icon="category.icon" size="24" />
              <h4 class="mb-0">{{ category.title }}</h4>
            </div>
            <u-btn
              v-if="category.to"
              :to="category.to"
              variant="text"
              color="BL10"
              append-icon="line:arrow-narrow-right"
              density="comfortable"
            >
              View all
            </u-btn>
          </div>

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
        </u-card>
      </div>
    </div>
  </u-container>
</template>
