import type { IMaterialType } from './material'
import type { StyleKey, StyleMap } from './style'
import type { WithPartial } from './common'
import type { IProp } from './prop'

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
  component: IcomponetInfo
  includeStyle?: 'all' | Array<StyleKey>
  excludeStyle?: Array<StyleKey>
  props: IProp[]
  accept?: 'all' | IMaterialType[]

  children?: IComponentNode[]
}

export type IComponentNodeTree = Array<IComponentNode>

export type IComponentMap = {
  [K in IMaterialType]: WithPartial<IComponentNode, 'id' | 'level' | 'parentId' | 'name' | 'props'>
}
