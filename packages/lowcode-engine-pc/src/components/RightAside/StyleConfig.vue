<template>
  <NSpace vertical>
    <NForm v-if="show && currentNode?.style" label-placement="left" size="small">
      <template v-for="(value, key) in currentNodeStyle" :key>
        <NFormItem v-if="!value.group" :label="value.desc">
          <NInput v-if="value.action === 'input'" v-model:value="currentNode.style[key]"></NInput>
          <NColorPicker
            v-else-if="value.action === 'color'"
            v-model:value="currentNode.style[key]"
          />
          <NSelect
            v-else-if="value.action === 'select'"
            v-model:value="currentNode.style[key]"
            :options="value.options"
          ></NSelect>
        </NFormItem>
        <NFormItem v-else :label="value.desc" label-placement="top">
          <div class="rg-w-full rg-grid rg-grid-cols-3 rg-gap-2">
            <template v-for="(_, childKey, index) in value.group" :key="childKey">
              <template v-if="index === 0">
                <div></div>
                <div class="rg-flex rg-flex-col rg-items-center">
                  <NInput v-model:value="currentNode.style[childKey]" placeholder=""></NInput>
                  <NIcon size="24" color="var(--primary)"> <CaretDown></CaretDown> </NIcon>
                </div>
              </template>
              <template v-if="index === 1">
                <div></div>
                <div class="rg-flex rg-items-center">
                  <NInput v-model:value="currentNode.style[childKey]" placeholder=""></NInput>
                  <NIcon size="24" color="var(--primary)"> <CaretForward></CaretForward> </NIcon>
                </div>
              </template>
              <template v-if="index === 2">
                <div></div>
                <div class="rg-flex rg-items-center">
                  <NIcon size="24" color="var(--primary)"> <CaretBack></CaretBack> </NIcon>

                  <NInput v-model:value="currentNode.style[childKey]" placeholder=""></NInput>
                </div>
              </template>
              <template v-if="index === 3">
                <div></div>
                <div class="rg-flex rg-flex-col rg-items-center">
                  <NIcon size="24" color="var(--primary)"> <CaretUp></CaretUp> </NIcon>
                  <NInput v-model:value="currentNode.style[childKey]" placeholder=""></NInput>
                </div>
                <div></div>
              </template>
            </template>
          </div>
        </NFormItem>
      </template>

      <NFormItem label="其他配置">
        <NInput v-model:value="otherStyleString" type="textarea" @blur="handleOtherChange"></NInput>
      </NFormItem>
    </NForm>
  </NSpace>
</template>

<script setup lang="ts">
import { NSpace, NForm, NFormItem, NInput, NSelect, NIcon, NColorPicker } from 'naive-ui'
import { currentNode, styleConfigMap } from '@packages/data'
import { CaretDown, CaretUp, CaretBack, CaretForward } from '@vicons/ionicons5'
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

const otherStyleString = ref('{}')

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
