<template>
  <div
    :ref="dropRef"
    class="rg-w-full rg-h-full rg-relative"
    :class="[isActive ? ' rg-bg-primary rg-bg-opacity-10' : '']"
  >
    <RenderComponent />
  </div>
</template>

<script setup lang="ts">
import { computed, unref } from 'vue'
import { useDrop } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'
import RenderComponent from './RenderComponent.vue'
import type { IMaterial } from 'types'

const [collect, dropRef] = useDrop(() => ({
  accept: ['material'],
  drop(item: IMaterial) {
    return {
      a: 1,
    }
  },
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    didDrop: monitor.didDrop(),
  }),
}))

const { canDrop, isOver } = toRefs(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
</script>

<style scoped></style>
