<template>
  <component
    :ref="setDrop"
    :style="node.style"
    :is="node.component.name"
    class="rg-border rg-border-dashed rg-relative rg-compoent"
    @click.stop="handleComponentClick"
    @contextmenu.stop="onContextMenu"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { currentNode, componentTree } from '@packages/data'
import { useDrop } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'
import type { IMaterial, IComponentNode } from '@packages/types'
import { computed, watch } from 'vue'
import colors from 'tailwindcss/colors'

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

import { Delete20Regular, ArrowSortUp24Filled, ArrowSortDown24Filled } from '@vicons/fluent'
import { renderIcon, removeNode, moveNodeDown, moveNodeUp } from '@packages/utils'
import { showForbidDrop } from '@packages/data'

const { node } = defineProps<{
  node: IComponentNode
}>()

const emits = defineEmits<{
  drop: [material: IMaterial]
}>()

const [collect, dropBind] = useDrop(() => ({
  accept: ['material'],
  drop(item: IMaterial, monitor) {
    if (!node.canDrop) return
    if (monitor.didDrop()) return
    emits('drop', item)
  },
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }),
}))

const { isOverCurrent } = toRefs(collect)

function setDrop(el: HTMLElement | Record<string, any>) {
  if (el instanceof window.HTMLElement) {
    dropBind(el)
    return
  }
  if (!el.$el) {
    console.error('el.$el is null')
    return
  }
  dropBind(el.$el)
}

watch(isOverCurrent, (val) => {
  showForbidDrop.value = val && !node.canDrop
})

const borderColor = computed(() => {
  if (isOverCurrent.value && node.canDrop) return colors.green[500]
  if (isOverCurrent.value && !node.canDrop) return colors.red[500]

  if (node.id === currentNode.value?.id) return 'var(--primary)'
  return colors.gray[300]
})

const contentStr = computed(() => {
  if (!node.canDrop && isOverCurrent.value) return '"该元素不支持放置"'
  return '""'
})

function handleComponentClick() {
  if (node.id === currentNode.value?.id) return
  currentNode.value = node
}

function onContextMenu(e: MouseEvent) {
  //prevent the browser's default menu
  e.preventDefault()
  //show your menu
  ContextMenu.showContextMenu({
    x: e.x,
    y: e.y,
    items: [
      {
        label: '上移',
        onClick: () => {
          moveNodeUp(componentTree, node.id)
        },
        icon: renderIcon(ArrowSortUp24Filled),
      },
      {
        label: '下移',
        onClick: () => {
          moveNodeDown(componentTree, node.id)
        },
        icon: renderIcon(ArrowSortDown24Filled),
      },
      {
        label: '删除',
        disabled: node.level === 1,
        onClick: () => {
          removeNode(componentTree, node.id)
        },
        icon: renderIcon(Delete20Regular),
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
.rg-compoent {
  &::before {
    content: v-bind(contentStr);
    position: absolute;
    pointer-events: none;
    color: red;
    @apply rg-flex rg-justify-center rg-items-center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @apply rg-border rg-border-dashed;
    border-color: v-bind(borderColor);
  }
}
</style>
