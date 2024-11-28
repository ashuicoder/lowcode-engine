<template>
  <div class="rg-flex-1 rg-min-h-0 rg-bg-white rg-overflow-auto rg-custom-scrollbar rg-mt-4">
    <RenderComponent v-model:list="componentTree" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import RenderComponent from './RenderComponent.vue'
import { initDrawBoard } from '@packages/utils'
import { currentNode } from '@packages/data'
import type { IComponentNodeTree } from '@packages/types'

const componentTree = ref<IComponentNodeTree>([initDrawBoard()])
currentNode.value = componentTree.value[0]
</script>

<style scoped></style>
