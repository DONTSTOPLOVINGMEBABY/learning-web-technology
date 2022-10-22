console.log("Hello, we are solving Fizz Buzz today.");

let userinput = parseInt(prompt("Please enter the number you would like Fizz Buzz to count to"));
let number = 1 ;

while (number <= userinput){
    if (number % 3 == 0 && number % 5 == 0) {console.log("FizzBuzz");}
    else if (number % 3 == 0) {console.log("Fizz");}
    else if (number % 5 == 0) {console.log("Buzz");}
    else {console.log(number);}
    number++;
}




// Expected Output
// 3 = Fizz
// 5 = Buzz
// ...
// 15 = Fizz Buzz
// 18 = Fizz
// ...
// 25 = Buzz 
// 30 = Fizz Buzz


//Psuedo
// while number <= userinput : 
// if number mod 3 == 0 and number mod 3 == 5 then Fizz Buzz
// elif number mod 3 == 0 then Fizz
// elif number mod 5 == 0 then Buzz 
// else {number}
// number++ 




// A simple attempt a javascript for-loop

let string = "Henry";
for (let i = 0; i < string.length; i++){
    console.log(string[i]);
}
