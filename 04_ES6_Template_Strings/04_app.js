/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */
// using string concatenation
var emp = {
    name: 'John',
    age: 40,
    desg: 'Manager'
};
var stringConcat = "<h2>" + emp.name + "</h2>" +
    "<h2>" + emp.age + "</h2>" +
    "<h2>" + emp.desg + "</h2>";
var containerElement = document.querySelector('#container');
containerElement.innerHTML = stringConcat;
//Template String
var laptops = {
    company: 'Apple',
    RAM: '16GB',
    disk: '1TB'
};
var templateString = "<h2>Laptop: " + laptops.company + "</h2>\n                            <h2>RAM : " + laptops.RAM + "</h2>\n                            <h2>Disk : " + laptops.disk + "</h2>";
containerElement.innerHTML = templateString;
