// Hello World App
let greeting:string = 'Good Moring';
console.log(greeting);
// Variables Creation in TypeScript
function greetMe(name:string,age:number):string{
    let greetMsg:string = ' Hello '+name+  ' you are ' +age+ ' years old ';
    return greetMsg;
}
let output:string = greetMe('jhon',40);
console.log(output);

