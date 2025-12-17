<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <foreignObject x="0.487805" y="11.3659" width="63.2197" height="42.1463"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        :style="`backdrop-filter: blur(1.76px); clip-path: url(#bgblur_0_${uniqueId}_clip_path); height: 100%; width: 100%;`"
      ></div
    ></foreignObject>
    <rect
      data-figma-bg-blur-radius="3.5122"
      x="4"
      y="14.8781"
      width="56.1951"
      height="35.122"
      rx="4"
      fill="#98ACC3"
    />
    <rect
      x="4"
      y="14"
      width="56.1951"
      height="35.122"
      rx="4"
      :fill="`url(#paint0_linear_${uniqueId})`"
    />
    <path
      d="M4 35H60V45.4878C60 47.4275 58.4275 49 56.4878 49H7.5122C5.57246 49 4 47.4275 4 45.4878V35Z"
      :fill="`url(#paint1_linear_${uniqueId})`"
      fill-opacity="0.54"
    />
    <rect x="11" y="21" width="10" height="10" rx="1.7561" fill="#98ACC3" />
    <path
      d="M37.5 28C38.3284 28.0001 39 28.6716 39 29.5C39 30.3284 38.3284 30.9999 37.5 31H27.5C26.6716 31 26 30.3284 26 29.5C26 28.6716 26.6716 28 27.5 28H37.5ZM43.5 22C44.3284 22.0001 45 22.6716 45 23.5C45 24.3284 44.3284 24.9999 43.5 25H27.5C26.6716 25 26 24.3284 26 23.5C26 22.6716 26.6716 22 27.5 22H43.5Z"
      fill="#6882A7"
    />
    <path
      d="M25 43C25.5522 43.0001 26 43.4478 26 44C26 44.5522 25.5522 44.9999 25 45H9C8.44772 45 8 44.5523 8 44C8 43.4477 8.44772 43 9 43H25ZM33 39C33.5522 39.0001 34 39.4478 34 40C34 40.5522 33.5522 40.9999 33 41H9C8.44772 41 8 40.5523 8 40C8 39.4477 8.44772 39 9 39H33Z"
      fill="#B2C1D2"
    />
    <path
      d="M36 43C36.5523 43 37 43.4477 37 44C37 44.5523 36.5523 45 36 45H31C30.4477 45 30 44.5523 30 44C30 43.4477 30.4477 43 31 43H36ZM47 43C47.5523 43 48 43.4477 48 44C48 44.5523 47.5523 45 47 45H42C41.4477 45 41 44.5523 41 44C41 43.4477 41.4477 43 42 43H47ZM45 39C45.5522 39.0001 46 39.4478 46 40C46 40.5522 45.5522 40.9999 45 41H37C36.4477 41 36 40.5523 36 40C36 39.4477 36.4477 39 37 39H45Z"
      fill="#B2C1D2"
    />
    <g opacity="0.5">
      <path
        d="M11 24H13C13.5523 24 14 24.4477 14 25V27C14 27.5523 13.5523 28 13 28H11"
        stroke="#4B6D96"
        stroke-width="0.4"
      />
      <path
        d="M21 24H19C18.4477 24 18 24.4477 18 25V27C18 27.5523 18.4477 28 19 28H21"
        stroke="#4B6D96"
        stroke-width="0.4"
      />
      <path d="M14 24.5C15 24.3333 15.5 23 15 22" stroke="#4B6D96" stroke-width="0.4" />
      <path d="M14 27.5C15 27.6667 15.5 29 15 30" stroke="#4B6D96" stroke-width="0.4" />
      <path
        d="M18.1963 24.5C17.1963 24.3333 16.6963 23 17.1963 22"
        stroke="#4B6D96"
        stroke-width="0.4"
      />
      <path d="M18 27.5C17 27.6667 16.5 29.5 17.5 30" stroke="#4B6D96" stroke-width="0.4" />
      <path
        d="M20 23C20 22.4477 19.5523 22 19 22H13C12.4477 22 12 22.4477 12 23M12 29C12 29.5523 12.4477 30 13 30H19C19.5523 30 20 29.5523 20 29"
        stroke="#4B6D96"
        stroke-width="0.4"
      />
    </g>
    <defs>
      <clipPath :id="`bgblur_0_${uniqueId}_clip_path`" transform="translate(-0.487805 -11.3659)">
        <rect x="4" y="14.8781" width="56.1951" height="35.122" rx="4" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="34.2927"
        y1="14"
        x2="34.2927"
        y2="57.0244"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
      <linearGradient
        :id="`paint1_linear_${uniqueId}`"
        x1="34.1875"
        y1="35"
        x2="34.1875"
        y2="52.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#E5EAEE" />
      </linearGradient>
    </defs>
  </svg>
</template>
