<script setup lang="ts">
import type { ComponentPlaygroundCategory } from '~/constants/component-playgrounds'
import { componentPlaygroundCategories } from '~/constants/component-playgrounds'

const categories: ComponentPlaygroundCategory[] = componentPlaygroundCategories
const route = useRoute()

const isActive = (to: string) => route.path === to
</script>

<template>
  <u-layout>
    <u-navigation-drawer permanent :width="320" class="pa-4 d-flex flex-column ga-4">
      <header class="d-flex flex-column ga-1 mb-10">
        <p class="text-B30 label-3 mb-0">Components</p>
        <h5 class="mb-0">Playground Navigation</h5>
      </header>

      <u-list class="pa-0" density="compact">
        <div v-for="category in categories" :key="category.title" class="d-flex flex-column ga-1">
          <u-list-item
            v-if="category.to"
            :to="category.to"
            :active="isActive(category.to)"
            class="text-body-3 font-weight-medium"
            style="--v-list-prepend-gap: 16px; --v-list-append-gap: 16px"
          >
            <template v-if="category.icon" #prepend>
              <u-icon :icon="category.icon" size="20" />
            </template>
            {{ category.title }}
            <template #append>
              <u-icon
                :icon="isActive(category.to) ? 'line:check' : 'line:arrow-narrow-right'"
                size="16"
              />
            </template>
          </u-list-item>
          <div v-else class="d-flex align-center ga-2 pa-3 text-body-3 font-weight-medium">
            <u-icon v-if="category.icon" :icon="category.icon" size="20" />
            {{ category.title }}
          </div>

          <div class="ml-4 d-flex flex-column ga-1">
            <u-list-item
              v-for="page in category.pages"
              :key="page.to"
              :to="page.to"
              :active="isActive(page.to)"
              :aria-current="isActive(page.to) ? 'page' : undefined"
              class="text-body-3"
            >
              {{ page.label }}
              <template #append>
                <u-icon
                  :icon="isActive(page.to) ? 'line:check' : 'line:arrow-narrow-right'"
                  size="18"
                />
              </template>
            </u-list-item>
          </div>
        </div>
      </u-list>
    </u-navigation-drawer>

    <u-main>
      <u-container class="py-10 px-10">
        <slot />
      </u-container>
    </u-main>
  </u-layout>
</template>
