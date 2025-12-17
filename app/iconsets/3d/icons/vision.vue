<script setup lang="ts">
const uniqueId = Math.random().toString(36).substr(2, 9)
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none">
    <g :clip-path="`url(#clip0_${uniqueId})`">
      <path
        d="M26.0212 29.4844C26.4281 31.6295 24.9594 33.6792 22.7974 33.9837L5.17188 36.4655C5.14966 36.4698 5.12788 36.4765 5.10547 36.4802C5.03947 36.4909 4.97335 36.4978 4.90723 36.5026L4.88735 36.5062C4.88643 36.5064 4.88552 36.5059 4.88522 36.505C4.88495 36.5042 4.88417 36.5036 4.88331 36.5037C2.82899 36.6311 0.744514 33.9383 0.15625 30.322C-0.436596 26.6774 0.708701 23.4393 2.72654 22.9472C2.72712 22.9471 2.72754 22.9465 2.72754 22.9459C2.72754 22.9454 2.72789 22.9449 2.72841 22.9447L19.1653 17.0574C21.3773 16.2651 23.7739 17.6363 24.2118 19.9448L26.0212 29.4844Z"
        fill="#6882A7"
      />
      <path
        d="M33.4609 32.4066L10.3369 35.6635C10.3084 35.6692 10.2798 35.6773 10.251 35.682C10.1765 35.6941 10.1019 35.7023 10.0273 35.7074L10.0156 35.7094L10.0146 35.7074C7.81316 35.8452 5.57865 32.9588 4.94824 29.0834C4.31291 25.1775 5.54106 21.7068 7.7041 21.181V21.1791L29.8281 13.2543L33.4609 32.4066Z"
        fill="#A8B7C4"
      />
      <path
        d="M33.4609 32.4066L10.3369 35.6635C10.3084 35.6692 10.2798 35.6773 10.251 35.682C10.1765 35.6941 10.1019 35.7023 10.0273 35.7074L10.0156 35.7094L10.0146 35.7074C7.81316 35.8452 5.57865 32.9588 4.94824 29.0834C4.31291 25.1775 5.54106 21.7068 7.7041 21.181V21.1791L29.8281 13.2543L33.4609 32.4066Z"
        fill="#A4B5CA"
      />
      <path
        d="M32.5474 39.303L32.7524 39.3821L32.6646 39.6077L40.5464 60.1136L36.4438 61.6907L30.311 45.7337L24.1782 61.6907L20.0757 60.1136L27.9565 39.6077L27.8696 39.3821L28.0737 39.303L28.6499 37.805L30.311 38.4427L31.9722 37.805L32.5474 39.303Z"
        :fill="`url(#paint2_linear_${uniqueId})`"
      />
      <circle cx="30.5929" cy="34.8754" r="5.73598" :fill="`url(#paint1_linear_${uniqueId})`" />
      <path
        d="M56.4043 31.0511L22.9365 35.765C22.8939 35.7736 22.8517 35.7853 22.8086 35.7924C22.7008 35.8099 22.5924 35.8211 22.4844 35.8285L22.4668 35.8314L22.4658 35.8285C19.279 36.0282 16.0444 31.8505 15.1318 26.2406C14.2122 20.5868 15.9902 15.5643 19.1211 14.8031V14.7992L51.1465 3.32751L56.4043 31.0511Z"
        :fill="`url(#paint2_linear_${uniqueId})`"
      />
      <ellipse
        cx="54.1083"
        cy="17.1095"
        rx="8.93782"
        ry="14.1223"
        transform="rotate(-9.23915 54.1083 17.1095)"
        :fill="`url(#paint3_linear_${uniqueId})`"
      />
      <ellipse
        cx="54.5067"
        cy="16.9501"
        rx="5.67092"
        ry="10.0034"
        transform="rotate(-9.23915 54.5067 16.9501)"
        :fill="`url(#paint4_linear_${uniqueId})`"
      />
      <path
        d="M12.4287 31.1921L25.8127 25.3154L33.4606 9.5415"
        stroke="#4B6D96"
        stroke-width="1.91199"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3848 62.5993C13.3848 60.4873 15.0968 58.7753 17.2087 58.7753H43.9766C46.0886 58.7753 47.8006 60.4873 47.8006 62.5993H13.3848Z"
        fill="#7F97B5"
      />
      <circle cx="32.9827" cy="10.0195" r="3.34599" :fill="`url(#paint5_linear_${uniqueId})`" />
      <circle cx="25.3348" cy="25.3154" r="2.86799" :fill="`url(#paint6_linear_${uniqueId})`" />
      <circle cx="11.473" cy="31.5294" r="2.38999" :fill="`url(#paint7_linear_${uniqueId})`" />
    </g>
    <defs>
      <linearGradient
        :id="`paint0_linear_${uniqueId}`"
        x1="30.5921"
        y1="34.8754"
        x2="26.1473"
        y2="46.0032"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#98ACC3" />
        <stop offset="1" stop-color="#C2CDDB" />
      </linearGradient>
      <linearGradient
        :id="`paint1_linear_${uniqueId}`"
        x1="30.1149"
        y1="33.9194"
        x2="30.955"
        y2="40.6315"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#98ACC3" />
        <stop offset="0.724848" stop-color="#CCD5E1" />
        <stop offset="1" stop-color="#C2CDDB" />
      </linearGradient>
      <linearGradient
        :id="`paint2_linear_${uniqueId}`"
        x1="37.2687"
        y1="3.23439"
        x2="37.2687"
        y2="43.1706"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E5EAEE" />
        <stop offset="1" stop-color="#B2C1D2" />
      </linearGradient>
      <linearGradient
        :id="`paint3_linear_${uniqueId}`"
        x1="49.8678"
        y1="24.7335"
        x2="68.8906"
        y2="6.03524"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#B2C1D2" />
        <stop offset="1" stop-color="#E5EAEE" />
      </linearGradient>
      <linearGradient
        :id="`paint4_linear_${uniqueId}`"
        x1="59.4795"
        y1="16.0644"
        x2="49.4296"
        y2="18.3039"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6882A7" />
        <stop offset="1" stop-color="#335A88" />
      </linearGradient>
      <linearGradient
        :id="`paint5_linear_${uniqueId}`"
        x1="32.9827"
        y1="6.67352"
        x2="32.9827"
        y2="13.3655"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EE859A" />
        <stop offset="1" stop-color="#E8728C" />
      </linearGradient>
      <linearGradient
        :id="`paint6_linear_${uniqueId}`"
        x1="25.3348"
        y1="22.4474"
        x2="25.3348"
        y2="28.1834"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#969CAE" />
        <stop offset="1" stop-color="#777E92" />
      </linearGradient>
      <linearGradient
        :id="`paint7_linear_${uniqueId}`"
        x1="11.473"
        y1="29.1394"
        x2="11.473"
        y2="33.9194"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EE859A" />
        <stop offset="1" stop-color="#E8728C" />
      </linearGradient>
      <clipPath :id="`clip0_${uniqueId}`">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
