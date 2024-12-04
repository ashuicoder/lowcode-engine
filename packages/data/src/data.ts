import type { DataConfigList } from '@packages/types'

export const dataList: DataConfigList = [
  {
    type: 'string',
    desc: '字符串',
    canHaveChild: false,
  },
  {
    type: 'number',
    desc: '数字',
    canHaveChild: false,
  },
  {
    type: 'boolean',
    desc: '布尔',
    canHaveChild: false,
  },
  {
    type: 'object',
    desc: '对象',
    canHaveChild: true,
    childTypes: ['string', 'number', 'boolean', 'object', 'array'],
  },
  {
    type: 'array',
    desc: '数组',
    canHaveChild: true,
    childTypes: ['string', 'number', 'boolean', 'object', 'array'],
  },
  {
    type: 'null',
    desc: '空',
    canHaveChild: false,
  },
  {
    type: 'undefined',
    desc: '未定义',
    canHaveChild: false,
  },
]
