<template>
  <NModal v-model:show="show" preset="dialog">
    <div></div>
  </NModal>
</template>

<script setup lang="ts">
import { NModal } from 'naive-ui'
import type { IProp } from '@packages/types'

const show = defineModel<boolean>('show', {
  required: true,
})

defineProps<{
  prop?: IProp
}>()
</script>

<style scoped></style>
