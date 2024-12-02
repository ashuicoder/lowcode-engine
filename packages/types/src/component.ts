import type { IMaterialType } from './material'

export interface IComponentNode {
  id: string
  name: string
  level: number
  parentId?: string
  style?: Record<string, any>
  canDrop?: boolean
  component: string
  children?: IComponentNode[]
}

export type IComponentNodeTree = Array<IComponentNode>

export type IComponentMap = Record<
  IMaterialType,
  Omit<IComponentNode, 'id' | 'level' | 'parentId' | 'name'>
>
