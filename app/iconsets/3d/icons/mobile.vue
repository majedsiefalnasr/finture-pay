<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <foreignObject x="12.4878" y="1.4878" width="38.0244" height="63.0244"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        :style="`backdrop-filter: blur(1.76px); clip-path: url(#bgblur_0_${uniqueId}_clip_path); height: 100%; width: 100%;`"
      ></div
    ></foreignObject>
    <rect
      data-figma-bg-blur-radius="3.5122"
      x="16"
      y="5"
      width="31"
      height="56"
      rx="4"
      fill="#98ACC3"
    />
    <rect x="16" y="4" width="31" height="56" rx="4" :fill="`url(#paint0_linear_${uniqueId})`" />
    <rect x="28" y="8" width="7" height="2" rx="1" fill="#6882A7" />
    <rect x="18" y="13" width="27" height="38" rx="1.59146" fill="#6882A7" />
    <circle cx="31.5" cy="55" r="2.5" fill="#6882A7" />
    <defs>
      <clipPath :id="`bgblur_0_${uniqueId}_clip_path`" transform="translate(-12.4878 -1.4878)">
        <rect x="16" y="5" width="31" height="56" rx="4" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="32.7109"
        y1="4"
        x2="32.7109"
        y2="72.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
