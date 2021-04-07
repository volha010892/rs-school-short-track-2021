/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const newS1 = s1.split('');
  const newS2 = s2.split('');
  const result = [];
  for (let i = 0; i < newS1.length; i++) {
    if (newS2.indexOf(newS1[i]) !== -1) {
      newS2.splice(newS2.indexOf(newS1[i]), 1);
      result.push(newS1[i]);
    }
  }
  return result.length;
}

module.exports = getCommonCharacterCount;
