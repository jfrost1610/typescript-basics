var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // constructor overloading not allowed.
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // methods
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.greet = function () {
        return "Hi " + this.getFullName();
    };
    return Person;
}());
// implicit type of Person. Same as var aPerson: Person = new Person()
var aPerson = new Person("Jack", "Frost");
//aPerson.onflyProp =" test" does not work like in js
console.log(aPerson.getFullName());
// Inheritance
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // overriding the getFullName of Person
    Programmer.prototype.getFullName = function () {
        return "Programmer " + this.firstName + " " + this.lastName;
    };
    // refering parent's method
    Programmer.prototype.greetLikeANormalPerson = function () {
        return "Hi " + _super.prototype.getFullName.call(this);
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer("Foo", "Bar");
console.log(aProgrammer.greet());
console.log(aProgrammer.greetLikeANormalPerson());
var aProgrammerPoly = new Programmer("Poly", "Morph");
console.log(aProgrammerPoly.getFullName()); // still calls the Programmer imlementation
// console.log(aProgrammerPoly.greetLikeANormalPerson()); will not work
