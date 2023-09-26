// let helloWorld = "Hello World" 

// interface User {
//     name: string, 
//     id: number, 
// }

// const user: User = {
//     name: "hi", 
//     id: 9,
// }

// class UserAccount {
//     name: string
//     id: number

//     constructor(name: string, id: number){
//         this.name = name
//         this.id = id 
//     }
// }

// const user2: UserAccount = new UserAccount("Henry", 1) 

// function returnString (return_this : string): string {
//     return return_this
// }

// /* 
// Unions
// With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:
// */

// type MyBool = true | false 
// type WindowStates = "open" | "closed" | "minimized"
// type LockStates = "locked" | "unlocked"
// type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9

// // Takes a string or an array

// function getLength (obj : string | string[]) : number {
//     return obj.length
// }

// function wrapInArray (obj : string | string[]) : string | string[] {
//     if (typeof obj === "string") {
//         return [obj]
//       }
//       return obj
// }

// /*
// Generics
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
// */

// type stringArray = Array<string> 
// type numberArray = Array<number>
// type objectWithNameArray = Array<{ name: string }>

// const hi: stringArray = ['hi'] 
// // const hi2: stringArray = [1, 2, 3, 4] // a no no


// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
// }

// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;

// // object is a string, because we declared it above as the variable part of Backpack.
// const object2 = backpack.get();

// // Since the backpack variable is a string, you can't pass a number to the add function.
// // backpack.add(23);