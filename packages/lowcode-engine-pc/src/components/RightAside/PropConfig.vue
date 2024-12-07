<template>
  <div>
    <NDivider>静态</NDivider>

    <NDataTable :columns type="small" :data="currentNode?.props"></NDataTable>
    <div class="rg-mt-4">
      <NButton type="primary" @click="handleAdd">添加属性</NButton>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { NDivider, NDataTable, type DataTableColumns, NButton, NSpace } from 'naive-ui'
import { currentNode } from '@packages/data'

import type { IProp } from '@packages/types'
import AddOrEditProp from './AddOrEditProp.vue'

const columns: DataTableColumns<IProp> = [
  {
    title: '属性名',
    key: 'properpty',
    width: 120,
  },
  {
    title: '值',
    key: 'value',
  },
  {
    title: '操作',
    key: 'action',
    width: 60,
    render(row, index) {
      return (
        <NSpace>
          <NButton size="small" ghost type="primary" onClick={() => handleEdit(row)}>
            编辑
          </NButton>
          <NButton size="small" ghost type="error" onClick={() => handleDelete(index)}>
            删除
          </NButton>
        </NSpace>
      )
    },
  },
]

const showAddOrEditProp = ref(false)
const currentProp = ref<IProp>()
function handleAdd() {
  currentProp.value = undefined
  showAddOrEditProp.value = true
}

function handleEdit(row: IProp) {
  currentProp.value = row
  showAddOrEditProp.value = true
}

function handleDelete(index: number) {
  currentNode.value!.props.splice(index, 1)
}
</script>

<style scoped></style>
