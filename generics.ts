//Generics basic
function echo<T>(arg: T): T {
    return arg;
}

var myNum = echo(1);
var myStr = echo("Hello");

// Generics for functions
class Person {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends Person {

}

class Manager extends Person {

}

class Animal {

}

class Dog extends Animal {

}


function personEcho<T extends Person>(person: T): string {
    return person.getFullName();
}

let admin = new Admin("A", "dmin");
let manager = new Manager("M", "anager");
let echoAdmin = personEcho(admin);
let echoManager = personEcho(manager);

let dog = new Dog();
//let doggoEcho = personEcho(dog); will noy work as Dog is of type Animal and not Person
