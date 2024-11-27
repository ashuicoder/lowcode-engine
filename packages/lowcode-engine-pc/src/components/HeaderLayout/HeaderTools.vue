<template>
  <NSpace>
    <NButton
      v-for="item in toolsList"
      :key="item.action"
      size="small"
      type="primary"
      ghost
      :render-icon="item.icon"
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
import { renderIcon } from 'utils'

const toolsList = ref([
  {
    name: '数据配置',
    icon: renderIcon(Database),
    action: 'database',
  },
  {
    name: '下载JSON',
    icon: renderIcon(FileDownloadOutlined),
    action: 'download',
  },
  {
    name: '导入JSON',
    icon: renderIcon(FileUploadOutlined),
    action: 'upload',
  },
  {
    name: '预览',
    icon: renderIcon(RemoveRedEyeOutlined),
    action: 'preview',
  },
])
</script>

<style scoped></style>
