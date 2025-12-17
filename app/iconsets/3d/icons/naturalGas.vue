<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <path
      d="M29.3366 8.99988C29.0396 13.4553 33.4208 18.5296 35.6485 20.5098C37.4306 19.6187 37.6287 16.9207 37.505 15.683C41.8366 16.9207 50.5 26.4504 50.5 37.2177C50.5 51.4751 38.5594 56.4999 32 56.4999C25.4406 56.4999 13 51.6979 13 37.2177C13 21.7722 23.8911 11.9702 29.3366 8.99988Z"
      :fill="`url(#paint0_linear_${uniqueId})`"
    />
    <path
      d="M25 48.1765C25 42.5329 29.5454 37.2449 32 36C34.4546 37.2449 39 42.5329 39 48.1765C39 53.82 34.4546 54.8617 32 55C29.5453 54.8617 25 53.82 25 48.1765Z"
      fill="#6882A7"
    />
    <defs>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="33.2148"
        y1="8.99988"
        x2="33.2148"
        y2="66.7629"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
