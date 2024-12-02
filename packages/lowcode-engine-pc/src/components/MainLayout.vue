<template>
  <div
    class="rg-flex rg-h-screen rg-bg-slate-50 rg-text-sm rg-select-none rg-engine-container rg-relative"
    :id="CONTAINER_ID"
  >
    <LeftAside />
    <main class="rg-flex-1 rg-min-w-0 rg-mx-4 rg-flex rg-flex-col">
      <HeaderLayout />
      <DrawBoard />
    </main>
    <RightAside />
  </div>
</template>

<script setup lang="ts">
import LeftAside from './LeftAside/index.vue'
import DrawBoard from './DrawBoard/index.vue'
import RightAside from './RightAside/index.vue'
import HeaderLayout from './HeaderLayout/index.vue'

import { CONTAINER_ID } from '@packages/data'
</script>

<style lang="scss" scoped>
.rg-engine-container {
  --primary: #3b82f6;
}

.rg-custom-scrollbar {
  &::-webkit-scrollbar {
    width: 8px; /* 滚动条宽度 */
    height: 8px;
    display: none; /* 默认隐藏滚动条 */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 轨道背景颜色 */
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1); /* 滚动条拇指颜色 */
    border-radius: 4px; /* 滚动条拇指圆角 */
  }

  &:hover {
    &::-webkit-scrollbar {
      display: block; /* 鼠标移入时显示滚动条 */
    }
  }
}
</style>
