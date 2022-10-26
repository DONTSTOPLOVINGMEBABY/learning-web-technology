
//Arrays
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("example").innerHTML = cars; 
//Dictionary sort of array (Key value pair)
const person = {firstName: "John", lastName: "Doe", age:46};
console.log("This should return the first element: ", person.firstName);
//Methods
const numbers = [1, 4, 5, 7, 2, 3, 4, 5, 11, 2, 344, 56];
const sorted = numbers.sort() // This doesn't sort properly?
console.log(`The array numbers is ${numbers.length} and when sorted looks like this: ${sorted}`);



//Loops
for (let i = 0; i < cars.length ; i++){
    console.log(`${i} ${cars[i]}`);
}
//Using for each
console.log("You can also use foreach");
cars.forEach( (element) => {
    console.log(element)
});

cars.forEach(hello)
function hello (element) {
    console.log(`Hello ${element}`);
}
//Can you spot the difference between while and do while?
let whilectr = 0 ; 
while (whilectr < 4){
    console.log(2 ** whilectr);
    whilectr++;
}

whilectr= 0 ;

do {
    console.log(2 ** whilectr);
} while (whilectr++ < 4)

//You can skip first entry in for loop:
let forctr = 4 ; 
for (; forctr < 5 ; forctr++){forctr = forctr ** 3;}
console.log("Forctr ", forctr) ;

//break <labelName>

let variable = 0 ; 
outer: for (let i = 0 ; i < 4 ; i++){
    variable++
    console.log("Variable: ", variable)
    console.log("i: ", i);
    for (let j = 0 ; j < i ; j++){
        if (variable == 2){
            break outer;
        }
    }

}

//an interesting one...
//remember 0 == false and 1 == true

let ctr = 3 ; 
while (ctr) {
    console.log( --ctr );
}

function functionarguments () {
    let args = Array.from(arguments);
    console.log(args);
}

functionarguments(1, "Henry", ["a", "list"]);



/* SPREAD OPERATOR */

console.log(Math.min(45, 23, 76, 1, 2, -4)); 
temperatures = [76, 78, 62, 54, 21, 54]; 
console.log(Math.min(temperatures)); // Will return NAN because it can't take the min of an object. 
// Use spread operator and it will access each individual element in the array and insert them like an 
// individual arguments
console.log(Math.min(...temperatures));
console.log(temperatures); /* or */ console.log(...temperatures);
//Use to combine arrays
const parent = ["Sam", "Elisa"] ; 
const kids = ["Henry", "Olivia"] ; 
const family = [parent, kids]; console.log(family); 
const family2 = [...parent, ...kids] ; console.log(family2);
//Copy an Array into a new array
//Arrays are reference types 
const original_array = ["Potatoes", "Oranges", "Carrots"]; 
const secondary_array = original_array;
secondary_array.push("Beef") ; 
console.log(original_array);
const copies = [...original_array];
copies.push("Hello dawg");
console.log(original_array);
console.log(copies);
const places = {WinterPark: "Florida", LosAngeles: "California"};
const faces = {Smiling: "Happy", Frowning: "Sad"};
const combines = {...places, ...faces};
console.log(combines)