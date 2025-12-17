<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <path
      d="M11 13C11 10.7909 12.7909 9 15 9H38.1391C39.1999 9 40.2173 9.42143 40.9675 10.1716L50.8284 20.0325C51.5786 20.7827 52 21.8001 52 22.8609V52.6939C52 54.903 50.2091 56.6939 48 56.6939H15C12.7909 56.6939 11 54.903 11 52.6939V13Z"
      fill="#98ACC3"
    />
    <path
      d="M11 12C11 9.79086 12.7909 8 15 8H38.1391C39.1999 8 40.2173 8.42143 40.9675 9.17157L50.8284 19.0325C51.5786 19.7827 52 20.8001 52 21.8609V51.6939C52 53.903 50.2091 55.6939 48 55.6939H15C12.7909 55.6939 11 53.903 11 51.6939V12Z"
      :fill="`url(#paint0_linear_${uniqueId})`"
    />
    <path
      d="M37 23.5H31.25M25.5 42H31.25M31.25 23.5H29.5C27.0147 23.5 25 25.5147 25 28C25 30.4853 27.0147 32.5 29.5 32.5H33.25C35.8734 32.5 38 34.6266 38 37.25C38 39.8734 35.8734 42 33.25 42H31.25M31.25 23.5V19M31.25 42V46.5"
      stroke="#6882A7"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="33.1016"
        y1="8"
        x2="33.1016"
        y2="66.425"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
