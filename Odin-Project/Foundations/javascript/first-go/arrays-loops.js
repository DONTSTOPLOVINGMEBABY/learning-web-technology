
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
