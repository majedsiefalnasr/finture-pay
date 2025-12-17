<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <circle cx="22" cy="21.0667" r="12" fill="#98ACC3" />
    <circle cx="22" cy="20" r="12" :fill="`url(#paint0_linear_${uniqueId})`" />
    <path
      d="M24.4999 15.5488H21.6101M18.7794 24.6565H21.6101M21.6101 15.5488H20.7486C19.5251 15.5488 18.5332 16.5406 18.5332 17.7641C18.5332 18.9877 19.5251 19.9795 20.7486 19.9795H22.5947C23.8862 19.9795 24.9332 21.0265 24.9332 22.318C24.9332 23.6095 23.8862 24.6565 22.5947 24.6565H21.6101M21.6101 15.5488V13.3334M21.6101 24.6565V26.8718"
      stroke="#6882A7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="36.5" cy="40.5" r="16.5" fill="#98ACC3" />
    <circle cx="36.5" cy="39.4" r="16.5" :fill="`url(#paint1_linear_${uniqueId})`" />
    <path
      d="M40.9998 32.83H36.4648M32.2098 46.52H36.4648M36.4648 32.83H35.1698C33.3307 32.83 31.8398 34.3209 31.8398 36.16C31.8398 37.9991 33.3307 39.49 35.1698 39.49H37.9448C39.8861 39.49 41.4598 41.0637 41.4598 43.005C41.4598 44.9463 39.8861 46.52 37.9448 46.52H36.4648M36.4648 32.83V29.5M36.4648 46.52V49.85"
      stroke="#6882A7"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="22"
        y1="8"
        x2="22"
        y2="37.6774"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
      <linearGradient
        :id="`paint1_linear_${uniqueId}`"
        x1="36.5"
        y1="22.9"
        x2="36.5"
        y2="63.7065"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
