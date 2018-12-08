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



class Motocycle extends Vehicle {}
const c = new Car();
const m = new Motocycle();
c instanceof Car;
c instanceof Vehicle;
m instanceof Car;
m instanceof Motocycle;
m instanceof Vehicle;