import type { IComponentMap } from '@packages/types'
export const pcComponentMap: IComponentMap = {
  box: {
    component: {
      name: 'div',
    },
    includeStyle: 'all',
    style: {
      height: '60px',
    },
    canDrop: true,
  },
  text: {
    component: {
      name: 'span',
    },
  },
  image: {
    component: {
      name: 'img',
    },
    style: {
      width: '400px',
      height: '400px',
    },
  },
  button: {
    component: {
      name: 'NButton',
      import: 'naive-ui',
    },
  },
  flex: {
    component: {
      name: 'NFlex',
      import: 'naive-ui',
    },
  },
  grid: {
    component: {
      name: 'NGrid',
      import: 'naive-ui',
    },
  },
  swiper: {
    component: {
      name: 'NSwiper',
      import: 'naive-ui',
    },
  },
  form: {
    component: {
      name: 'NaiveUiForm',
      import: 'naive-ui-form',
    },
    props: [],
  },
}
