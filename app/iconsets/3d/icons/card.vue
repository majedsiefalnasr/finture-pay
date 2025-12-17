<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <foreignObject x="0.390149" y="11.8659" width="63.2197" height="42.1463"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        :style="`backdrop-filter: blur(1.76px); clip-path: url(#bgblur_0_${uniqueId}_clip_path); height: 100%; width: 100%;`"
      ></div
    ></foreignObject>
    <rect
      data-figma-bg-blur-radius="3.5122"
      x="3.90234"
      y="15.3781"
      width="56.1951"
      height="35.122"
      rx="4"
      fill="#98ACC3"
    />
    <rect
      x="3.90234"
      y="14.5"
      width="56.1951"
      height="35.122"
      rx="4"
      :fill="`url(#paint0_linear_${uniqueId})`"
    />
    <rect x="10.0488" y="21.5244" width="7.90244" height="7.90244" rx="1.7561" fill="#6882A7" />
    <circle cx="51.9824" cy="42.8105" r="3.72507" fill="#EB758A" />
    <circle cx="47.1396" cy="42.8105" r="3.72507" fill="#D5456F" />
    <rect x="10.0488" y="33.8171" width="6.14634" height="2.63415" rx="1.31707" fill="#6882A7" />
    <rect x="10.0488" y="41.7195" width="13.1707" height="2.63415" rx="1.31707" fill="#98ACC3" />
    <rect x="18.8291" y="33.8171" width="6.14634" height="2.63415" rx="1.31707" fill="#6882A7" />
    <rect x="27.6099" y="33.8171" width="6.14634" height="2.63415" rx="1.31707" fill="#6882A7" />
    <rect x="36.3901" y="33.8171" width="6.14634" height="2.63415" rx="1.31707" fill="#6882A7" />
    <defs>
      <clipPath :id="`bgblur_0_${uniqueId}_clip_path`" transform="translate(-0.390149 -11.8659)">
        <rect x="3.90234" y="15.3781" width="56.1951" height="35.122" rx="4" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="34.195"
        y1="14.5"
        x2="34.195"
        y2="57.5244"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
