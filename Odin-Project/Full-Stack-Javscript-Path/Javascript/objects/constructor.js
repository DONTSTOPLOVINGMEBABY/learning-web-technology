//Constructing objects using object constructor

function Player(name, marker) {
    this.name = name; 
    this.marker = marker; 

    this.sayName = function () {
        console.log(`Hello, my name is ${name}`);
    }


}

//Instantiation
const player = new Player('steve', 'X'); 
console.log(player, player.name, player.marker);
player.sayName();



//Constructor for making book objects 

function Book(title, author, pages){
    this.title = title; 
    this.author = author; 
    this.pages = pages; 

    this.prettyPrint = function () {
        return `Title: ${title}, Author: ${author}, Pages: ${pages}`; 
    }  
}

const lotr = new Book('Lord of the Rings', 'Tolkien', '295 pages'); 

//When using constructors to make objects, it's best to define functions on the prototype of the object. 
//For player, it might look something like Player.prototype.sayName = function() {...}
//You do this because JS won't have to redefine and save that function everytime an object of Student is instantiated, 
//It will simply inherit from the function from that prototype and the function will only be saved in memory once (I think...)

Book.prototype.love = function () {
    return `I love the book ${this.title}`
}
console.log(lotr.love());


//Object.create method for inheriting a prototype from another object 

function Student(name, grade) {
    this.name = name
    this.grade = grade
}

Student.prototype.sayName = function () {
    return `Hello, my name is ${this.name}`;
}


function EighthGrader(name) {
    this.name = name ; 
    this.grade = 8 ; 
}

EighthGrader.prototype = Object.create(Student.prototype);  // Inherit Prototype

const carl = new EighthGrader('carl'); 
console.log(carl.sayName()) ; 
carl.grade ; 

console.log(Object.getOwnPropertyNames(Student));
console.log(Object.getOwnPropertyNames(carl));
console.log(Student.prototype.constructor);


//Some Random Personal Examples

// const animal = { eats: "Hello"} ; 
// const rabbit = { jumps: "Nice" }; 

// console.log(rabbit.eats); 
// rabbit.__proto__ = Object.create(animal) ; // Inherits all of the values from animal's constructor and
// console.log(rabbit.eats);                  // and lobs it in animals prototype

let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  // walk is taken from the prototype chain
  longEar.walk(); // Animal walk
  console.log(longEar.jumps); // true (from rabbit)


//Another example 

let user = {
    name: "Henry", 
    surname: "Jacobs", 

    set fullName(value) {
        [this.name, this.surname] = value.split(" "); 
    }, 

    get fullName() {
        return `${this.name}, ${this.surname}`; 
    }
};

let admin = { 
    __proto__: user, 
    isAdmin: true 
}; 

console.log("Admin: ", admin.fullName);

admin.fullName = "Alice Cooper"; 

console.log(admin.fullName); 
console.log(user.fullName); 

//Immeditately invoked functions?? Didn't know this existec

const message = function (name) {
    console.log(`Hello, ${name}`) ;
}("World"); 


//Using this to invoke a method in the current object
//This is referencing the current object that the function method sits inside of
const this_object = {
    name: "Henry", 
    call () {return "Another string"}, 
    log () {console.log(this.name, this.call())}
};

this_object.log();


//This is going to point to the global methods in the browser window
function this_object_not_in_method () {
    console.log(this); 
}

this_object_not_in_method() ; 

//Using this with a constructor function

function Video() {
    this.name = "Hankus"; 
    console.log(this)} ; 

Video(); // Still prints out the window globals here 
//The new operator will create a new empty obejct {} and set the this
//and the constructor function to point to the new empty object 
const store_function = new Video();  

//Last this example, be weary
//In this example, we try to use this to reference local titles
//And you would expect it to work because its inside of the video
//object. But in reality, when you call this inside of a callback function
//JS sees it as a normal function, similar to the this_object_not_in_method()
//Function above. 

// Can make it work by passing this as the second argument to the function forEach
//Because it's still local to showTags?? 
// It's a bit confusing, I need to look over the documentation for showtags


const video = {
    title: 'a', 
    tags: ['a', 'b', 'c'], 
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); 
        }, this); 
    }
}

video.showTags() ; 


//Update state?? 

function Dog (name, age){
    this.name = name; 
    this.age = age; 

    this.countnumber = 0 ; 

    this.update_counter = function () {
        this.countnumber++ ; 
    }
}

const ory = new Dog("Ory", 14); 
ory.update_counter(); ory.update_counter(); 
console.log(ory.countnumber); 


// Just more Constructor examples 

function City (city, state) { 
    this.city = city ; 
    this.state = state ; 
}

function Repair_shop(name, revenue, cost) {
    this.name = name; 
    this.revenue = revenue ;
    this.cost = cost ;
    this.profit = revenue - cost ; 
}

Repair_shop.prototype = Object.create(City.prototype);

const someplace = new Repair_shop("Big hanks tire repair", 123221, 69231); 
someplace.city = "Winter Park"; someplace.state = "Florida"; 
console.log(someplace.city, someplace.state, someplace.name, someplace.revenue, someplace.cost, someplace.profit);