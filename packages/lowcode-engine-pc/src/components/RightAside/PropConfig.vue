<template>
  <div>
    <div>
      <NDivider>静态</NDivider>

      <NDataTable :columns type="small" :data="currentNode?.props"></NDataTable>
    </div>

    <div>
      <NDivider>动态</NDivider>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { NDivider, NDataTable, NInput, type DataTableColumns } from 'naive-ui'
import { currentNode } from '@packages/data'

import type { IProp } from '@packages/types'

const columns: DataTableColumns<IProp> = [
  {
    title: '属性名',
    key: 'properpty',
    width: 120,
    render(row) {
      return <NInput v-model:value={row.properpty}></NInput>
    },
  },
  {
    title: '值',
    key: 'value',
    render(row) {
      return <NInput v-model:value={row.value}></NInput>
    },
  },
]
</script>

<style scoped></style>
