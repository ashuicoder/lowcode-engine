<template>
  <div
    :ref="dropRef"
    :style="node.style"
    class="rg-border rg-border-dashed rg-relative"
    :class="[
      isOverCurrent ? 'rg-bg-primary' : '',
      currentNode?.id === node.id ? 'rg-border-primary' : '',
    ]"
    @click.stop="handleComponentClick"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { currentNode } from '@packages/data'

import { useDrop } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'
import type { IMaterial, IComponentNode } from '@packages/types'

const { node } = defineProps<{
  node: IComponentNode
}>()

const emits = defineEmits<{
  drop: [material: IMaterial]
}>()

const [collect, dropRef] = useDrop(() => ({
  accept: ['material'],
  drop(item: IMaterial, monitor) {
    if (monitor.didDrop()) return
    emits('drop', item)
  },
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }),
}))

const { isOverCurrent } = toRefs(collect)

function handleComponentClick() {
  if (node.id === currentNode.value?.id) return
  currentNode.value = node
}
</script>

<style scoped></style>
