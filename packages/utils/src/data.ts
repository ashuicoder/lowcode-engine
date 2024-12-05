import { generateUniqueId } from './tool'

import type { DataType, IData } from '@packages/types'
export function initData(): IData {
  return {
    id: generateUniqueId(),
    desc: '顶层对象',
    type: 'object',
    level: 1,
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

export function generateDefaultValue(type: DataType) {
  switch (type) {
    case 'string':
      return ''
    case 'number':
      return 0
    case 'boolean':
      return false
    case 'object':
      return {}
    case 'array':
      return []
    default:
      return ''
  }
}

export function generateData(data: IData) {
  const defaultValue = generateDefaultValue(data.type) as Record<string, unknown>

  if (data.children && data.children.length > 0) {
    if (data.type === 'object') {
      data.children.forEach((item) => {
        defaultValue[item.property!] = generateData(item) // 递归生成子节点的数据
      })
    } else if (data.type === 'array') {
      // 如果是数组类型，直接使用默认值
      return defaultValue
    }
  }

  return defaultValue
}
