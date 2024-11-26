export interface IMaterial {
  name: string
  type: string
}

export interface IMaterialGroup {
  groupName: string
  childrens: IMaterial[]
}
