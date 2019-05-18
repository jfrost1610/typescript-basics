class Person {

    /** 
     private firstName: string;
     private lastName: string;
 
     // constructor overloading not allowed.
     constructor(firstName: string, lastName: string) {
         this.firstName = firstName;
         this.lastName = lastName;
     } 
     */

    // short way of creating members and constructor accepting them
    constructor(private firstName: string, private lastName: string) {

    }

    //getters and setters
    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    // methods
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }

    greet(): string {
        return "Hi " + this.getFullName();
    }
}

// implicit type of Person. Same as var aPerson: Person = new Person()
var aPerson = new Person("Jack", "Frost");
//aPerson.onflyProp =" test" does not work like in js
console.log(aPerson.getFullName());

// Inheritance
class Programmer extends Person {

    // overriding the getFullName of Person
    getFullName(): string {
        return "Programmer " + this.getFirstName() + " " + this.getLastName();
    }

    // refering parent's method
    greetLikeANormalPerson(): string {
        return "Hi " + super.getFullName();
    }
}

var aProgrammer = new Programmer("Foo", "Bar");
console.log(aProgrammer.greet());
console.log(aProgrammer.greetLikeANormalPerson());

var aProgrammerPoly: Person = new Programmer("Poly", "Morph");
console.log(aProgrammerPoly.getFullName()); // still calls the Programmer imlementation
// console.log(aProgrammerPoly.greetLikeANormalPerson()); will not work
