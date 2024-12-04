import { ref, reactive } from 'vue'
import type { IComponentNode, IComponentNodeTree } from '@packages/types'

export const currentNode = ref<IComponentNode>()
export const componentTree = ref<IComponentNodeTree>([])
export const showForbidDrop = ref(false)
export const data = reactive<Record<string, any>>({})
