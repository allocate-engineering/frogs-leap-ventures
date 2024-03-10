
/**
 * Filters an array based on a given predicate function.
 * @param {Array} items - The array to filter.
 * @param {Function} predicate - The function used to determine whether an item should be included in the filtered array.
 * @returns {Array} A new array containing items that match the predicate function.
 */
function filterArray(items, predicate) {
  return items.filter(predicate)
}

/**
 * Maps an array using a provided mapper function.
 *
 * @param {Array} items - The array to be mapped.
 * @param {Function} mapper - The function used to map each item in the array.
 * @returns {Array} - The mapped array.
 */
function mapArray(items, mapper) {
  return items.map(mapper)
}

/**
 * Enhances an object by adding or updating a key-value pair.
 *
 * @param {object} obj - The object to enhance.
 * @param {string} key - The key to add or update.
 * @param {*} value - The value to assign to the key.
 * @returns {object} - The enhanced object.
 */
function enhanceObject(obj, key, value) {
  const result = { ...obj }
  result[key] = value
  return result
}

/**
 * Calculates the total investment amount from an array of ventures.
 *
 * @param {Array} ventures - The array of ventures.
 * @returns {number} The total investment amount.
 */
function calculateTotalInvestment(ventures) {
  return ventures.reduce((total, venture) => total + (venture.amountInvested || 0), 0)
}

export { filterArray, mapArray, enhanceObject, calculateTotalInvestment }
