<script setup lang="ts">
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
    class="text-center d-flex flex-column align-center"
    :class="variant === 'primary' ? 'highlighted text-white ga-12' : 'ga-4'"
  >
    <u-icon :icon="icon" size="100" class="two-tone-icon" />
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

  &:before {
    position: absolute;
    top: 90px;
    left: 0;
    background-image: url(/assets/images/floating-shape.svg);
    background-size: 100% auto;
    background-repeat: no-repeat;
    width: 100%;
    height: 400px;
    content: '';
  }

  > * {
    z-index: 1;
  }
}
</style>
