<template>
  <DropComponent v-for="item in componentTree" :key="item.id" :value="item" @drop="handleUpdate">
    <component :is="item.type" :style="item.style">
      <RenderComponent v-if="item.children && item.children.length" v-model:value="item.children" />
    </component>
  </DropComponent>
</template>

<script setup lang="ts">
import DropComponent from './DropComponent.vue'
import { generateComponentNode } from 'utils'
import { currentNode } from 'data'
import type { IComponentNodeTree, IMaterial, IComponentNode } from 'types'

const componentTree = defineModel<IComponentNodeTree>('value', {
  required: true,
})

function handleUpdate(value: IComponentNode, material: IMaterial) {
  const node = generateComponentNode(material)
  if (value.children) {
    value.children.push(node)
  } else {
    value.children = [node]
  }
  currentNode.value = node
}
</script>

<style scoped></style>
