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
    <aside class="rg-w-[240px] rg-bg-white rg-shadow-lg">
      <NDivider>配置项</NDivider>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui'
import LeftAside from './LeftAside.vue'
import DrawBoard from './DrawBoard.vue'
</script>

<style scoped></style>
