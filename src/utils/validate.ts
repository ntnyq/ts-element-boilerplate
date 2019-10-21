/**
 * Check if username valid
 * @param {string} val username
 */
export function isvalidUsername (val: string): boolean {
  const validNames = ['admin', 'editor']

  return validNames.includes(val)
}
