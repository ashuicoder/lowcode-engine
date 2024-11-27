export interface IMaterial {
  name: string
  type: string
  style: Record<string, string | null>
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
