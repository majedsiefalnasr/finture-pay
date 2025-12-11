<script setup lang="ts">
definePageMeta({
  layout: 'default', // Optional; uses default if omitted
})
</script>

<template>
  <u-container>
    <h1>Home Page</h1>
    <!-- Page-specific content -->
    <u-btn color="primary" text="Vuetify Button"></u-btn>

    <u-icon icon="line:homeLine" size="128" class="two-tones" />
    <u-icon icon="d3:wallet" size="128" />
    <u-icon icon="features:ai" size="128" />
  </u-container>
</template>
