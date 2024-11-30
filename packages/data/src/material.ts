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
        type: 'NButton',
        name: '弹性布局',
        canDrop: true,
        style: {
          height: '60px',
        },
      },
      {
        type: 'NGrid',
        name: '栅格布局',
        style: {},
        canDrop: true,
      },
    ],
  },

  {
    groupName: '展示组件',
    childrens: [
      {
        type: 'span',
        name: '文本',
        style: {},
      },
      {
        type: 'img',
        name: '图片',
        style: {
          width: '200px',
          height: '200px',
        },
      },
      {
        type: 'swiper',
        name: '轮播图',
        style: {
          width: '100%',
          height: '300px',
        },
      },
    ],
  },
]
