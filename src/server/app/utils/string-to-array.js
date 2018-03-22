const _ = require('lodash');

const deleteChars = (string, chars = []) => {
  let str = string;
  chars.map((char) => {
    str = _.trim(string, char);
    return char;
  });
  return str;
};

const isHasLength = string => string.length !== 0;

function stringToArray(string, chars) {
  let arr = string.split('\n');
  arr = arr.map(item => deleteChars(item, chars));
  return arr.filter(item => isHasLength(item));
}

module.exports = stringToArray;