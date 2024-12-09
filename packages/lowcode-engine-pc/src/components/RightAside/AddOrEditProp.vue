<template>
  <ModalForm
    v-model:show="show"
    :title="currentData ? '编辑属性' : '添加属性'"
    :schemas
    ref="formRef"
    :label-width="80"
    style="width: 600px"
  >
  </ModalForm>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { ModalForm, type FormSchema, type FormInstance } from 'naive-ui-form'
import { dataConfigList } from '@packages/data'
import type { IProp } from '@packages/types'

const show = defineModel<boolean>('show', {
  required: true,
})

const { currentData } = defineProps<{
  currentData?: IProp
}>()

const schemas: FormSchema[] = [
  {
    type: 'input',
    label: '属性名',
    field: 'properpty',
    required: true,
  },
  {
    type: 'select',
    label: '类型',
    field: 'type',
    required: true,
    componentProps: {
      options: dataConfigList,
      disabled: Boolean(currentData),
    },
  },
  {
    type: 'input',
    label: '值',
    field: 'value',
    required: true,
    vif(formValue) {
      return formValue.type && !['number', 'boolean'].includes(formValue.type)
    },
    componentProps: {
      type: 'textarea',
    },
  },
]

const formRef = useTemplateRef<FormInstance>('formRef')
</script>

<style scoped></style>
