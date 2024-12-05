export type DataType = 'string' | 'number' | 'object' | 'boolean' | 'array'
export type DataTypeDesc = '字符串' | '数字' | '对象' | '布尔' | '数组'

export interface IData {
  desc: string
  type: DataType
  property?: string
  level: number
  children?: IData[]
  canHaveChild: boolean
  id: string
  parentId?: string
}

export type DataConfig = {
  [K in DataType]: {
    desc: DataTypeDesc
    canHaveChild: boolean
    childTypes?: Array<DataType>
  }
}
