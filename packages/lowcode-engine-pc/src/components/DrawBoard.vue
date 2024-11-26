<template>
  <RenderComponent v-model:value="componentTree" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import RenderComponent from './RenderComponent.vue'
import { generateUniqueId } from 'utils'
import type { IComponentNodeTree } from 'types'

const componentTree = ref<IComponentNodeTree>([
  {
    id: generateUniqueId(),
    type: 'div',
    name: '基础版本',
    style: {
      height: '800px',
      width: '100%',
    },
  },
])
</script>

<style scoped></style>
