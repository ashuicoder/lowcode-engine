import type { SelectOption } from 'naive-ui'
import type { Properties, StandardProperties } from 'csstype'

export type StyleMap = Properties
export type StyleKey = keyof StandardProperties

export interface IStyleConfig {
  desc: string
  action: 'input' | 'select' | 'color' | 'upload'
  options?: Array<SelectOption>
  group?: IStyleConfigMap
}

export type IStyleConfigMap = {
  [K in StyleKey]?: IStyleConfig
}
