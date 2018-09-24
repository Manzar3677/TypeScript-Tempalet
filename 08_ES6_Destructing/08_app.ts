/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let array = [1001, 'naveen','Techlead'];
/* 
let empNo = array[0];
*/
let [empNo,empName,empDesg] = array;
console.log(`empNo : ${empNo} empName : ${empName} empDesg : ${empDesg}`);
// Usage of Destructing to exchange the values of two vars
let a =10;
let b =20;
[a,b] = [b,a]
console.log(`a : ${a} b: ${b}`);
// Usage of Destructing to assign each variable of an Object to other vars

// Best usage is to exchange the value btw a & b
