function simple_object_constructor (thing, thing2) {
    this.thing = thing; 
    this.thing2 = thing2 ; 

    this.pretty_print = function (x, y) {
        return this.thing + this.thing2 + x + y 
    }
}

const instantiate = new simple_object_constructor(2, 3); 
console.log(instantiate.pretty_print(1, 1))


const car = (make, model, year, mileage) => {
    
    const pretty_print = () => console.log(`Make: ${make}, Model: ${model}, Year: ${year}, Mileage: ${mileage}`);

    return {make, year, mileage, pretty_print}
}

let jeep = car('Jeep', 'Wrangler', 2017, 80000) ; 
console.log(jeep.make, jeep.mileage, jeep.model) // jeep.model == undefined because it's private
jeep.pretty_print();



const calculator = (number) => {

    const add = () => {return number + 1}; 
    const sub = () => {return number - 1}; 
    const mult = () => {return number * number} ; 
    const div = () => {return number / number} ;
    
    return {add, sub, mult, div} ; 
}

const only_does_one = (number) => {
    const {sub, mult} = calculator(number)
    console.log(sub());
    console.log(mult());
    return ; 
}

const non_descript_thing = only_does_one(4); 


const modularize_code = ( () => {

    const square_root = (number) => {return Math.sqrt(number)} ; 
    const mult_by_pi = (number) => number * Math.PI ; 
    const mod_args = (number, mod_by) => {return number % mod_by}; 

    return {
        square_root, 
        mult_by_pi, 
        mod_args
    } ; 
})() ; 

console.log(modularize_code.square_root(25));  
console.log(modularize_code.mult_by_pi(22)); 
console.log(modularize_code.mod_args(33, 11)); 