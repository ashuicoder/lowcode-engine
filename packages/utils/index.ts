import { cloneDeep } from 'es-toolkit'
import { NIcon } from 'naive-ui'
import type { IMaterial, IComponentNode } from 'types'
import { h, type Component } from 'vue'

export function generateUniqueId() {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(2)
    window.crypto.getRandomValues(array)
    return Array.from(array, (dec) => `000000${dec.toString(16)}`.slice(-8)).join('')
  } else if (window.crypto) {
    const array = new Uint32Array(2)
    window.crypto.getRandomValues(array)
    return Array.from(array, (dec) => `000000${dec.toString(16)}`.slice(-8)).join('')
  } else {
    throw new Error('No secure random number generator available.')
  }
}

export function generateComponentNode(material: IMaterial): IComponentNode {
  const id = generateUniqueId()
  return {
    ...material,
    style: material.style ? cloneDeep(material.style) : {},
    id,
  }
}

export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
