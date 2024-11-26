import type { IMaterialGroup } from 'types'
export const pcMaterials: Array<IMaterialGroup> = [
  {
    groupName: '布局组件',
    childrens: [
      {
        type: 'div',
        name: '基础盒子',
      },
      {
        type: 'NFlex',
        name: '弹性布局',
      },
      {
        type: 'NGrid',
        name: '栅格布局',
      },
    ],
  },
]
