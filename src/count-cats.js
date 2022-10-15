const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = array.flat(1);
  let counter = 0;
  arr.forEach(function (item, index, array) {
    if (item === '^^') {
      return counter++;
    }})
    return counter;
}

module.exports = {
  countCats
};
