import { ref } from 'vue'
import type { IComponentNode, IComponentNodeTree } from '@packages/types'

export const currentNode = ref<IComponentNode>()
export const componentTree = ref<IComponentNodeTree>([])
