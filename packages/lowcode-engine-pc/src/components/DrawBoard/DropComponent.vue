<template>
  <div
    :ref="dropRef"
    class="rg-border rg-border-dashed rg-relative"
    :class="[
      isOverCurrent ? 'rg-border-primary' : '',
      currentNode?.id === value.id ? 'rg-border-primary' : '',
    ]"
    :style="getStyle"
    @click.stop="handleComponentClick"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useDrop } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'
import { currentNode } from 'data'
import type { IComponentNode, IMaterial } from 'types'
import { computed, type CSSProperties } from 'vue'

const props = defineProps<{
  value: IComponentNode
}>()

const emits = defineEmits<{
  drop: [node: IComponentNode, materral: IMaterial]
}>()

const [collect, dropRef] = useDrop(() => ({
  accept: ['material'],
  drop(item: IMaterial, monitor) {
    if (monitor.didDrop()) return
    emits('drop', props.value, item)
  },
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }),
}))

const { isOverCurrent } = toRefs(collect)

function handleComponentClick() {
  currentNode.value = props.value
}

const getStyle = computed(() => {
  const { width, height } = props.value?.style as any
  const style: CSSProperties = {}
  if (width) style.width = width
  if (height) style.height = height
  return style
})
</script>

<style scoped></style>
