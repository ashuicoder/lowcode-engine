import type { IMaterialType } from './material'
import type { StyleKey, StyleMap } from './style'

interface IcomponetInfo {
  name: string
  import?: string
}

export interface IComponentNode {
  id: string
  name: string
  level: number
  parentId?: string
  style?: StyleMap
  canDrop?: boolean
  component: IcomponetInfo
  includeStyle?: 'all' | Array<StyleKey>
  excludeStyle?: Array<StyleKey>
  children?: IComponentNode[]
}

export type IComponentNodeTree = Array<IComponentNode>

export type IComponentMap = {
  [K in IMaterialType]: Omit<IComponentNode, 'id' | 'level' | 'parentId' | 'name'>
}
