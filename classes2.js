var Person = /** @class */ (function () {
    /**
    // read only variables can be assigned values in line during declaration
    readonly name: string = "ReadOnlyName";

    constructor(name: string) {
        this.name = name;
    }*/
    // shortcut to create members and their modifier through constructor
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// readonly values can be set through constructors as well
var aPerson = new Person("ConstructedName");
// aPerson.name = "Updated"; will not work as it is readonly.
console.log(aPerson.name);
