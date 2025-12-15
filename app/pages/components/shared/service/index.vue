<script setup lang="ts">
import ResizableContainer from '~/components/shared/ResizableContainer.vue'
import ServiceCard from '~/components/shared/service/ServiceCard.vue'

definePageMeta({
  layout: 'components-playground',
})
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <header class="d-flex flex-column ga-2 mb-5">
      <p class="text-B30 label-2 mb-0">
        <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
        <NuxtLink to="/components/shared" class="text-decoration-none text-B30">Shared</NuxtLink> /
        Service
      </p>
      <h3 class="mb-0">Service Card Playground</h3>
      <p class="text-B20 text-body-3 mb-0">
        Resize the container to verify responsiveness and visual consistency.
      </p>
    </header>

    <ResizableContainer>
      <ServiceCard />
    </ResizableContainer>
  </div>
</template>
