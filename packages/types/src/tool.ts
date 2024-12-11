import type { VNode } from 'vue'

export interface ITool {
  name: string
  action: string
  icon: () => VNode
  onClick: () => void
}
