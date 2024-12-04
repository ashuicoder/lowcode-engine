<template>
  <n-drawer v-model:show="show" :width="500">
    <n-drawer-content closable :title="type === 2 ? '编辑数据' : '新增数据'">
      <div v-if="type === 1" class="rg-flex rg-justify-between rg-items-center">
        <NH4>上级数据</NH4>
        <NSpace>
          <NText>{{ data.desc }}</NText>
          <NText type="primary">{{ data.type }}</NText>
        </NSpace>
      </div>
      <NForm
        ref="form"
        :model="formValue"
        :rules
        label-placement="left"
        label-width="auto"
        size="small"
      >
        <NFormItem label="属性" path="propty">
          <NInput></NInput>
        </NFormItem>
        <NFormItem label="描述" path="desc">
          <NInput></NInput>
        </NFormItem>

        <NFormItem label="类型" path="type">
          <NSelect :options="dataList" label-field="desc" value-field="type"></NSelect>
        </NFormItem>

        <NFormItem label=" ">
          <NSpace>
            <NButton type="primary" @click="handleAddOrEdit">{{
              type === 2 ? '保存' : '添加'
            }}</NButton>
          </NSpace>
        </NFormItem>
      </NForm>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import {
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NButton,
  NSpace,
  NText,
  NH4,
  type FormRules,
  type FormInst,
} from 'naive-ui'

import to from 'await-to-js'
import { dataList } from '@packages/data'

import type { IData } from '@packages/types'

const show = defineModel<boolean>('value', {
  required: true,
})
const { data, type } = defineProps<{
  data: IData
  type: 1 | 2
}>()

const rules: FormRules = {
  propty: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入属性',
  },
  desc: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入描述',
  },
  type: {
    required: true,
    type: 'array',
    trigger: ['blur', 'change'],
    message: '请选择类型',
  },
}
const formValue = ref<Partial<IData>>({})

const formRef = useTemplateRef<FormInst>('form')

async function handleAddOrEdit() {
  const [err] = await to(formRef.value!.validate())
  if (err) return
}
</script>

<style scoped></style>
