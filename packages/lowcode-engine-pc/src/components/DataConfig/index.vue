<template>
  <NModal
    v-model:show="show"
    title="数据配置"
    preset="dialog"
    style="width: 60%; min-width: 600px"
    positive-text="确定"
    negative-text="取消"
  >
    <div class="rg-my-8">
      <NDataTable :columns :data size="small"></NDataTable>
    </div>

    <AddOrEdit v-model:value="showDraw" :data="currentData" :type />
  </NModal>
</template>

<script setup lang="tsx">
import { NModal, NDataTable, type DataTableColumns, NSpace, NButton } from 'naive-ui'
import { reactive, ref } from 'vue'

import type { IData } from '@packages/types'
import AddOrEdit from './AddOrEdit.vue'

const show = defineModel<boolean>('value', {
  required: true,
})

const columns: DataTableColumns<IData> = [
  {
    title: '描述',
    key: 'desc',
    width: 120,
  },

  {
    title: '类型',
    key: 'type',
  },

  {
    title: '操作',
    key: 'action',
    width: 240,
    render(column) {
      return (
        <NSpace>
          <NButton ghost type="primary" size="small" onClick={() => handleAdd(column)}>
            添加子数据
          </NButton>
          <NButton
            ghost
            type="primary"
            disabled={column.level === 1}
            size="small"
            onClick={() => handleEdit(column)}
          >
            编辑
          </NButton>
          <NButton ghost type="error" disabled={column.level === 1} size="small">
            删除
          </NButton>
        </NSpace>
      )
    },
  },
]

const data = reactive<IData[]>([
  {
    desc: '对象',
    type: 'object',
    level: 1,
    children: [],
  },
])

const showDraw = ref(false)
const currentData = ref<IData>(data[0])
const type = ref<1 | 2>(1)
function handleAdd(column: IData) {
  currentData.value = column
  type.value = 1
  showDraw.value = true
}

function handleEdit(column: IData) {
  type.value = 2
  currentData.value = column
  showDraw.value = true
}
</script>

<style scoped></style>
