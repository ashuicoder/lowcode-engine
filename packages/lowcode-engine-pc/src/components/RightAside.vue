<template>
  <div class="rg-px-4">
    <div>
      <NDivider>样式配置</NDivider>
      <NSpace vertical>
        <NForm v-if="currentNode?.style" label-placement="left" label-width="auto">
          <NFormItem
            v-for="(value, key) in currentNode?.style"
            :key
            :label="cssProperties[key] || key"
          >
            <NInput
              type="textarea"
              v-model:value="currentNode.style[key] as string"
              :rows="1"
            ></NInput>
          </NFormItem>
        </NForm>
      </NSpace>
    </div>
    <NDivider>属性配置</NDivider>
    <NDivider>事件处理</NDivider>
  </div>
</template>

<script setup lang="ts">
import { NDivider, NSpace, NForm, NFormItem, NInput } from 'naive-ui'
import { currentNode, cssProperties } from 'data'
</script>

<style scoped></style>
