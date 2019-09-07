export const isElement = (node) => {
  return node && typeof node === 'object' && node.nodeType && node.nodeType === Node.ELEMENT_NODE;
}
