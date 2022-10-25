
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
console.log("You can also use foreach");