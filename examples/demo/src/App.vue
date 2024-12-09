<template>
  <NConfigProvider :locale="zhCN">
    <NMessageProvider>
      <RouterView></RouterView>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider, zhCN } from 'naive-ui'
</script>

<style scoped></style>
