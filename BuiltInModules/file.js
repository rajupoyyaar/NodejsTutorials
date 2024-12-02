const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./Content/subfolder/test.txt', 'utf8')
console.log(first);

const second = readFileSync('./Content/subfolder/second.txt', 'utf8')
console.log(second);

writeFileSync('./Content/subfolder/write.txt', `Here is the result: ${first}, ${second}`)
