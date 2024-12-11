import type { Component } from 'vue'

export interface ITool {
  name: string
  action: string
  icon: Component
  onClick: () => void
}
