/**
 * Creates a buffer array with a given position set to a given value.
 * @param {number} length - The length of the buffer.
 * @param {number} position - The position to modify.
 * @param {number} value - The value to be stored in the position.
 * @returns {DataView} - Dataview representing buffer
 * @throws {Error} If the position is outside the range of the buffer.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
