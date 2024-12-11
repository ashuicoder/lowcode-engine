<template>
  <div class="rg-mr-4 rg-bg-white rg-w-[200px] rg-overflow-auto rg-custom-scrollbar rg-py-4">
    <NTree :data="componentTree" label-field="name" key-field="id" :node-props="nodeProps"></NTree>
  </div>
</template>

<script setup lang="ts">
import { NTree, type TreeOption } from 'naive-ui'
import { componentTree, currentNode } from '@packages/data'
import type { IComponentNode } from '@packages/types'

function nodeProps({ option }: { option: TreeOption }) {
  return {
    onClick() {
      if (option.id === currentNode.value?.id) return
      currentNode.value = option as unknown as IComponentNode
    },
  }
}
</script>

<style scoped></style>
