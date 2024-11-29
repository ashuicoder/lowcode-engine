import { componentTree, currentNode } from '@packages/data'
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

export function handleDwonloadJson(fileName = 'componentTree.json') {
  const json = JSON.stringify(componentTree.value)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(url)
  document.body.removeChild(a)
}

export function handleUploadJson(file: File) {
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    const json = e.target?.result
    if (typeof json === 'string') {
      const data = JSON.parse(json)
      componentTree.value = data
      currentNode.value = componentTree.value[0]
    }
  }
  reader.readAsText(file)
}
