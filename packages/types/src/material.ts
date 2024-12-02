export type IMaterialType =
  | 'box'
  | 'text'
  | 'button'
  | 'flex'
  | 'image'
  | 'swiper'
  | 'flex'
  | 'grid'
  | 'form'

export interface IMaterial {
  name: string
  type: IMaterialType
}

export interface IMaterialGroup {
  groupName: string
  childrens: IMaterial[]
}
