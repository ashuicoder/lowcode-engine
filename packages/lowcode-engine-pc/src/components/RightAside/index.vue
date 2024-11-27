<template>
  <aside
    class="rg-w-[320px] rg-bg-white rg-shadow-lg rg-overflow-y-auto rg-custom-scrollbar rg-p-4"
  >
    <n-tabs size="small" type="line" animated default-value="style" pane-style="margin-top: 20px">
      <n-tab-pane name="style" tab="样式设置">
        <StyleConfig />
      </n-tab-pane>
      <n-tab-pane name="prop" tab="属性设置">
        <PropConfig />
      </n-tab-pane>
      <n-tab-pane name="event" tab="事件设置">
        <EventConfig />
      </n-tab-pane>
    </n-tabs>
  </aside>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import StyleConfig from './StyleConfig.vue'
import PropConfig from './PropConfig.vue'
import EventConfig from './EventConfig.vue'
</script>

<style scoped></style>
