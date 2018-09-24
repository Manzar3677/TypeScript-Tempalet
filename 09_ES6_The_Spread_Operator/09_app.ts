/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
//using spread operator an array can be expanded and pass it as an arguments
let numbers:Array<number> = [10,20,56,87,98,25,76,77,7654];
let min:number = Math.min(...numbers);
console.log(`The min Value is: ${min}`);
// use spread operator to add array in the middle of another array
let array1:Array<number> = [30,40,50];
let array2:Array<number> = [10,20,...array1,60,70,80];
console.log(`Array2 : ${array2}`);

//
let tech1:Array<string> = ['HTML','CSS','JavaScript','JQuery','Bootstrap'];
let tech2:Array<string> =[...tech1];
console.log(`tech2 :${tech2}`);
//Ex:

function Employee(){

    let values = [];
    for(let i=0; i<arguments.length;i++){
        values[i] = arguments[i];
    }
    return values;

    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
}

