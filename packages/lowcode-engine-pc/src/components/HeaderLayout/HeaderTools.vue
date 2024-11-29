<template>
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
  </NSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NSpace, NButton } from 'naive-ui'
import { FileUploadOutlined, FileDownloadOutlined, RemoveRedEyeOutlined } from '@vicons/material'
import { Database } from '@vicons/tabler'
import { renderIcon, handleDwonloadJson } from '@packages/utils'
import type { ITool } from '@packages/types'

const toolsList = ref<ITool[]>([
  {
    name: '数据配置',
    icon: renderIcon(Database),
    action: 'database',
    onClick() {
      handleDwonloadJson()
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
      handleDwonloadJson()
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
</script>

<style scoped></style>
