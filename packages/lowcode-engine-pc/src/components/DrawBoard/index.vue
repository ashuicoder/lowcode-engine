<template>
  <div
    :id="DRAWER_CONTAINER_ID"
    class="rg-flex-1 rg-min-h-0 rg-bg-white rg-overflow-auto rg-custom-scrollbar rg-relative"
  >
    <RenderComponent v-model:list="componentTree" />

    <Tooltip v-if="currentNode" />
  </div>
</template>

<script setup lang="ts">
import RenderComponent from './RenderComponent.vue'
import { initDrawBoard } from '@packages/utils'

import { currentNode, componentTree, DRAWER_CONTAINER_ID } from '@packages/data'
import Tooltip from './Tooltip.vue'

componentTree.value.push(initDrawBoard())
currentNode.value = componentTree.value[0]
</script>

<style scoped>
.rg-tooltip {
  position: absolute;
}
</style>
