<template>
  <div
    :ref="dropRef"
    :style="node.style"
    class="rg-border rg-border-dashed rg-relative rg-compoent"
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
import { computed } from 'vue'
import colors from 'tailwindcss/colors'

const { node } = defineProps<{
  node: IComponentNode
}>()

const emits = defineEmits<{
  drop: [material: IMaterial]
}>()

const [collect, dropRef] = useDrop(() => ({
  accept: ['material'],
  drop(item: IMaterial, monitor) {
    if (!node.canDrop) return
    if (monitor.didDrop()) return
    emits('drop', item)
  },
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }),
}))

const { isOverCurrent } = toRefs(collect)

const borderColor = computed(() => {
  if (isOverCurrent.value && node.canDrop) return colors.green[500]
  if (isOverCurrent.value && !node.canDrop) return colors.red[500]

  if (node.id === currentNode.value?.id) return 'var(--primary)'
  return colors.gray[300]
})

const contentStr = computed(() => {
  if (!node.canDrop && isOverCurrent.value) return '"该元素不支持放置"'
  return '""'
})

function handleComponentClick() {
  if (node.id === currentNode.value?.id) return
  currentNode.value = node
}
</script>

<style lang="scss" scoped>
.rg-compoent {
  &::before {
    content: v-bind(contentStr);
    position: absolute;
    pointer-events: none;
    color: red;
    @apply rg-flex rg-justify-center rg-items-center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @apply rg-border rg-border-dashed;
    border-color: v-bind(borderColor);
  }
}
</style>
