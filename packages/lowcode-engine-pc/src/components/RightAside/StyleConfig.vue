<template>
  <NSpace vertical>
    <NForm v-if="show && currentNode" label-placement="left" size="small">
      <NFormItem label="宽度">
        <NInput v-model:value="currentNode.style.width"></NInput>
      </NFormItem>

      <NFormItem label="高度">
        <NInput v-model:value="currentNode.style.height"></NInput>
      </NFormItem>

      <NFormItem label="外边距">
        <div class="rg-w-full rg-grid rg-grid-cols-3 rg-gap-2">
          <div></div>
          <div class="rg-flex rg-flex-col rg-items-center">
            <NInput v-model:value="currentNode.style.marginTop" placeholder=""></NInput>
            <NIcon size="24" color="var(--primary)"> <CaretDown></CaretDown> </NIcon>
          </div>
          <div></div>
          <div class="rg-flex rg-items-center">
            <NInput v-model:value="currentNode.style.marginLeft" placeholder=""></NInput>
            <NIcon size="24" color="var(--primary)"> <CaretForward></CaretForward> </NIcon>
          </div>
          <div></div>
          <div class="rg-flex rg-items-center">
            <NIcon size="24" color="var(--primary)"> <CaretBack></CaretBack> </NIcon>

            <NInput v-model:value="currentNode.style.marginRight" placeholder=""></NInput>
          </div>
          <div></div>
          <div class="rg-flex rg-flex-col rg-items-center">
            <NIcon size="24" color="var(--primary)"> <CaretUp></CaretUp> </NIcon>
            <NInput v-model:value="currentNode.style.marginBottom" placeholder=""></NInput>
          </div>
          <div></div>
        </div>
      </NFormItem>

      <NFormItem label="内边距">
        <div class="rg-w-full rg-grid rg-grid-cols-3 rg-gap-2">
          <div></div>
          <div class="rg-flex rg-flex-col rg-items-center">
            <NInput v-model:value="currentNode.style.paddingTop" placeholder=""></NInput>
            <NIcon size="24" color="var(--primary)"> <CaretDown></CaretDown> </NIcon>
          </div>
          <div></div>
          <div class="rg-flex rg-items-center">
            <NInput v-model:value="currentNode.style.paddingLeft" placeholder=""></NInput>
            <NIcon size="24" color="var(--primary)"> <CaretForward></CaretForward> </NIcon>
          </div>
          <div></div>
          <div class="rg-flex rg-items-center">
            <NIcon size="24" color="var(--primary)"> <CaretBack></CaretBack> </NIcon>

            <NInput v-model:value="currentNode.style.paddingRight" placeholder=""></NInput>
          </div>
          <div></div>
          <div class="rg-flex rg-flex-col rg-items-center">
            <NIcon size="24" color="var(--primary)"> <CaretUp></CaretUp> </NIcon>
            <NInput v-model:value="currentNode.style.paddingBottom" placeholder=""></NInput>
          </div>
          <div></div>
        </div>
      </NFormItem>

      <NFormItem label="背景颜色">
        <NColorPicker
          v-model:value="currentNode.style.backgroundColor"
          :actions="['clear']"
        ></NColorPicker>
      </NFormItem>

      <NFormItem label="其他配置">
        <NInput v-model:value="otherStyleString" type="textarea" @blur="handleOtherChange"></NInput>
      </NFormItem>
    </NForm>
  </NSpace>
</template>

<script setup lang="ts">
import { NSpace, NForm, NFormItem, NInput, NIcon, NColorPicker } from 'naive-ui'
import { currentNode } from 'data'
import { CaretDown, CaretUp, CaretBack, CaretForward } from '@vicons/ionicons5'
import { watch, ref, nextTick } from 'vue'

const show = ref(false)
watch(
  () => currentNode.value,
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
