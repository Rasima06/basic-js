const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(array)) {
    let dreamTeam = '';
    array.forEach(element => {
      if (typeof element === 'string') {
      dreamTeam = dreamTeam + element.trim().toUpperCase()[0];
    }});
      dreamTeam = dreamTeam.split('').sort().join('');
      if (dreamTeam.length < 1) {
        return false;
      } else {return dreamTeam};
  } else {return false};
}

module.exports = {
  createDreamTeam
};
