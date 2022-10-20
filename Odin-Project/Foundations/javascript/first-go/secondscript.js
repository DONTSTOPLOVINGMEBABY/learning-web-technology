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
//padding a string
let string8 = "5";
let padded = string8.padStart(5, "0"); 
console.log(padded);
string8 = "532" ; 
padded = string8.padStart(5, "0"); //Replaces up to 5 spaces, never overwrites
console.log(padded);
string8 = "5332244" ; 
padded = string8.padStart(5, "0"); // Has no effect
console.log(padded); 
string8 = "532"; 
padded = string8.padEnd(5, "0"); 
console.log(padded);
//Get specific character in a string (charAt method) and character code
let string9 = "HELLO WORLD!"; 
let character = string9.charAt(0); // can also use string[] selector
console.log(character, string9[0], string9.charCodeAt(0));
//String Split 
let string10 = "This is a big string that can be split by space, and comma."; 
console.log("The string being split: ",string10);
let splitstring = string10.split(" "); 
let splitstring2 = string10.split(",");
console.log("Split by Space: ", splitstring) ; // turns it into a list
console.log("Split by comma: ", splitstring2); 


/****************************************************************************/



/* Boolean (logical type) ***************************************************/ 


let nameFieldChecked = true ; 
let ageFieldChecked = false ; 

let isGreater = 4 > 1 ;
console.log(isGreater);  

//Comparisons
console.log("Comparisons");
console.log(2>1) ; //true
console.log(2 == 1); //false 
console.log(2!=1) ; 
let result = 3 > 1 ; 
console.log(result);
//String Comparisons
console.log("Z > A", 'Z' > 'A');
console.log("Glow > Glee", 'Glow' > 'Glee'); 
console.log("Bee > Be", 'Bee' > 'Be') ; // It compares character by character until it finds a character that's either lower or greater
console.log("Bee > Beadf", 'Bee' < 'Beadf'); // false
//Comparisons of different types
console.log('2' > 1); //true, string 2 becomes a number
console.log('01'==1); // true, string '01' becomes a number 1. For boolean values, true becomes 1 and false becomes 0
//Strict Equality
console.log("0 == false", 0 == false); //true
console.log("''==false", ''==false); // true ... '' is converted to a 0 
console.log("0 === false", 0 === false) //false, they are not exactly the same
console.log("null===undefined", null===undefined); //false
console.log("null == undefined"); //true
//undefined ... when converted to a number, undefined becomes a NaN
let x ; 
console.log(x);
//null... When converted to a number null becomes 0. It's converted to a number with comparison operators and not equality?
x = null ; 
console.log(x);

/****************************************************************************/


/*******************Conditionals*********************************************/

let truth = true ; 
let nottruth = false; 
let num = 7 ; 

if (truth) {
    console.log("Truth executed"); 
}

if (nottruth){
    console.log("Not truth executed") ; 
} else {
    console.log("The else statement executed");
}

if (!truth) {
    console.log("Logical not truth executed"); 
}   else if (num == 7) {
    console.log("Nottruth executed") ; 
} else {
    console.log("Reached the else statement"); 
}

/**********************Logical Operators**********************************/

//or finds and returns the first truthy
console.log("true || true", true || true); 
console.log("false || true", false || true);
console.log("true || false", true || false);
console.log("false || false", false || false); 
//and finds and returns the first falsy
console.log("true && true", true && true); 
console.log("true && false", true && false);
console.log("false && true", false && true); 
console.log("false && false", false && false); 
//not
console.log("not true", !true);
console.log("not false", !false); 
//examples
console.log(null || 2 || undefined); //2 is returned
//alert(alert(1) || 2 || alert(3)); //alert 1 is given, and then alert 2, and then execution halts
console.log(1 && null && 2);

if (null){ // evaluates to false
    console.log("null evaluates to true");
}
if (undefined) { //evaluates to false
    console.log("Undefined evaluates to true?")
}

/****************************************************************************/


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
