const _ = require('lodash');

const num = [1, [2, [3, [4]]]];

const newNum = _.flattenDeep(num);
console.log(newNum);