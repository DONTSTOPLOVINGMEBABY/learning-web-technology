/*
    Many of these examples were taken from The Odin Project website or from 
    blogs linked on The Odin Project's site. 
*/ 




// 1. Factory Function

    const personFactory = (name, age) => {
        const sayHello = () => console.log('Hello!', name)
        return {name, age, sayHello}; 
    }; 

    const jeff = personFactory('jeff', 22); 
    jeff.sayHello();


    // 2. Constructor Pattern for same function above ^^ 

    const Person = function(name, age) {
        this.sayHello = () => console.log('hello from Jeff2, ', this.name); 
        this.name = name ; 
        this.age = age ; 
    }; 

    const jeff2 = new Person('jeff', 27); 
    jeff2.sayHello(); 


// 2. Easy console.log hack

    const name = "Maynard";
    const color = "red";
    const number = 34;
    const food = "rice";

    // logging all of these variables might be a useful thing to do,
    // but doing it like this can be somewhat confusing.
    console.log(name, color, number, food); // Maynard red 34 rice

    // if you simply turn them into an object with brackets,
    // the output is much easier to decipher:
    console.log({name, color, number, food});
    // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }


// 3. Using window to mess with scope
// Doesn't work with let only var!   

    var whats_the_scope = "Henry" ; 

    function add_scope () {
        var whats_the_scope = "John";
        console.log(window.whats_the_scope); 
        console.log(whats_the_scope); 
    }; 

    add_scope();


// 4. Return a function?? 

    let sayHello = function (name) {
        let text = `Hello ` + name ; 
        return function () {
            console.log(text); 
        }; 
    }; 

    sayHello('Jack Johnson'); // Does nothing ;
    let jack_johnson = sayHello('Jack Johnson') ; 
    jack_johnson() ;  
    // Can also do this
    sayHello('Morgan Freedman')();



// 5. Var is function scoped and let and const are block-scoped

    var age = 100 ; 
    if (age > 12){ var dogYears = age * 7 } ; 
    console.log('dogYears', dogYears); 
    if (age > 12) {let dogYears2 = age * 7} ; 
    // console.log(dogYears2); Will throw an error and say dogYears2 not defined 
    

// 6. Private Variables and Functions

    const FactoryFunction = string => {
        const capitalizeString = () => string.toUpperCase();
        const printString = () => console.log(`----${capitalizeString()}----`);
        return { printString };
    };
  
    const taco = FactoryFunction('taco');
    
        //   printString(); // ERROR!!
        //   capitalizeString(); // ERROR!!
        //   taco.capitalizeString(); // ERROR!!
    taco.printString(); // this prints "----TACO----"

    // Return a function which can be called by the return variable or function itself (similar 
    // to 4.)

    const counterCreator = () => {
        let count = 0;
        return () => {
          console.log(count);
          count++;
        };
      };
      
      const counter = counterCreator();
      counterCreator()(); //Still calls it, but state isn't saved. 
      
      counter(); // 0
      counter(); // 1
      counter(); // 2
      counter(); // 3


// 7 . A longer example of Protecting state through functions, and only
// Returning what is necessary to run.. 
// Looks really similar to Python, just done in a different way I imagine 

        const Player = (name, level) => {
            let health = level * 2;
            const getLevel = () => level;
            const getName  = () => name;
            const die = () => {
            // uh oh
            };
            const damage = x => {
            health -= x;
            if (health <= 0) {
                die();
            }
            };
            const attack = enemy => {
            if (level < enemy.getLevel()) {
                damage(1);
                console.log(`${enemy.getName()} has damaged ${name}`);
            }
            if (level >= enemy.getLevel()) {
                enemy.damage(1);
                console.log(`${name} has damaged ${enemy.getName()}`);
            }
            };
            return {attack, damage, getLevel, getName};
        };
        
        const jimmie = Player('jim', 10);
        const badGuy = Player('jeff', 5);
        jimmie.attack(badGuy);


// 8. Using Factory-Functions and inheritance... 
// You have to use something called destructuring assignment syntax

        const Person2 = (name) => {
            const sayName = () => console.log(`my name is ${name}`);
            return {sayName};
        }
        
        const Nerd = (name) => {
            // simply create a person and pull out the sayName function with destructuring assignment syntax!
            const {sayName} = Person2(name);
            const doSomethingNerdy = () => console.log('nerd stuff');
            return {sayName, doSomethingNerdy};
        }
        
        const jeff3 = Nerd('jeff');
        
        jeff3.sayName(); //my name is jeff
        jeff3.doSomethingNerdy(); // nerd stuff

        const Nerd2 = (name) => {
            const prototype = Person2(name);
            const doSomethingNerdy = () => console.log('nerd stuff');
            return Object.assign({}, prototype, {doSomethingNerdy});
        }

        const try_example = Nerd2('Henry');
        console.log(try_example); 


// 9. Modules -- Pretty much the same thing as factory functions

        const calculator = (() => {
            const add = (a, b) => a + b;
            const sub = (a, b) => a - b;
            const mul = (a, b) => a * b;
            const div = (a, b) => a / b;
            return {
            add,
            sub,
            mul,
            div,
            };
        })();
        
        // The module is immediately invoked after its defined (which is known as 
        // Immediately Inboked Function Expression), so it can be called on demand


        calculator.add(3,5); // 8
        calculator.sub(6,2); // 4
        calculator.mul(14,5534); // 77476

