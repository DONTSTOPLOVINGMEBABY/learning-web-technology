let user = {
    name: "Big",
    last: "hankus", 

    get fullName() { return `${this.name}, ${this.last}` },
    set fullName(name) {
        [this.name, this.last] = name.split(" "); 
    } 
}

console.log(user.fullName);
user.fullName = "Heyyyyyy man"; 
console.log(user.fullName);


class Car { 

    string4you = "Hello" ; 

    constructor(make, model, mileage) {
        this.make = make ;
        this.model = model; 
        this.mileage = mileage; 
    }

    printCar() { console.log(this.make, this.model, this.mileage) }
}

const four_runner = new Car("Toyota", "4Runner", 123432); 
console.log(four_runner);
