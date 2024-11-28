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
        canDrop: true,
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

  {
    groupName: '展示组件',
    childrens: [
      {
        type: 'text',
        name: '文本',
        style: {},
      },
      {
        type: 'image',
        name: '图片',
        style: {
          width: '200px',
          height: '200px',
        },
      },
    ],
  },
]
