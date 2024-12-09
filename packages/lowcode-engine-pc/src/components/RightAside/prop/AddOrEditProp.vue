<template>
  <ModalForm
    v-model:show="show"
    :title="currentData ? '编辑属性' : '添加属性'"
    :schemas
    ref="formRef"
    :label-width="80"
    style="width: 600px"
    :on-after-enter="handleOpen"
    @submit="handleSubmit"
  >
  </ModalForm>
</template>

<script setup lang="ts">
import { useTemplateRef, useId } from 'vue'
import { useMessage } from 'naive-ui'
import { ModalForm, type FormSchema, type FormInstance } from 'naive-ui-form'
import { dataConfigList, currentNode } from '@packages/data'
import { validateProp } from '@packages/utils'
import type { IProp } from '@packages/types'
import { cloneDeep } from 'es-toolkit'

const message = useMessage()
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
      onUpdateValue() {
        handleTypeChange()
      },
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
  {
    type: 'input-number',
    label: '值',
    field: 'value',
    required: true,
    requiredType: 'number',
    vif(formValue) {
      return formValue.type && formValue.type === 'number'
    },
  },

  {
    type: 'select',
    label: '值',
    field: 'value',
    required: true,
    vif(formValue) {
      return formValue.type && formValue.type === 'boolean'
    },
    componentProps: {
      options: [
        {
          label: 'true',
          value: 'true',
        },
        {
          label: 'false',
          value: 'false',
        },
      ],
    },
  },
]

const formRef = useTemplateRef<FormInstance>('formRef')

function handleTypeChange() {
  console.log('handleTypeChange')
  formRef.value?.setValue({
    value: null,
  })
}

function handleSubmit(value: IProp) {
  const [isValid, result] = validateProp(value)
  if (!isValid) {
    message.error('数据类型有误')
    return
  }
  if (!currentData) {
    currentNode.value?.props.push({
      properpty: value.properpty,
      type: value.type,
      value: result,
      id: useId(),
    })
  } else {
    const index = currentNode.value!.props.findIndex((item) => item.id === currentData.id)
    if (index === -1) return
    currentNode.value?.props.splice(index, 1, value)
  }

  show.value = false
}

function handleOpen() {
  if (currentData) {
    formRef.value?.setValue(cloneDeep(currentData))
  }
}
</script>

<style scoped></style>
