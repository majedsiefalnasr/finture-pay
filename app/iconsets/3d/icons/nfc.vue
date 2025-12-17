<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <rect x="6" y="3" width="31" height="56" rx="3" stroke="#7F97B5" stroke-width="2" />
    <path
      d="M53 22.5C53 22.5 56 26.5 56 32C56 37.5 53 41 53 41M58 17.5C58 17.5 63 23 63 32C63 41 58 46 58 46"
      stroke="#98ACC3"
      stroke-width="2"
      stroke-linecap="round"
    />
    <foreignObject x="14.2744" y="20.3933" width="35.5611" height="23.7073"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        :style="`backdrop-filter: blur(0.99px); clip-path: url(#bgblur_0_${uniqueId}_clip_path); height: 100%; width: 100%;`"
      ></div
    ></foreignObject>
    <rect
      data-figma-bg-blur-radius="1.97561"
      x="16.25"
      y="22.3689"
      width="31.6098"
      height="19.7561"
      rx="2.25"
      fill="#98ACC3"
    />
    <rect
      x="16.25"
      y="21.875"
      width="31.6098"
      height="19.7561"
      rx="2.25"
      :fill="`url(#paint0_linear_${uniqueId})`"
    />
    <rect x="20.2422" y="26.0938" width="10.125" height="11.8125" rx="0.987805" fill="#6882A7" />
    <mask
      :id="`mask0_${uniqueId}`"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="20"
      y="26"
      width="11"
      height="12"
    >
      <rect x="20.2422" y="26.0938" width="10.125" height="11.8125" rx="0.987805" fill="#6882A7" />
    </mask>
    <g :mask="`url(#mask0_${uniqueId})`">
      <path
        d="M27.1787 34.3301C28.4212 34.3302 29.4286 35.3376 29.4287 36.5801V38.375H21.0713V36.5801C21.0714 35.3376 22.0788 34.3301 23.3213 34.3301H27.1787ZM25.25 28.0625C26.7885 28.0625 28.0361 29.3101 28.0361 30.8486C28.0359 32.3869 26.7884 33.6338 25.25 33.6338C23.7116 33.6338 22.4641 32.387 22.4639 30.8486C22.4639 29.3101 23.7115 28.0625 25.25 28.0625Z"
        fill="#B2C1D2"
      />
    </g>
    <path
      d="M43.0234 33.4062C43.4894 33.4063 43.8672 33.784 43.8672 34.25C43.8672 34.716 43.4894 35.0937 43.0234 35.0938H34.0234C33.5574 35.0938 33.1797 34.716 33.1797 34.25C33.1797 33.784 33.5574 33.4062 34.0234 33.4062H43.0234ZM43.0234 29.4688C43.4894 29.4688 43.8672 29.8465 43.8672 30.3125C43.8672 30.7785 43.4894 31.1562 43.0234 31.1562H34.0234C33.5574 31.1562 33.1797 30.7785 33.1797 30.3125C33.1797 29.8465 33.5574 29.4688 34.0234 29.4688H43.0234Z"
      fill="#6882A7"
    />
    <rect x="19" y="6" width="6" height="2" rx="1" fill="#98ACC3" />
    <defs>
      <clipPath :id="`bgblur_0_${uniqueId}_clip_path`" transform="translate(-14.2744 -20.3933)">
        <rect x="16.25" y="22.3689" width="31.6098" height="19.7561" rx="2.25" />
      </clipPath>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="33.2896"
        y1="21.875"
        x2="33.2896"
        y2="46.0762"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
    </defs>
  </svg>
</template>
