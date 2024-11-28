import type { IMaterialGroup } from '@packages/types'
export const pcMaterials: Array<IMaterialGroup> = [
  {
    groupName: '布局组件',
    childrens: [
      {
        type: 'div',
        name: '基础盒子',
        style: {
          height: '60px',
        },
      },
      {
        type: 'NFlex',
        name: '弹性布局',
        style: {
          height: '60px',
        },
      },
      {
        type: 'NGrid',
        name: '栅格布局',
        style: {},
      },
    ],
  },
]
