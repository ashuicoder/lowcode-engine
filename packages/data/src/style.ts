import type { IStyleConfigMap } from 'packages/types'

export const styleConfigMap: IStyleConfigMap = {
  width: {
    desc: '宽度',
    action: 'input',
  },
  height: {
    desc: '高度',
    action: 'input',
  },

  backgroundColor: {
    desc: '背景颜色',
    action: 'color',
  },
  color: {
    desc: '文本颜色',
    action: 'color',
  },
  lineHeight: {
    desc: '行高',
    action: 'input',
  },
  fontSize: {
    desc: '字体大小',
    action: 'input',
  },
  fontWeight: {
    desc: '字体粗细',
    action: 'select',
    options: [
      { label: '100', value: '100' },
      { label: '200', value: '200' },
      { label: '300', value: '300' },
      { label: '400', value: '400' },
      { label: '500', value: '500' },
      { label: '600', value: '600' },
      { label: '700', value: '700' },
      { label: '800', value: '800' },
      { label: '900', value: '900' },
    ],
  },
  textAlign: {
    desc: '文本对齐方式',
    action: 'select',
    options: [
      { label: '左对齐', value: 'left' },
      { label: '右对齐', value: 'right' },
      { label: '居中对齐', value: 'center' },
      { label: '两端对齐', value: 'justify' },
    ],
  },
  textDecoration: {
    desc: '文本装饰',
    action: 'select',
    options: [
      { label: '无', value: 'none' },
      { label: '下划线', value: 'underline' },
      { label: '删除线', value: 'line-through' },
    ],
  },
  borderRadius: {
    desc: '边框圆角',
    action: 'input',
    group: {
      borderTopLeftRadius: {
        desc: '左上圆角',
        action: 'input',
      },
      borderTopRightRadius: {
        desc: '右上圆角',
        action: 'input',
      },
      borderBottomLeftRadius: {
        desc: '左下圆角',
        action: 'input',
      },
      borderBottomRightRadius: {
        desc: '右下圆角',
        action: 'input',
      },
    },
  },

  border: {
    desc: '边框',
    action: 'input',
    group: {
      borderLeft: {
        desc: '左边框',
        action: 'input',
      },
      borderRight: {
        desc: '右边框',
        action: 'input',
      },
      borderTop: {
        desc: '上边框',
        action: 'input',
      },
      borderBottom: {
        desc: '下边框',
        action: 'input',
      },
      borderWidth: {
        desc: '边框宽度',
        action: 'input',
      },
    },
  },
  padding: {
    desc: '内边距',
    action: 'input',
    group: {
      paddingLeft: {
        desc: '左边距',
        action: 'input',
      },
      paddingRight: {
        desc: '右边距',
        action: 'input',
      },
      paddingTop: {
        desc: '上边距',
        action: 'input',
      },
      paddingBottom: {
        desc: '下边距',
        action: 'input',
      },
    },
  },
  margin: {
    desc: '外边距',
    action: 'input',
    group: {
      marginTop: {
        desc: '上边距',
        action: 'input',
      },
      marginLeft: {
        desc: '左边距',
        action: 'input',
      },

      marginRight: {
        desc: '右边距',
        action: 'input',
      },

      marginBottom: {
        desc: '下边距',
        action: 'input',
      },
    },
  },
  opacity: {
    desc: '透明度',
    action: 'input',
  },
  overflow: {
    desc: '内容溢出处理',
    action: 'select',
    options: [
      { label: '溢出隐藏', value: 'hidden' },
      { label: '滚动条', value: 'scroll' },
      { label: '自动', value: 'auto' },
    ],
  },

  boxShadow: {
    desc: '阴影',
    action: 'input',
  },

  userSelect: {
    desc: '鼠标选择',
    action: 'select',
    options: [
      { label: '自动', value: 'auto' },
      { label: '文本', value: 'text' },
      { label: '所有', value: 'all' },
      { label: '禁止', value: 'none' },
    ],
  },
}
