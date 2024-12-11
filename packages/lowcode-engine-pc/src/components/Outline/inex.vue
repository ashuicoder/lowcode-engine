<template>
  <div class="rg-mr-4 rg-bg-white rg-w-[200px] rg-overflow-auto rg-custom-scrollbar rg-py-4">
    <NTree :data="componentTree" label-field="name" key-field="id"></NTree>
  </div>
</template>

<script setup lang="ts">
import { NTree } from 'naive-ui'
import { componentTree } from '@packages/data'
</script>

<style scoped></style>
