<template>
  <div
    :style="tooltipInfo"
    class="rg-absolute rg-border rg-border-primary rg-border-dashed rg-pointer-events-none"
  ></div>
</template>

<script setup lang="ts">
import { currentNode, DRAWER_CONTAINER_ID } from '@packages/data'
import { nextTick, ref, watch } from 'vue'

watch(
  currentNode,
  (val) => {
    if (!val) return
    nextTick(() => getComponentInfo(val.id))
  },
  {
    immediate: true,
    deep: true,
  },
)

const tooltipInfo = ref({
  width: '0px',
  height: '0px',
  left: '0px',
  top: '0px',
})

function getComponentInfo(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  const info = getOffsetRectRelativeToAncestor(
    target,
    document.getElementById(DRAWER_CONTAINER_ID)!,
  )
  console.log(info)
  tooltipInfo.value = info
}

function getOffsetRectRelativeToAncestor(elem: HTMLElement, ancestor: HTMLElement) {
  // 获取元素和祖先元素的边界矩形
  const elemRect = elem.getBoundingClientRect()
  const ancestorRect = ancestor.getBoundingClientRect()

  // 获取祖先元素的滚动偏移量
  const ancestorScrollTop = ancestor.scrollTop || 0
  const ancestorScrollLeft = ancestor.scrollLeft || 0

  // 计算相对于祖先元素的偏移量（考虑滚动）
  const offsetX = elemRect.left - ancestorRect.left + ancestorScrollLeft
  const offsetY = elemRect.top - ancestorRect.top + ancestorScrollTop

  return {
    left: offsetX + 'px',
    top: offsetY + 'px',
    width: elemRect.width + 'px',
    height: elemRect.height + 'px',
  }
}
</script>

<style scoped></style>
