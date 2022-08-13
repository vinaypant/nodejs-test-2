const add1 = (num1, num2) => {  //Function parameters
    return num1 + num2;

};
const sub = (num1, num2) => {  //Function parameters
    return num1 - num2;

};
const mul = (num1, num2) => {  //Function parameters
    return num1 * num2;

};
const name = "vinod";

//module.exports = add; //for 1

/*
//---for more than 1
module.exports.add1 = add
module.exports.sub = sub
module.exports.nam = name

*/
module.exports = { add1, sub, mul,name }