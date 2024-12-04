<template>
  <div>
    <NSpace>
      <NButton
        v-for="item in toolsList"
        :key="item.action"
        size="small"
        type="primary"
        ghost
        :render-icon="item.icon"
        @click="item.onClick()"
      >
        {{ item.name }}</NButton
      >

      <input
        type="file"
        accept=".json"
        ref="uploadRef"
        style="display: none"
        @change="handleFileChange"
      />
    </NSpace>

    <DataConfig v-model:value="showDataModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { NSpace, NButton } from 'naive-ui'
import { FileUploadOutlined, FileDownloadOutlined, RemoveRedEyeOutlined } from '@vicons/material'
import { Database } from '@vicons/tabler'
import { renderIcon, handleDwonloadJson, handleUploadJson } from '@packages/utils'
import type { ITool } from '@packages/types'
import DataConfig from '../DataConfig/index.vue'

const toolsList = ref<ITool[]>([
  {
    name: '数据配置',
    icon: renderIcon(Database),
    action: 'database',
    onClick() {
      handleDataConfig()
    },
  },
  {
    name: '下载JSON',
    icon: renderIcon(FileDownloadOutlined),
    action: 'download',
    onClick() {
      handleDwonloadJson()
    },
  },
  {
    name: '导入JSON',
    icon: renderIcon(FileUploadOutlined),
    action: 'upload',
    onClick() {
      uploadRef.value?.click()
    },
  },
  {
    name: '预览',
    icon: renderIcon(RemoveRedEyeOutlined),
    action: 'preview',
    onClick() {
      handleDwonloadJson()
    },
  },
])

const uploadRef = useTemplateRef<HTMLInputElement>('uploadRef')
function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (!target.files) return
  handleUploadJson(target.files[0])
}

const showDataModal = ref(true)
function handleDataConfig() {
  showDataModal.value = true
}
</script>

<style scoped></style>
