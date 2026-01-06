<script setup lang="ts">
import floatingShape from '/assets/images/floating-shape.svg'

interface Props {
  variant?: 'default' | 'primary'
  title?: string
  subtitle?: string
  icon?: string
}

withDefaults(defineProps<Props>(), {
  title: '100% Transparent',
  subtitle: 'No hidden fees, ever',
  icon: 'features:transparent',
})
</script>

<template>
  <div
    class="text-center d-flex flex-column align-center justify-center"
    :class="variant === 'primary' ? 'highlighted text-white ga-12' : 'ga-4'"
  >
    <div class="icon w-100">
      <u-icon :icon="icon" size="100" class="two-tone-icon" />
      <u-img v-if="variant === 'primary'" :src="floatingShape" class="floating" />
    </div>

    <div class="d-flex flex-column ga-2">
      <template v-if="variant !== 'primary'">
        <h5>{{ title }}</h5>
      </template>
      <template v-if="variant === 'primary'">
        <h4>{{ title }}</h4>
      </template>
      <p :class="variant === 'primary' ? 'text-B80' : 'text-B20'">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.highlighted {
  position: relative;
  border-radius: 24px;
  background: var(--Blue-B20, #326cba);
  padding: 50px;
  overflow: hidden;

  > *:not(.icon) {
    position: relative;
    z-index: 1;
  }

  .icon {
    position: relative;
    z-index: 0;

    > *:not(.floating) {
      position: relative;
      z-index: 1;
    }

    .floating {
      position: absolute;
      top: 25px;
      left: -30%;
      width: 160%;
      max-width: unset;
      height: 400%;
      max-height: unset;

      :deep(img) {
        object-fit: cover;
        object-position: top center;
      }
    }
  }
}
</style>
