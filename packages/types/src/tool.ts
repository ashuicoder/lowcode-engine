import type { VNode } from 'vue'

export interface ITool {
  name: string
  icon: () => VNode
  action: string
  onClick: () => void
}
