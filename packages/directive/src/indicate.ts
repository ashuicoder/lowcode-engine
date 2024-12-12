import type { Directive } from 'vue'

export const indicate: Directive = {
  mounted(el) {
    console.log(el)
  },
}
