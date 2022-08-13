const path = require('path')
const filePath = 'D:/PracticeProjects/NodeJS2/index.js'
console.log(path.dirname(filePath))
console.log(path.extname(filePath))
console.log(path.basename(filePath))

const myPath = path.parse(filePath);
console.log(myPath.basename);