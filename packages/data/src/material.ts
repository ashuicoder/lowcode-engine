import type { IMaterialGroup } from '@packages/types'
export const pcMaterials: Array<IMaterialGroup> = [
  {
    groupName: '布局组件',
    childrens: [
      {
        type: 'box',
        name: '基础盒子',
      },
      {
        type: 'button',
        name: '弹性布局',
      },
      {
        type: 'grid',
        name: '栅格布局',
      },
    ],
  },

  {
    groupName: '展示组件',
    childrens: [
      {
        type: 'text',
        name: '文本',
      },
      {
        type: 'image',
        name: '图片',
      },
      {
        type: 'swiper',
        name: '轮播图',
      },
    ],
  },
]
