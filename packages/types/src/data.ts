export type DataType = 'string' | 'number' | 'object' | 'boolean' | 'array' | 'null' | 'undefined'

export interface IData {
  desc: string
  type: DataType
  propty?: string
  level: number

  children?: IData[]
}

export interface IDataConfig {
  desc: string
  type: DataType
  canHaveChild: boolean
  [key: string]: any
  childTypes?: Array<DataType>
}

export type DataConfigList = Array<IDataConfig>
