function hello() {
    return "Hello World"; 
}

function hello_optional(second = "world") {
    return `hello ${second}`;
}

function no_arg_given (arg) {
    arg = arg || "The arg was empty";
    return arg;
}

function fibonnaci(number) {
    if (number <= 2){return 1;}
    return fibonnaci(number - 1) + fibonnaci(number - 2);
}

function factorial(number){
    if (number == 0){return 1;}
    return number * factorial(number-1);
}

// Come back to Anonymous Functions and Arrow Functions
const originals = [1, 2, 3] ; 
const doubled = originals.map((item) => item * 2) ; // Use map to double every item in the array
console.log(originals, doubled);

//Textbox Examples
const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');
textBox.addEventListener('keydown', (event) =>
output.textContent = `You pressed "${event.key}".`);

//Function Expression
let sayHi = function() {
    console.log("Hello there!");
} ;   
/* Function Declaration
sayHi() {
    console.log("HEllo there!");
} ; */ 

let assignFunction = sayHi;
assignFunction();
sayHi() ; 




//Run Functions
console.log(hello());
console.log("Without Args: ", hello_optional(),
"... With Henry as arg: ", hello_optional("Henry"));
console.log("When no arg is given: ", no_arg_given(), "\nWhen an Arg is given: ", no_arg_given("Arg!!!"));
console.log("Running Fibonnaci: ", fibonnaci(10));
console.log("Running factorial ", factorial(5))



//End of Odin Page Assignment
function add7(number) {return number + 7;}
function multiply(number1, number2){return number1 * number2;}
function capitalize (string) {return `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`;} 
function lastLetter(string) {return string.substring(string.length - 1);}



console.log(add7(5));
console.log(multiply(5,7));
console.log(capitalize("heNRY"));
console.log(lastLetter("Henry"));
