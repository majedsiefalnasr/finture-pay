<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <foreignObject x="3" y="6" width="56" height="56"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        :style="`backdrop-filter: blur(2px); clip-path: url(#bgblur_0_${uniqueId}_clip_path); height: 100%; width: 100%;`"
      ></div
    ></foreignObject>
    <circle data-figma-bg-blur-radius="4" cx="31" cy="34" r="24" fill="#98ACC3" />
    <circle cx="31" cy="33" r="24" :fill="`url(#paint0_linear_${uniqueId})`" />
    <mask
      id="mask0_8070_23013"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="7"
      y="9"
      width="48"
      height="48"
    >
      <circle cx="31" cy="33" r="24" :fill="`url(#paint1_linear_${uniqueId})`" />
    </mask>
    <g mask="url(#mask0_8070_23013)">
      <path d="M6 24H56M6 43H56" stroke="#6882A7" stroke-width="1.6" />
      <ellipse cx="31" cy="33" rx="7" ry="23" stroke="#6882A7" stroke-width="1.6" />
    </g>
    <defs>
      <clipPath :id="`bgblur_0_${uniqueId}_clip_path`" transform="translate(-3 -6)">
        <circle cx="31" cy="34" r="24" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="32.875"
        y1="9"
        x2="32.875"
        y2="67.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
      <linearGradient
        :id="`paint1_linear_${uniqueId}`"
        x1="32.875"
        y1="9"
        x2="32.875"
        y2="67.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
