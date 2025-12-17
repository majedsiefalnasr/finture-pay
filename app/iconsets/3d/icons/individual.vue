<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <g :clip-path="`url(#clip0_${uniqueId})`">
      <foreignObject x="0.487805" y="9.4878" width="63.0244" height="47.0244"
        ><div
          xmlns="http://www.w3.org/1999/xhtml"
          style="
            backdrop-filter: blur(1.76px);
            clip-path: url(#bgblur_1_${uniqueId}_clip_path);
            height: 100%;
            width: 100%;
          "
        ></div
      ></foreignObject>
      <rect
        data-figma-bg-blur-radius="3.5122"
        x="4"
        y="13"
        width="56"
        height="40"
        rx="4"
        fill="#98ACC3"
      />
      <rect x="4" y="12" width="56" height="40" rx="4" :fill="`url(#paint0_linear_${uniqueId})`" />
      <path
        d="M37.8057 34.0557C40.6744 34.0557 43 36.3812 43 39.25V41.3887C43 43.0762 41.6319 44.4443 39.9443 44.4443H23.4443C22.0944 44.4443 21 43.35 21 42V39.25C21 36.3812 23.3256 34.0557 26.1943 34.0557H37.8057ZM31.6943 20C35.2382 20 38.1113 22.8732 38.1113 26.417C38.1112 29.9607 35.2381 32.833 31.6943 32.833C28.1507 32.8329 25.2775 29.9606 25.2773 26.417C25.2773 22.8732 28.1506 20.0001 31.6943 20Z"
        fill="#6187B0"
      />
      <circle
        cx="52.9931"
        cy="50.0174"
        r="10.9757"
        transform="rotate(-30 52.9931 50.0174)"
        fill="#EB758A"
      />
      <circle
        cx="52.9931"
        cy="50.0174"
        r="10.9757"
        transform="rotate(-30 52.9931 50.0174)"
        :fill="`url(#paint1_linear_${uniqueId})`"
      />
      <path
        d="M49 50L51.88 53L57 47"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath :id="`bgblur_1_${uniqueId}_clip_path`" transform="translate(-0.487805 -9.4878)">
        <rect x="4" y="13" width="56" height="40" rx="4" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="34.1875"
        y1="12"
        x2="34.1875"
        y2="61"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
      <linearGradient
        :id="`paint1_linear_${uniqueId}`"
        x1="58.9697"
        y1="41.5484"
        x2="46.3669"
        y2="58.9546"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EB758A" />
        <stop offset="1" stop-color="#D5456F" stop-opacity="0.5" />
      </linearGradient>
      <clipPath :id="`clip0_${uniqueId}`">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
