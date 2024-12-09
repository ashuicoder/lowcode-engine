<template>
  <NModal v-model:show="show" preset="dialog">
    <div></div>
  </NModal>
</template>

<script setup lang="ts">
import {} from 'naive-ui-form'
import type { IProp } from '@packages/types'

const show = defineModel<boolean>('show', {
  required: true,
})

defineProps<{
  currentData?: IProp
}>()
</script>

<style scoped></style>
