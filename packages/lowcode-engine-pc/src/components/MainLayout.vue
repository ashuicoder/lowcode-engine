<template>
  <div class="rg-flex rg-h-screen rg-bg-slate-50 rg-text-sm rg-select-none">
    <aside
      class="rg-w-[240px] rg-bg-white rg-shadow-lg rg-px-4 rg-overflow-y-auto rg-custom-scrollbar"
    >
      <LeftAside />
    </aside>
    <main class="rg-flex-1 rg-min-w-0 rg-mx-4 rg-bg-white rg-flex rg-flex-col">
      <div class="rg-h-[60px] rg-border-b rg-border-slate-100">1</div>
      <div class="rg-flex-1 rg-min-h-0 rg-overflow-auto rg-custom-scrollbar">
        <DrawBoard />
      </div>
    </main>
    <aside class="rg-w-[240px] rg-bg-white rg-shadow-lg rg-overflow-y-auto rg-custom-scrollbar">
      <RightAside />
    </aside>
  </div>
</template>

<script setup lang="ts">
import LeftAside from './LeftAside.vue'
import DrawBoard from './DrawBoard.vue'
import RightAside from './RightAside.vue'
</script>

<style lang="scss" scoped>
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
