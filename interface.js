var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
var someObj = {
    firstName: "FName",
    lastName: "LName",
    getFullName: function () { return "FullName"; },
    getTest: function () { return "Test"; }
};
// Duck Typing. As someObj structure matches Person, it allows assignment
aPerson = someObj;
//aPerson.getTest(); will not work though
