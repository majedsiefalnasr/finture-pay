<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <foreignObject x="0.487805" y="14.4878" width="63.0244" height="37.0244"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        :style="`backdrop-filter: blur(1.76px); clip-path: url(#bgblur_0_${uniqueId}_clip_path); height: 100%; width: 100%;`"
      ></div
    ></foreignObject>
    <rect
      data-figma-bg-blur-radius="3.5122"
      x="4"
      y="18"
      width="56"
      height="30"
      rx="4"
      fill="#98ACC3"
    />
    <rect x="4" y="17" width="56" height="30" rx="4" :fill="`url(#paint0_linear_${uniqueId})`" />
    <path
      d="M16.792 30.5371L20.9346 28.6953L21.874 31.5635L17.4355 32.5283L20.4766 35.916L18.0166 37.708L15.7412 33.752L13.4785 37.708L11.0186 35.916L14.0479 32.5283L9.62109 31.5635L10.5488 28.6953L14.7031 30.5371L14.2334 26H17.2617L16.792 30.5371ZM33.0449 30.5371L37.1865 28.6953L38.126 31.5635L33.6875 32.5283L36.7295 35.916L34.2686 37.708L31.9941 33.752L29.7314 37.708L27.2705 35.916L30.2998 32.5283L25.874 31.5635L26.8008 28.6953L30.9551 30.5371L30.4854 26H33.5146L33.0449 30.5371ZM49.2969 30.5371L53.4395 28.6953L54.3789 31.5635L49.9404 32.5283L52.9814 35.916L50.5215 37.708L48.2461 33.752L45.9834 37.708L43.5234 35.916L46.5527 32.5283L42.126 31.5635L43.0537 28.6953L47.208 30.5371L46.7383 26H49.7666L49.2969 30.5371Z"
      fill="#6882A7"
    />
    <defs>
      <clipPath :id="`bgblur_0_${uniqueId}_clip_path`" transform="translate(-0.487805 -14.4878)">
        <rect x="4" y="18" width="56" height="30" rx="4" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="34.1875"
        y1="17"
        x2="34.1875"
        y2="53.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
