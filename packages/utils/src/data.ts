import { generateUniqueId } from './tool'

import type { IData } from '@packages/types'
export function initData(): IData {
  return {
    id: generateUniqueId(),
    desc: '顶层对象',
    type: 'object',
    level: 1,
    allowNull: false,
    canHaveChild: true,
    children: [],
  }
}
