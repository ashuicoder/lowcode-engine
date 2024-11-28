<template>
  <div class="rg-flex-1 rg-min-h-0 rg-bg-white rg-overflow-auto rg-custom-scrollbar rg-mt-4">
    <RenderComponent v-model:list="componentTree" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import RenderComponent from './RenderComponent.vue'
import { generateUniqueId } from '@packages/utils'
import { currentNode } from '@packages/data'
import { cloneDeep } from 'es-toolkit'
import type { IComponentNodeTree } from '@packages/types'

const initComponentNode = {
  id: generateUniqueId(),
  type: 'div',
  name: '基础版本',
  style: {
    height: '800px',
    width: '100%',
  },
}

const componentTree = ref<IComponentNodeTree>([cloneDeep(initComponentNode)])
currentNode.value = componentTree.value[0]
</script>

<style scoped></style>
