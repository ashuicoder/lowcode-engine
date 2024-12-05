import { generateUniqueId } from './tool'

import type { IData } from '@packages/types'
export function initData(): IData {
  return {
    id: generateUniqueId(),
    desc: '顶层对象',
    type: 'object',
    level: 1,
    allowNull: false,
    canHaveChild: true,
    children: [],
  }
}

export function removeData(tree: IData[], nodeId: string): void {
  function traverse(node: IData): boolean {
    if (node.id === nodeId) {
      return true // 找到节点，标记为删除
    }

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        if (traverse(node.children[i])) {
          node.children.splice(i, 1)
          return false // 删除子节点后停止继续遍历当前分支
        }
      }
    }

    return false
  }
  for (let i = 0; i < tree.length; i++) {
    if (traverse(tree[i])) {
      tree.splice(i, 1)
      break
    }
  }
}
