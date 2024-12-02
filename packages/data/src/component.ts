import type { IComponentMap } from '@packages/types'
export const pcComponentMap: IComponentMap = {
  box: {
    component: 'div',
    style: {
      height: '60px',
    },
  },
  text: {
    component: 'span',
  },
  image: {
    component: 'img',
  },
  button: {
    component: 'NButton',
  },
  flex: {
    component: 'NFlex',
  },
  grid: {
    component: 'NGrid',
  },
  swiper: {
    component: 'NSwiper',
  },
}
