<template>
  <div
    :key="material.name"
    :ref="dragRef"
    class="rg-border rg-text-center rg-p-1 rg-text-xs rg-rounded rg-border-slate-200 rg-text-slate-500 hover:rg-border-primary"
    :style="{
      opacity,
    }"
  >
    {{ material.name }}
  </div>
</template>

<script setup lang="ts">
import { unref, computed } from 'vue'
import { useDrag } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'

import type { IMaterial } from '@packages/types'

const props = defineProps<{
  material: IMaterial
}>()

const [collect, dragRef] = useDrag(() => ({
  type: 'material',
  item: props.material,
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
  }),
}))

const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))
</script>

<style scoped></style>
