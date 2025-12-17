<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" :fill="`url(#paint0_linear_${uniqueId})`" />
    <path
      d="M50.0002 76.6666C64.7278 76.6666 76.6668 64.7276 76.6668 50C76.6668 35.2724 64.7278 23.3333 50.0002 23.3333C35.2726 23.3333 23.3335 35.2724 23.3335 50C23.3335 64.7276 35.2726 76.6666 50.0002 76.6666Z"
      :fill="`url(#paint1_linear_${uniqueId})`"
      class="tone1"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.146 31.1468L42.4527 42.4535"
      class="tone1"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5469 57.5466L68.8535 68.8532"
      class="tone1"
      stroke-width="4.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5469 42.4535L68.8535 31.1468"
      class="tone1"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.146 68.8532L42.4527 57.5466"
      class="tone1"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.0002 60.6666C55.8912 60.6666 60.6668 55.891 60.6668 50C60.6668 44.1089 55.8912 39.3333 50.0002 39.3333C44.1091 39.3333 39.3335 44.1089 39.3335 50C39.3335 55.891 44.1091 60.6666 50.0002 60.6666Z"
      class="tone2"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="50"
        y1="0"
        x2="50"
        y2="100"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E8EFF8" />
        <stop offset="1" stop-color="#FEFEFE" />
      </linearGradient>
      <linearGradient
        :id="`paint1_linear_${uniqueId}`"
        x1="50.0002"
        y1="23.3333"
        x2="50.0002"
        y2="76.6666"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#CCDAEE" />
      </linearGradient>
    </defs>
  </svg>
</template>
