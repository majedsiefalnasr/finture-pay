<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <path
      d="M40.3828 57H44C44.5523 57 45 57.4477 45 58V59C45 59.5523 44.5523 60 44 60H20C19.4477 60 19 59.5523 19 59V58C19 57.4477 19.4477 57 20 57H23.6182V49.1182H40.3828V57Z"
      :fill="`url(#paint0_linear_${uniqueId})`"
    />
    <rect x="2" y="5" width="60" height="45" rx="4" :fill="`url(#paint1_linear_${uniqueId})`" />
    <rect
      x="6.25"
      y="9.25"
      width="51.5"
      height="36.5"
      rx="1.75"
      fill="#A0B3C8"
      fill-opacity="0.15"
      stroke="#CCD5E1"
      stroke-width="0.5"
    />
    <path
      d="M14.7939 37.6472L23.4998 30.0001L33.9851 33.0149L44.9998 21.5001"
      stroke="#4B6D96"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="23.3967" cy="29.9267" r="4.19118" :fill="`url(#paint2_linear_${uniqueId})`" />
    <circle cx="45.1912" cy="21.1913" r="4.19118" :fill="`url(#paint3_linear_${uniqueId})`" />
    <defs>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="33.0156"
        y1="49.086"
        x2="32.9636"
        y2="60.0117"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#98ACC3" />
        <stop offset="0.724848" stop-color="#CCD5E1" />
        <stop offset="0.726555" stop-color="#C2CDDB" />
      </linearGradient>
      <linearGradient
        :id="`paint1_linear_${uniqueId}`"
        x1="34.3438"
        y1="4.87109"
        x2="34.3438"
        y2="60.154"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
      <linearGradient
        :id="`paint2_linear_${uniqueId}`"
        x1="23.3967"
        y1="25.7355"
        x2="23.3967"
        y2="34.1178"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EE859A" />
        <stop offset="1" stop-color="#E8728C" />
      </linearGradient>
      <linearGradient
        :id="`paint3_linear_${uniqueId}`"
        x1="45.1912"
        y1="17.0001"
        x2="45.1912"
        y2="25.3825"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EE859A" />
        <stop offset="1" stop-color="#E8728C" />
      </linearGradient>
    </defs>
  </svg>
</template>
