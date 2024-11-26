import type { CSSProperties } from 'vue'
export interface IMaterial {
  name: string
  type: string
  style?: CSSProperties
}

export interface IMaterialGroup {
  groupName: string
  childrens: IMaterial[]
}

export interface IComponentNode extends IMaterial {
  id: string
  children?: Array<IComponentNode>
}

export type IComponentNodeTree = Array<IComponentNode>
