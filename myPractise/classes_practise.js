class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }
    get speed() {
        return this._speed ;
    }
    set speed(value) {
        this._speed = value;
    }
    speedUp() {
        this.speed += 10;
    }
    slowDown() {
        this.speed -= 10;
    }
}

let myCar = new Car('Ferrari', 'Dont Know')
console.log(myCar.speed)

// myCar.speedUp();
// myCar.speedUp();
// myCar.speedUp();
// myCar.speedUp();
// myCar.speedUp();
// myCar.speedUp();
// myCar.slowDown();
// console.log(myCar.speed)
// myCar.speedUp();

// Inheritance
class Employee {
    constructor(name) {
        this.name = name;
        this.title = "An employee";
    }
    announceThyself() {
        return `Hi, my name is ${this.name} and I am ${this.title}`
    }
}
class Manager extends Employee {
    constructor (name) {
        super(name);
        this.title = "A manager"
    }
}

let newEmployee = new Employee("Gimmy");
console.log(newEmployee.title);

let newManager = new Manager("Sundar");
console.log(newManager.announceThyself())

//  Destructuring
const author = {
    firstName: "Captain",
    lastName: "Kite",
    topics:["Dynamics  Robotics","Long live the hustle"],
    cities: ["Mombasa", "Nakuru"],
    publisher: "Oxford"
}

const {firstName, lastName, cities} = author;
console.log(firstName, lastName)

// for-of loop
let myArray = ["kenya", "Uganda","Tanzania", "Kampala"];
for (let item of myArray) {
    console.log(item)
}

// Decorators
// They are simply functions that add functionality to functions and classes
// To  use them, annonate the function or class with the name of the decorator(ie. @NameOfDecorator)
/*function iq(target) {
    Object.defineProperty(target.ptrototype, 'iq', {value: () => "Genius"})
}
@iq
class Person {
}
let readerOfMyBook = new Person();
console.log(readerOfMyBook)
*/

/*
 Promises 
- This is a proxyfor a value that is not yet known. 
It's like the place holder for the value that will eventually come back from a function that was called asynchronously 
*/

// Modules
export default function alpha1 () {
    console.log("Alpha one was called");
}
function alpha2() {
    console.log("Alpha two was called");
};

export {alpha1, alpha2};
