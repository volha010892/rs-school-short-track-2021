/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let mid = Math.ceil(array.length / 2);
  let numberMid = array[mid];
  while (first <= last) {
    mid = last + first;
    numberMid = array[mid];
    if (value === numberMid) {
      return mid;
    }
    if (value > numberMid) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return 'fdgfg';
}

module.exports = findIndex;
