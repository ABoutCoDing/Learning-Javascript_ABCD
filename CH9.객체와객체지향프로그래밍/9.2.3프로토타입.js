class Car { 
    constructor(make, model) {
        this.make = make;
        this.model = model
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0)
                throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;
    }
}


const car1 = new Car();
const car2 = new Car();
car1.shift === Car.prototype.shift;     // true
car1.shift('D');
// car1.shift('d');                     // error
car1.userGear;                          // 'D'
car1.shift === car2.shift               // true

car1.shift = function(gear) {this.userGear = gear.toUpperCase(); }
car1.shift === Car.prototype.shift;     // false
car1.shift === car2.shift;              // false
car1.shift('d');                
car1.userGear;                          // 'D'