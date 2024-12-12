<template>
  <DropComponent
    v-for="item in list"
    :key="item.id"
    :node="item"
    @drop="(material) => handleDrop(item, material)"
  >
    <RenderComponent v-if="item.children && item.children.length" v-model:list="item.children" />
  </DropComponent>
</template>

<script setup lang="ts">
import { generateComponentNode } from '@packages/utils'
import DropComponent from './DropComponent.vue'
import type { IComponentNodeTree, IComponentNode, IMaterial } from '@packages/types'
import { currentNode } from '@packages/data'

const list = defineModel<IComponentNodeTree>('list', {
  required: true,
})
function handleDrop(node: IComponentNode, material: IMaterial) {
  const vNode = generateComponentNode(material, node)
  if (node.children) {
    node.children.push(vNode)
  } else {
    node.children = [vNode]
  }
  currentNode.value = vNode
}
</script>

<style scoped></style>
