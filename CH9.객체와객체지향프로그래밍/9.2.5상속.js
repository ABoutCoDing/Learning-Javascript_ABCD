class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car created");
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}




const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
v.passengers;
const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
c.passengers;                   // ["Alice", "Cameron"]
// v.deployAirbags();              // error    TypeError: v.deployAirbags is not a function
c.deployAirbags();              // "BWOOSH!"