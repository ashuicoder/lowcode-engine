<template>
  <aside
    class="rg-w-[420px] rg-bg-white rg-shadow-lg rg-overflow-y-auto rg-custom-scrollbar rg-p-4"
  >
    <n-tabs size="small" type="line" animated default-value="prop" pane-style="margin-top: 20px">
      <n-tab-pane name="style" tab="样式" display-directive="show:lazy">
        <StyleConfig />
      </n-tab-pane>
      <n-tab-pane name="prop" tab="属性" display-directive="show:lazy">
        <PropConfig />
      </n-tab-pane>
      <n-tab-pane name="data" tab="数据" display-directive="show:lazy">
        <PropConfig />
      </n-tab-pane>
      <n-tab-pane name="event" tab="事件" display-directive="show:lazy">
        <EventConfig />
      </n-tab-pane>
    </n-tabs>
  </aside>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import StyleConfig from './StyleConfig.vue'
import PropConfig from './prop/index.vue'
import EventConfig from './EventConfig.vue'
</script>

<style scoped></style>
