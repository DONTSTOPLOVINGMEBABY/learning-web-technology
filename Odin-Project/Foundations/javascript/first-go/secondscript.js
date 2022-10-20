/* Infinity and NAN */

console.log(1/0);
console.log(-1/0); 
console.log( "Not a number" / 2);
console.log(NaN + 1); 
console.log(3 * NaN); 
console.log("Not a number" / 2 - 1);


/* Strings *******************************************************************/

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

const intro = `Hello`;
const name3 = "Chris"; 
const greeting = `${intro}, ${name3}`; 
console.log(greeting); 

const myString = "123" ; 
const myNum = Number(myString);
console.log(typeof myNum);
const myNum2 = 123 ; 
const myString2 = myNum2.toString(); 
console.log(typeof myString2);

const song = "Fight the Youth";
const score = 9 ; 
const highestScore = 10; 
const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100 
}%.`; 
console.log(output); 


//String Methods
//Slice/Substring
const bigString = "Henry is at the park smoking weed"; 
console.log(bigString, bigString.length);
console.log(bigString.slice(bigString.length-4,bigString.length))
console.log(bigString.slice(-12,-5)) // prints starting 12 to the left up to but not including 5 to the left
console.log(bigString.substring(5)); // prints rest string starting from 5
console.log(bigString.substring(-21, 19)); // treats negative numbers as zero (prints elements 0-19)
//Replace
let text = "Please visit Microsoft!"; 
let newText = text.replace("Microsoft", "W3Schools"); 
console.log(text, newText);
let newestText = text.replace("MICROSOFT", "This Shouldn't Work"); //Will just assign the variable the original string
console.log(newestText)
let workingSolution = text.replace(/MICROSOFT/i, "W3Schools"); //Case insensitive
console.log(workingSolution)
//toUpper and toLower
let stringmixed = 'henRy Is codIng pEacefully'; 
console.log(stringmixed.toUpperCase(), stringmixed.toLowerCase());
//concat
let string4 = "Henry is ";
let string5 = "Coding Peacefully"; 
let stringmaster = "" ; stringmaster += string4 + string5 ; 
console.log(stringmaster);
let string6 = "In the Park"
let stringmaster2 = stringmaster.concat(" ", string6); // can also just do stringmaster.concact(string6);
console.log(stringmaster2); 
//trim 
let string7 = "       Hello!         " ; 
console.log("Before trim: ", string7, "*");
console.log("After Trim: ", string7.trim(), "*");
console.log("After Trim Start: ", string7.trimStart(), "*");




/****************************************************************************/



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
