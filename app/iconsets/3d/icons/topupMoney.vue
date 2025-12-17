<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <foreignObject x="4" y="5" width="56" height="56"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        :style="`backdrop-filter: blur(2px); clip-path: url(#bgblur_0_${uniqueId}_clip_path); height: 100%; width: 100%;`"
      ></div
    ></foreignObject>
    <circle data-figma-bg-blur-radius="4" cx="32" cy="33" r="24" fill="#98ACC3" />
    <circle cx="32" cy="32" r="24" :fill="`url(#paint0_linear_${uniqueId})`" />
    <path
      d="M32 22.3333V43.6666M32 43.6666L40 35.6666M32 43.6666L24 35.6666"
      stroke="#6882A7"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <clipPath :id="`bgblur_0_${uniqueId}_clip_path`" transform="translate(-4 -5)">
        <circle cx="32" cy="33" r="24" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="32"
        y1="8"
        x2="32"
        y2="67.3548"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
