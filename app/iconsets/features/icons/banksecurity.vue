<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" :fill="`url(#paint0_linear_${uniqueId})`" />
    <path
      d="M63.3337 44.6667V39.3333C63.3337 31.9695 57.3641 26 50.0003 26C42.6365 26 36.667 31.9695 36.667 39.3333V44.6667M41.467 74H58.5337C63.0141 74 65.2543 74 66.9656 73.1281C68.4709 72.3611 69.6947 71.1372 70.4617 69.6319C71.3337 67.9206 71.3337 65.6804 71.3337 61.2V57.4667C71.3337 52.9862 71.3337 50.746 70.4617 49.0347C69.6947 47.5294 68.4709 46.3056 66.9656 45.5386C65.2543 44.6667 63.0141 44.6667 58.5337 44.6667H41.467C36.9866 44.6667 34.7464 44.6667 33.0351 45.5386C31.5298 46.3056 30.3059 47.5294 29.5389 49.0347C28.667 50.746 28.667 52.9862 28.667 57.4667V61.2C28.667 65.6804 28.667 67.9206 29.5389 69.6319C30.3059 71.1372 31.5298 72.3611 33.0351 73.1281C34.7464 74 36.9866 74 41.467 74Z"
      class="tone1"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50 56.6666V62"
      class="tone2"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="50"
        y1="0"
        x2="50"
        y2="100"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E8EFF8" />
        <stop offset="1" stop-color="#FEFEFE" />
      </linearGradient>
    </defs>
  </svg>
</template>
