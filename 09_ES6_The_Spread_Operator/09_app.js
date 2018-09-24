/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
//using spread operator an array can be expanded and pass it as an arguments
var numbers = [10, 20, 56, 87, 98, 25, 76, 77, 7654];
var min = Math.min.apply(Math, numbers);
console.log("The min Value is: " + min);
// use spread operator to add array in the middle of another array
var array1 = [30, 40, 50];
var array2 = [10, 20].concat(array1, [60, 70, 80]);
console.log("Array2 : " + array2);
//
var tech1 = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
var tech2 = tech1.slice();
console.log("tech2 :" + tech2);
//Ex:
function Employee() {
    var values = [];
    for (var i = 0; i < arguments.length; i++) {
        values[i] = arguments[i];
    }
    return values;
    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
}
