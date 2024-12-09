import type { IProp } from '@packages/types'

export function validateProp(prop: IProp): [boolean, any] {
  let result = false
  let value: any = undefined
  switch (prop.type) {
    case 'string':
      if (typeof prop.value === 'string') {
        result = true
        value = prop.value
      }
      break
    case 'number':
      if (typeof prop.value === 'number') {
        result = true
        value = prop.value
      }
      break
    case 'boolean':
      if (typeof prop.value === 'string') {
        result = true
        value = prop.value === 'true'
      }
      break
    case 'object':
      if (typeof prop.value === 'string') {
        try {
          const parseValue = JSON.parse(prop.value)
          if (typeof parseValue === 'object' && parseValue !== null && !Array.isArray(parseValue)) {
            result = true
            value = parseValue
          }
        } catch (error) {
          console.error('JSON parse error:', error)
          result = false
        }
      }
      break
    case 'array':
      if (typeof prop.value === 'string') {
        try {
          const parseValue = JSON.parse(prop.value)
          if (Array.isArray(parseValue)) {
            result = true
            value = parseValue
          }
        } catch (error) {
          console.error('JSON parse error:', error)
          result = false
        }
      }
  }
  return [result, value]
}

export function getPropShowValue(prop: IProp) {
  if (['array', 'object'].includes(prop.type)) {
    return JSON.stringify(prop.value)
  }
  if (prop.type === 'boolean') {
    return prop.value ? 'true' : 'false'
  }
  return prop.value
}
