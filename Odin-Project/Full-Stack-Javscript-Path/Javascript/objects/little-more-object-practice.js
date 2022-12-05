function simple_object_constructor (thing, thing2) {
    this.thing = thing; 
    this.thing2 = thing2 ; 

    this.pretty_print = function (x, y) {
        return this.thing + this.thing2 + x + y 
    }
}

const instantiate = new simple_object_constructor(2, 3); 
console.log(instantiate.pretty_print(1, 1))