<script setup lang="ts">
interface Props {
  code: string
  language?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'vue',
})

const showCopied = ref(false)
const showCopy = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    showCopied.value = true
    setTimeout(() => {
      showCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<template>
  <u-sheet class="code-viewer">
    <div class="d-flex align-center justify-space-between mb-4">
      <h5 class="mb-0">Code</h5>
      <div v-if="showCopied" class="copied-message">
        <u-icon icon="line:check" size="16" class="mr-1" />
        Copied!
      </div>
    </div>
    <div class="code-container" @mouseenter="showCopy = true" @mouseleave="showCopy = false">
      <pre class="code-block"><code>{{ code }}</code></pre>
      <u-btn
        v-show="showCopy"
        variant="text"
        color="White"
        size="small"
        class="copy-btn"
        prepend-icon="hugeicons:copy-01"
        @click="copyToClipboard"
      >
        Copy
      </u-btn>
    </div>
  </u-sheet>
</template>

<style scoped>
.code-container {
  position: relative;
}

.copy-btn {
  position: absolute;
  right: 8px;
  bottom: 8px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}

.copied-message {
  color: #34c759;
  font-weight: 500;
}

.code-block {
  margin: 0;
  border-radius: 8px;
  background-color: #2d3748;
  padding: 16px;
  overflow-x: auto;
  color: #e2e8f0;
  font-size: 14px;
  line-height: 1.5;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.code-block code {
  border-radius: 0;
  background: none;
  padding: 0;
  color: inherit;
}
</style>
