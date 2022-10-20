/* Infinity and NAN */

console.log(1/0);
console.log(-1/0); 
console.log( "Not a number" / 2);
console.log(NaN + 1); 
console.log(3 * NaN); 
console.log("Not a number" / 2 - 1);

/* Strings */

console.log("Srings\n\n\n\n")

let str = "Hello" ; 
let str2 = 'Single Quote are ok too' ;
let phrase = `can embed another ${str}`; 

let name2 = "John"; 
console.log(`Hello ${name2}`); 
console.log(`The result is ${1+2}`); 

const string1 = "The revolution will not be televised."; 
console.log(string1);

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue." ;
console.log(sglDbl);
console.log(dblSgl);

const bigMouth = 'I\'ve got the no right to take my place...';
console.log(bigMouth);


/* Boolean (logical type) */ 
let nameFieldChecked = true ; 
let ageFieldChecked = false ; 

let isGreater = 4 > 1 ;
console.log(isGreater);


/* null and undefined types */

//undefined
let x ; 
console.log(x);
//null
x = null ; 
console.log(x);


/* Typeof operator */ 

console.log("Type of Operators\n\n\n\n")
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert); 
