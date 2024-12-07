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
      <NDataTable :columns :data="componentData" size="small"></NDataTable>

      <div class="rg-mt-4">
        <NH4>JSON预览</NH4>
        <Codemirror v-model:value="data" :options="cmOptions"></Codemirror>
      </div>
    </div>

    <AddOrEdit v-model:value="showDraw" :data="currentData" :type @confirm="handleConfirm" />
  </NModal>
</template>

<script setup lang="tsx">
import { NModal, NDataTable, type DataTableColumns, NSpace, NButton, NH4 } from 'naive-ui'
import { computed, ref, watch } from 'vue'

import type { IData } from '@packages/types'
import AddOrEdit from './AddOrEdit.vue'
import { componentData, dataConfig } from '@packages/data'
import { removeData, generateData } from '@packages/utils'

import type { EditorConfiguration } from 'codemirror'
import Codemirror from 'codemirror-editor-vue3'
// mode
import 'codemirror/mode/javascript/javascript.js'

const show = defineModel<boolean>('value', {
  required: true,
})

const columns: DataTableColumns<IData> = [
  {
    title: '类型',
    key: 'type',
    width: 120,
    render(column) {
      return dataConfig[column.type].desc
    },
  },
  {
    title: '描述',
    key: 'desc',
  },

  {
    title: '属性',
    key: 'property',
    width: 120,
    render(column) {
      return column.property || '-'
    },
  },

  {
    title: '操作',
    key: 'action',
    width: 240,
    render(column) {
      const canHaveChild = column.type === 'array' ? !column.children : column.canHaveChild
      return (
        <NSpace>
          <NButton
            ghost
            type="primary"
            size="small"
            disabled={!canHaveChild}
            onClick={() => handleAdd(column)}
          >
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
          <NButton
            ghost
            type="error"
            disabled={column.level === 1}
            size="small"
            onClick={() => removeData(componentData, column.id)}
          >
            删除
          </NButton>
        </NSpace>
      )
    },
  },
]

const showDraw = ref(false)
const currentData = ref<IData>(componentData[0])
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

function handleConfirm(type: 1 | 2, data: IData) {
  data.canHaveChild = dataConfig[data.type].canHaveChild
  if (type === 1) {
    currentData.value.children
      ? currentData.value.children.push(data)
      : (currentData.value.children = [data])
  } else {
    currentData.value = data
  }
}

const data = computed(() => {
  return JSON.stringify(generateData(componentData[0]), null, 2)
})

const cmOptions: EditorConfiguration = {
  mode: 'application/json',
  lineNumbers: false,
  lineWiseCopyCut: true,
  gutters: ['CodeMirror-lint-markers'],
  readOnly: true,
}
</script>

<style scoped></style>
