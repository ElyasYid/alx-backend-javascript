/**
 * Checks if a set contains each element in an array.
 * @param {Set} {array}
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
