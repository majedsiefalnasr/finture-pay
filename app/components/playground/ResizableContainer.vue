<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const containerRef = ref<HTMLElement>()
const containerWidth = ref<number | undefined>()
const isResizing = ref(false)
const startX = ref(0)
const startWidth = ref(0)

const minWidth = 320
const maxWidth = ref(1200)

const updateMaxWidth = () => {
  if (containerRef.value?.parentElement) {
    maxWidth.value = containerRef.value.parentElement.offsetWidth
  } else {
    maxWidth.value = window.innerWidth
  }
}

onMounted(() => {
  updateMaxWidth()
  window.addEventListener('resize', updateMaxWidth)
})

const startResize = (e: MouseEvent) => {
  if (!containerWidth.value) {
    containerWidth.value = containerRef.value?.offsetWidth || 800
  }
  isResizing.value = true
  startX.value = e.clientX
  startWidth.value = containerWidth.value
  document.addEventListener('mousemove', resize)
  document.addEventListener('mouseup', stopResize)
  e.preventDefault()
}

const resize = (e: MouseEvent) => {
  if (!isResizing.value) return
  const newWidth = startWidth.value + (e.clientX - startX.value)
  containerWidth.value = Math.max(minWidth, Math.min(maxWidth.value, newWidth))
}

const stopResize = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', resize)
  document.removeEventListener('mouseup', stopResize)
}

onUnmounted(() => {
  document.removeEventListener('mousemove', resize)
  document.removeEventListener('mouseup', stopResize)
  window.removeEventListener('resize', updateMaxWidth)
})
</script>

<template>
  <div
    ref="containerRef"
    class="resizable-container @container"
    :style="containerWidth ? { width: containerWidth + 'px' } : {}"
  >
    <div class="resizable-content">
      <slot />
    </div>
    <div class="resize-handle" @mousedown="startResize"></div>
  </div>
</template>

<style scoped>
.resizable-container {
  position: relative;
  box-sizing: border-box;
  container-type: inline-size;
  border: 1px #ccc;
  border-radius: 24px;
  background-color: #f9f9f9;
  padding: 40px;
  max-width: 100%;
  overflow: hidden;
}

.resizable-content {
  width: 100%;
  height: 100%;
}

.resize-handle {
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);
  opacity: 0.2;
  transition: opacity 0.2s;
  cursor: ew-resize;
  border-radius: 100px;
  background: rgb(144, 144, 144);
  width: 6px;
  height: 80px;
}

.resizable-container:hover .resize-handle {
  right: 8px;
  opacity: 0.6;
  width: 8px;
}
</style>
