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
    accept: 'all',
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
    accept: ['box'],
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
      import: 'naive-ui',
    },
    accept: ['form-item'],
    includeStyle: ['height'],
    style: {
      height: '60px',
    },
  },
  'form-item': {
    component: {
      name: 'NFormItem',
      import: 'naive-ui',
    },
  },
  input: {
    component: {
      name: 'NInput',
      import: 'naive-ui',
    },
  },
}
