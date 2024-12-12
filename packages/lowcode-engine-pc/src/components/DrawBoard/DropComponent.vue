<template>
  <component
    :ref="setDrop"
    :style="node.style"
    :is="node.component.name"
    :id="node.id"
    class="rg-border rg-border-dashed rg-border-slate-300 rg-relative"
    @click.stop="handleComponentClick"
    @contextmenu.stop="onContextMenu"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { currentNode, componentTree } from '@packages/data'
import { useDrop } from 'vue3-dnd'
import type { IMaterial, IComponentNode } from '@packages/types'

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

import { deleteIcon, upIcon, downIcon } from '@package/icon'
import { renderIcon, removeNode, moveNodeDown, moveNodeUp, generateAccept } from '@packages/utils'

const { node } = defineProps<{
  node: IComponentNode
}>()

const emits = defineEmits<{
  drop: [material: IMaterial]
}>()

const accept = generateAccept(node)

const [collect, dropBind] = useDrop(() => ({
  accept,
  drop(item: IMaterial, monitor) {
    console.log(node)
    console.log(item, accept)
    if (!collect.value.isCurrentOver) return
    if (monitor.didDrop()) return
    if (!accept.includes(item.type)) return

    emits('drop', item)
  },

  collect: (monitor) => ({
    isCurrentOver: monitor.isOver({ shallow: true }),
  }),
  // canDrop(item: IMaterial) {
  //   return accept.includes(item.type)
  // },
}))
function setDrop(el: HTMLElement | Record<string, any> | null) {
  if (!el) return
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
        icon: renderIcon(upIcon),
      },
      {
        label: '下移',
        onClick: () => {
          moveNodeDown(componentTree, node.id)
        },
        icon: renderIcon(downIcon),
      },
      {
        label: '删除',
        disabled: node.level === 1,
        onClick: () => {
          removeNode(componentTree, node.id)
        },
        icon: renderIcon(deleteIcon),
      },
    ],
  })
}
</script>

<style lang="scss" scoped></style>
