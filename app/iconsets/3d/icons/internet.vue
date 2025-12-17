<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <foreignObject x="0.487805" y="8.4878" width="63.0244" height="49.0244"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        :style="`backdrop-filter: blur(1.76px); clip-path: url(#bgblur_0_${uniqueId}_clip_path); height: 100%; width: 100%;`"
      ></div
    ></foreignObject>
    <rect
      data-figma-bg-blur-radius="3.5122"
      x="4"
      y="12"
      width="56"
      height="42"
      rx="4"
      fill="#98ACC3"
    />
    <rect x="4" y="11" width="56" height="42" rx="4" :fill="`url(#paint0_linear_${uniqueId})`" />
    <path d="M4 22H60" stroke="#BCC9D7" stroke-width="0.5" />
    <path
      d="M50.8984 41H48.3359L47.0859 36.1797L45.8359 41H43.2734L40.75 33.1875H43.125L44.5234 38.6328L46.1016 33.1875H48.0625L49.6484 38.6562L51.0469 33.1875H53.4219L50.8984 41Z"
      fill="#6882A7"
    />
    <path
      d="M36.0234 41H33.4609L32.2109 36.1797L30.9609 41H28.3984L25.875 33.1875H28.25L29.6484 38.6328L31.2266 33.1875H33.1875L34.7734 38.6562L36.1719 33.1875H38.5469L36.0234 41Z"
      fill="#6882A7"
    />
    <path
      d="M21.1484 41H18.5859L17.3359 36.1797L16.0859 41H13.5234L11 33.1875H13.375L14.7734 38.6328L16.3516 33.1875H18.3125L19.8984 38.6562L21.2969 33.1875H23.6719L21.1484 41Z"
      fill="#6882A7"
    />
    <path
      d="M9 15C10.1046 15 11 15.8954 11 17C11 18.1046 10.1046 19 9 19C7.89543 19 7 18.1046 7 17C7 15.8954 7.89543 15 9 15Z"
      fill="#6882A7"
    />
    <path
      d="M16 15C17.1046 15 18 15.8954 18 17C18 18.1046 17.1046 19 16 19C14.8954 19 14 18.1046 14 17C14 15.8954 14.8954 15 16 15Z"
      fill="#6882A7"
    />
    <path
      d="M23 15C24.1046 15 25 15.8954 25 17C25 18.1046 24.1046 19 23 19C21.8954 19 21 18.1046 21 17C21 15.8954 21.8954 15 23 15Z"
      fill="#6882A7"
    />
    <path
      d="M16 15C17.1046 15 18 15.8954 18 17C18 18.1046 17.1046 19 16 19C14.8954 19 14 18.1046 14 17C14 15.8954 14.8954 15 16 15Z"
      fill="#EB758A"
    />
    <path
      d="M9 15C10.1046 15 11 15.8954 11 17C11 18.1046 10.1046 19 9 19C7.89543 19 7 18.1046 7 17C7 15.8954 7.89543 15 9 15Z"
      fill="#D5456F"
    />
    <defs>
      <clipPath :id="`bgblur_0_${uniqueId}_clip_path`" transform="translate(-0.487805 -8.4878)">
        <rect x="4" y="12" width="56" height="42" rx="4" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="34.1875"
        y1="11"
        x2="34.1875"
        y2="62.45"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
