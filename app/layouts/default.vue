<script setup lang="ts">
// Kumbh sans font
import '@fontsource-variable/kumbh-sans'
import Navbar from '~/components/shared/Navbar.vue'

// Layout-specific logic
</script>

<template>
  <u-app>
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main content of the application -->
    <u-main>
      <slot />
      <!-- Page content injected here -->
    </u-main>
  </u-app>
</template>
