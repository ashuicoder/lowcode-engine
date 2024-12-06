<template>
  <NSpace vertical>
    <NForm v-if="show && currentNode?.style" label-placement="left" size="small">
      <template v-for="(value, key) in currentNodeStyle" :key>
        <NFormItem v-if="value" :label="value.desc" :label-placement="value.group ? 'top' : 'left'">
          <div class="rg-w-full">
            <NInput
              v-if="value.action === 'input'"
              v-model:value="currentNode.style[key] as any"
              placeholder=""
            ></NInput>
            <NColorPicker
              v-else-if="value.action === 'color'"
              v-model:value="currentNode.style[key] as any"
            />
            <NSelect
              v-else-if="value.action === 'select'"
              v-model:value="currentNode.style[key]"
              :options="value.options"
              placeholder=""
            ></NSelect>

            <div v-if="value.group" class="rg-w-full rg-mt-2">
              <NSpace vertical>
                <div
                  v-for="(childValue, childKey) in value.group"
                  :key="childKey"
                  class="rg-flex rg-items-center"
                >
                  <div class="rg-w-[120px]">{{ childValue?.desc }}</div>
                  <NInput
                    v-model:value="currentNode.style[childKey] as any"
                    placeholder=""
                  ></NInput>
                </div>
              </NSpace>
            </div>
          </div>
        </NFormItem>
      </template>

      <NFormItem label="其他配置" label-placement="top">
        <NInput v-model:value="otherStyleString" type="textarea" @blur="handleOtherChange"></NInput>
      </NFormItem>
    </NForm>
  </NSpace>
</template>

<script setup lang="ts">
import { NSpace, NForm, NFormItem, NInput, NSelect, NColorPicker } from 'naive-ui'
import { currentNode, styleConfigMap } from '@packages/data'
import { watch, ref, nextTick, computed } from 'vue'
import { omit, pick } from 'es-toolkit'
import type { IStyleConfigMap } from '@packages/types'

const show = ref(false)
watch(
  () => currentNode.value?.style,
  () => {
    show.value = false
    nextTick(() => {
      show.value = true
    })
  },
  {
    immediate: true,
  },
)

const currentNodeStyle = computed<IStyleConfigMap>(() => {
  if (!currentNode.value) return {}
  if (!currentNode.value.includeStyle && !currentNode.value.excludeStyle?.length) return {}
  if (currentNode.value.includeStyle === 'all') return styleConfigMap

  if (currentNode.value.includeStyle?.length) {
    return pick(styleConfigMap, currentNode.value.includeStyle)
  }

  if (currentNode.value.excludeStyle?.length) {
    return omit(styleConfigMap, currentNode.value.excludeStyle)
  }
  return {}
})

const otherStyleString = ref(`{

}`)

function handleOtherChange() {
  try {
    const obj = JSON.parse(otherStyleString.value)

    currentNode.value!.style = {
      ...obj,
      ...currentNode.value!.style,
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped></style>
