/**
 * Format a number as a string that's suitable for display as a price.
 * @param price The number to format.
 * @returns A string representation of the price.
 */
export const formatPrice = (price: number): string => {
  return price.toLocaleString('en-US')
}
