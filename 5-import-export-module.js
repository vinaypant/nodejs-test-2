/*
const allimports = require('./importexport/oper')
console.log(allimports.add1(5, 5))  //Function arguments
console.log(allimports.sub(10, 5))
*/
//object destructuring
const { add1, sub,name,mul } = require('./importexport/oper')
console.log(add1(5, 5))
console.log(sub(10, 5)) 
console.log(mul(10, 5)) 
console.log(name)