/*These examples are from Array Cardio Practice -- Day 1 
from Wes Bos's Channel: 
https://www.youtube.com/watch?v=HB1ZC7czKRs&ab_channel=WesBos */ 



const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const peopleBig = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];



// Array.prototype.filter() 
// Filter the list of inventors for those who were born in the 1500s

const borninFifteen = inventors.filter( inventor =>  inventor.year >= 1500 && 
    inventor.year < 1600); 

console.log(borninFifteen);



// Array.prototype.map() 
// Give us an array of the inventors first and last name 

const fullNames = inventors.map( inventor => inventor.first + ' ' + inventor.last);
console.log(fullNames);


// Array.prototype.sort() 
// Sort the inventors by birthdate, oldest to youngest 

const ordered = inventors.sort( (a, b) =>  a.year > b.year ? 1 : -1);
/* Short hand for -- const ordered = inventors.sort( (a, b) => {
    if (a.year > b.year) {
        return 1 ; 
    }
    else {
        return -1 ; 
    }
});
*/
console.log(ordered);


// Array.prototype.reduce()
// This will loop over and sum all elements (pretty sure all it does is sum)

const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(totalYears);


// Sort the inventors by years lived 
const oldest = inventors.sort( (a, b) => {
    const lastGuy = a.passed - a.year ;  
    const nextGuy = b.passed - b.year ; 
    return lastGuy > nextGuy ? -1 : 1 ; 
});
console.table(oldest);


// Sort people alphabetically by last name 
const alpha = peopleBig.sort( (lastOne, nextOne) => {
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');
    return alast > blast ? -1: 1 ; 
})
console.log(alpha);


// Sum up the instances of each thing in this list using Reduce
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce( (obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++; 
    return obj;
}, {}) ;
console.log(transportation);



/* These examples are from Array-cardio Day 2 stuff from 
Wes Bos's Channel on Youtube: 
https://www.youtube.com/watch?v=QNmRfyNg1lw&ab_channel=WesBos */


const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];


//Array.prototype.some() // is at least one person 19? 
//Returns true if one person meets the condition

const isAdult = people.some( (person) => {
const currentYear = (new Date()).getFullYear();

    if (currentYear - person.year >= 19) {
        return true;
    }
});

console.log(isAdult);


//Array.prototype.every() // returns true if everyone meets condition

const allAdults = people.every( (person) => {
    const currentYear = (new Date()).getFullYear();
        if (currentYear - person.year >= 19) {
            return true;
        }
});

console.log(allAdults);


//Array.prototype.find()
//Returns just one of the objects that meets the condition specified 

const comment = comments.find( comment => comment.id === 823423);
console.log(comment);


//Array.prototype.findIndex 
//Finds the comment with this ID

const index = comments.findIndex( comment => comment.id === 823423);
console.log(index, comments);
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
];
console.log(newComments);



/* These are just some random exmaples I'm working with */ 

// Methods are nothing more than properties that hold function values. Here's a simple method:

function echoName () {
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age}`);
}

let person1 = {name: "Henry", age: 22, echoName};
let person2 = {name: "Ben", age: 22, echoName};

person1.echoName(); person2.echoName();

console.log(Object.getPrototypeOf(person1))