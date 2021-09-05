// variables
/*
let country = 'India';
let continent = 'Asia';
let population = '1.5B';

console.log({ country, continent, population });
*/
// types

// primitive
// Number => floating point numbers
// Boolean => True OR False
// String => "Hello World"
// Undefined => Value taken by a variable not yet defined
// Null => Empty Value
// Symbol (ES2015) => Value that is Unique and cannot be changed
// BigInt => Large integers than Number can hold

// In JavaScript, Values have data types NOT the variables!! Variables just hold value that have types
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// typeof => returns string
console.log(typeof 'javaScriptIsFun'); // string
console.log(typeof javaScriptIsFun); // boolean
// console.log(typeof 100);  number
console.log(typeof true); // boolean
console.log(typeof undefined); // object
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
let year;
console.log({ year, type: typeof year });
year = 2021;
console.log(year);
console.log(typeof typeof 'hello'); // string
console.log(typeof typeof null); // string

*/

// let const var

// var
// var age = 45;
// let age = 34;
// console.log(age);
// SyntaxError: Identifier 'age' has already been declared

// const birthYear = 1993;
// birthYear = 1994;
// TypeError: Assignment to constant variable.
// const job;
// SyntaxError: Missing initializer in const declaration

// var job = 'Developer';
// job = 'Teacher';

// lastName = 'Ahmad'; // creates a property in global scope
// console.log(lastName);

// const currentYear = 2021;
// const ageOfTauqeer = currentYear - 1993;
// const ageOfDave = currentYear - 1994;

// console.log(ageOfTauqeer, ageOfDave);

// console.log(ageOfTauqeer + 2, ageOfDave / 10, 2 ** 3);
// 2 ** 3 => 2 * 2 * 2

// const firstName = 'Tauqeer';
// const lastName = 'Ahmad';

// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// let x = 10 + 5;
// x += 10;
// console.log(x);
// x *= 2;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// ++x;
// console.log(x);
// --x;
// console.log(x);

// console.log(x > 75); // false
// console.log(x < 75); // true
// console.log(x >= 75); // false
// console.log(x <= 75); // true
// console.log(x === 50); // true
// console.log(x == '50'); // type coercion

// console.log(2021 - 1993 > 2021 - 1995); //true
// operator precedence

// let x, y;

// x = y = 25 - 10 - 5;
// console.log({ x, y });

// string literals
const firstName = 'Tauqeer';
const lastName = 'Ahmad';
const birthYear = 1993;

const message = `I'm  ${firstName} ${lastName} and I am 
  ${2021 - birthYear} years old.`;

console.log(message);
