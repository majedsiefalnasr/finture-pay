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
      d="M29.2445 35.2627H23.3696C22.9839 35.2627 22.7435 34.8445 22.9375 34.5112L34.2446 15.0885C34.5177 14.6193 35.2377 14.8605 35.1732 15.3995L33.7506 27.2824C33.715 27.58 33.9473 27.8418 34.247 27.8418H40.1212C40.5089 27.8418 40.7491 28.264 40.551 28.5973L29.0833 47.8921C28.8051 48.3601 28.0853 48.1095 28.158 47.5699L29.74 35.8295C29.7804 35.5295 29.5472 35.2627 29.2445 35.2627Z"
      fill="#6882A7"
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
