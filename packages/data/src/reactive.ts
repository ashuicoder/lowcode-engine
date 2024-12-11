import { ref, reactive } from 'vue'
import { initData } from '@packages/utils'
import type { IComponentNode, IComponentNodeTree, IData } from '@packages/types'

export const currentNode = ref<IComponentNode>()
export const componentTree = ref<IComponentNodeTree>([])
export const showForbidDrop = ref(false)

export const componentData = reactive<IData[]>([initData()])

export const showOutline = ref(false)
