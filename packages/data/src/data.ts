import type { DataConfig, DataType } from '@packages/types'

export const dataConfig: DataConfig = {
  string: {
    desc: '字符串',
    canHaveChild: false,
  },
  number: {
    desc: '数字',
    canHaveChild: false,
  },
  boolean: {
    desc: '布尔',
    canHaveChild: false,
  },
  object: {
    desc: '对象',
    canHaveChild: true,
    childTypes: ['string', 'number', 'boolean', 'object', 'array'],
  },
  array: {
    desc: '数组',
    canHaveChild: true,
    childTypes: ['string', 'number', 'boolean', 'object', 'array'],
  },
}

export const dataConfigList = Object.keys(dataConfig).map((key) => {
  return {
    label: dataConfig[key as DataType].desc,
    value: key,
  }
})
