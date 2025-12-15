<script setup lang="ts">
interface PropDefinition {
  name: string
  type: string
  default?: unknown
  description: string
  items?: string[]
}

interface Props {
  propsData: Record<string, unknown>
  propDefinitions: PropDefinition[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  update: [value: Record<string, unknown>]
}>()

const updateProp = (key: string, value: unknown) => {
  const newData = { ...props.propsData, [key]: value }
  emit('update', newData)
}

const resetToDefaults = () => {
  const defaults: Record<string, unknown> = {}
  props.propDefinitions.forEach((def) => {
    defaults[def.name] = def.default
  })
  emit('update', defaults)
}
</script>

<template>
  <div class="d-flex justify-space-between align-center mb-2">
    <h5>Props Editor</h5>
    <u-btn size="small" variant="outlined" @click="resetToDefaults">Reset</u-btn>
  </div>
  <u-table class="table">
    <thead>
      <tr>
        <th style="width: 16.67%" class="font-weight-bold">Prop Title</th>
        <th style="width: 33.33%" class="font-weight-bold">Description</th>
        <th style="width: 25%" class="font-weight-bold">Default Value</th>
        <th style="width: 25%" class="font-weight-bold">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="def in propDefinitions" :key="def.name">
        <td class="font-weight-bold">{{ def.name }}</td>
        <td>{{ def.description }}</td>
        <td>{{ def.default }}</td>
        <td>
          <div class="py-2">
            <u-text-field
              v-if="def.type === 'string'"
              :model-value="propsData[def.name] || def.default || ''"
              density="compact"
              hide-details="auto"
              @update:model-value="(value: unknown) => updateProp(def.name, value)"
            />
            <u-combobox
              v-else-if="def.type === 'select'"
              :model-value="propsData[def.name] || def.default || ''"
              :items="def.items || []"
              density="compact"
              hide-details="auto"
              @update:model-value="(value: unknown) => updateProp(def.name, value)"
            />
            <u-textarea
              v-else-if="def.type === 'textarea'"
              :model-value="propsData[def.name] || def.default || ''"
              density="compact"
              hide-details="auto"
              rows="3"
              @update:model-value="(value: unknown) => updateProp(def.name, value)"
            />
            <div v-else class="text-body-4 text-B30">Type {{ def.type }} not supported</div>
          </div>
        </td>
      </tr>
    </tbody>
  </u-table>
</template>

<style scoped></style>
