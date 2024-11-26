<template>
  <div
    :ref="dropRef"
    class="rg-border rg-border-dashed"
    :class="[isOverCurrent ? 'rg-bg-primary rg-bg-opacity-50' : '']"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useDrop } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'
import type { IComponentNode, IMaterial } from 'types'

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
    console.log(2333)
    console.log(monitor.didDrop())
    emits('drop', props.value, item)
  },
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }),
}))

const { isOverCurrent } = toRefs(collect)
</script>

<style scoped></style>
