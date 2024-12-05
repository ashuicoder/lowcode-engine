<template>
  <n-drawer v-model:show="show" :width="500" :on-after-leave="reset" :on-after-enter="handleOpen">
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
        <NFormItem v-if="data.type === 'object'" label="属性" path="property">
          <NInput v-model:value="formValue.property"></NInput>
        </NFormItem>
        <NFormItem label="描述" path="desc">
          <NInput v-model:value="formValue.desc"></NInput>
        </NFormItem>

        <NFormItem label="类型" path="type">
          <NSelect
            v-model:value="formValue.type"
            :options="dataConfigList"
            :disabled="type === 2"
          ></NSelect>
        </NFormItem>

        <NFormItem label="允许为空" path="allowNull">
          <NRadioGroup v-model:value="formValue.allowNull">
            <NRadio :value="true">是</NRadio>
            <NRadio :value="false">否</NRadio>
          </NRadioGroup>
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
  NRadioGroup,
  NRadio,
  type FormRules,
  type FormInst,
} from 'naive-ui'

import to from 'await-to-js'
import { dataConfig } from '@packages/data'

import { generateUniqueId } from '@packages/utils'

import type { DataType, IData } from '@packages/types'
import { cloneDeep } from 'es-toolkit'

const dataConfigList = Object.keys(dataConfig).map((key) => {
  return {
    label: dataConfig[key as DataType].desc,
    value: key,
  }
})

const show = defineModel<boolean>('value', {
  required: true,
})
const { data, type } = defineProps<{
  data: IData
  type: 1 | 2
}>()

const emtis = defineEmits<{
  confirm: [type: 1 | 2, value: IData]
}>()

const rules: FormRules = {
  property: {
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
    trigger: ['blur', 'change'],
    message: '请选择类型',
  },
  allowNull: {
    required: true,
    trigger: 'change',
    type: 'boolean',
    message: '请选择是否允许为空',
  },
}
const formValue = ref<Partial<IData>>({})

const formRef = useTemplateRef<FormInst>('form')

async function handleAddOrEdit() {
  const [err] = await to(formRef.value!.validate())
  if (err) return
  const value = cloneDeep(formValue.value) as IData
  value.id = generateUniqueId()
  if (type === 1) {
    value.parentId = data.id
    value.level = data.level + 1
  }
  show.value = false
  emtis('confirm', type, value)
}

function handleOpen() {
  if (type === 2) {
    formValue.value = cloneDeep(data)
  }
}
function reset() {
  for (const key in formValue.value) {
    formValue.value[key as keyof IData] = undefined
  }
}
</script>

<style scoped></style>
