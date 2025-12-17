<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <path
      d="M50 39.6053C50 49.5464 41.9411 57.6053 32 57.6053C22.0589 57.6053 14 49.5464 14 39.6053C14 27 31.0526 7.94174 32 7.39478C32.9474 8.34214 50 27 50 39.6053Z"
      fill="#98ACC3"
    />
    <path
      d="M50 38.6053C50 48.5464 41.9411 56.6053 32 56.6053C22.0589 56.6053 14 48.5464 14 38.6053C14 26 31.0526 6.94174 32 6.39478C32.9474 7.34214 50 26 50 38.6053Z"
      :fill="`url(#paint0_linear_${uniqueId})`"
    />
    <path
      d="M21.6133 37.7632C21.2975 41.5527 23.0343 49.1316 32.508 49.1316"
      stroke="#6882A7"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="32"
        y1="6.39478"
        x2="32"
        y2="68.4831"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
