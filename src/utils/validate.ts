/**
 * Check if username valid
 * @param [string] str username
 */
export function isvalidUsername (str: string): boolean {
  const validNames = ['admin', 'editor']

  return validNames.includes(str)
}
