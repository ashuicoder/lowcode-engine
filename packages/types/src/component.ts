export interface IMaterial {
  name: string
  type: string
  style?: Record<string, any>
  includeStyle?: string[]
  canDrop?: boolean
}

export interface IMaterialGroup {
  groupName: string
  childrens: IMaterial[]
}

export interface IComponentNode extends IMaterial {
  id: string
  level: number
  parentId?: string
  children?: IComponentNode[]
}

export type IComponentNodeTree = Array<IComponentNode>
