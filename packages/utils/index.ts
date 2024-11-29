import { cloneDeep } from 'es-toolkit'
import { NIcon } from 'naive-ui'
import type { IMaterial, IComponentNode, IComponentNodeTree } from '@packages/types'
import { h, type Component, type Ref } from 'vue'

export function generateUniqueId() {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(2)
    window.crypto.getRandomValues(array)
    return Array.from(array, (dec) => `000000${dec.toString(16)}`.slice(-8)).join('')
  } else if (window.crypto) {
    const array = new Uint32Array(2)
    window.crypto.getRandomValues(array)
    return Array.from(array, (dec) => `000000${dec.toString(16)}`.slice(-8)).join('')
  } else {
    throw new Error('No secure random number generator available.')
  }
}

export function generateComponentNode(material: IMaterial, parent: IComponentNode): IComponentNode {
  const id = generateUniqueId()
  return {
    ...material,
    style: material.style ? cloneDeep(material.style) : {},
    id,
    level: parent.level + 1,
    parentId: parent.id,
  }
}

export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export function initDrawBoard(): IComponentNode {
  return {
    id: generateUniqueId(),
    type: 'div',
    name: '基础版本',
    style: {
      height: '800px',
      width: '100%',
    },
    canDrop: true,
    level: 1,
  }
}

/**
 * 递归删除节点
 * @param tree - 节点树
 * @param nodeId - 要删除的节点ID
 */
export function removeNode(tree: Ref<IComponentNodeTree>, nodeId: string): void {
  function traverse(node: IComponentNode): boolean {
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

  const treeValue = tree.value
  for (let i = 0; i < treeValue.length; i++) {
    if (traverse(treeValue[i])) {
      treeValue.splice(i, 1)
      break
    }
  }
}

/**
 * 递归查找节点及其父节点
 * @param tree - 节点树
 * @param nodeId - 要查找的节点ID
 * @returns [父节点, 当前节点] 或 [null, null] 如果未找到
 */
function findNodeAndParent(
  tree: Ref<IComponentNodeTree>,
  nodeId: string,
): [IComponentNode | null, IComponentNode | null] {
  let parent: IComponentNode | null = null
  let current: IComponentNode | null = null

  function traverse(node: IComponentNode, parentNode: IComponentNode | null): boolean {
    if (node.id === nodeId) {
      parent = parentNode
      current = node
      return true
    }

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        if (traverse(node.children[i], node)) {
          return true
        }
      }
    }

    return false
  }

  const treeValue = tree.value
  for (let i = 0; i < treeValue.length; i++) {
    if (traverse(treeValue[i], null)) {
      break
    }
  }

  return [parent, current]
}

/**
 * 上移节点
 * @param tree - 节点树
 * @param nodeId - 要上移的节点ID
 */
export function moveNodeUp(tree: Ref<IComponentNodeTree>, nodeId: string): void {
  const [parent, current] = findNodeAndParent(tree, nodeId)

  if (!current || !parent || !parent.children) return

  const currentIndex = parent.children.indexOf(current)
  if (currentIndex > 0) {
    parent.children.splice(currentIndex - 1, 0, parent.children.splice(currentIndex, 1)[0])
  }
}

/**
 * 下移节点
 * @param tree - 节点树
 * @param nodeId - 要下移的节点ID
 */
export function moveNodeDown(tree: Ref<IComponentNodeTree>, nodeId: string): void {
  const [parent, current] = findNodeAndParent(tree, nodeId)

  if (!current || !parent || !parent.children) return

  const currentIndex = parent.children.indexOf(current)
  if (currentIndex < parent.children.length - 1) {
    parent.children.splice(currentIndex + 1, 0, parent.children.splice(currentIndex, 1)[0])
  }
}
