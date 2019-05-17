interface Person {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements Person {
    firstName: string;
    lastName: string;

    getFullName(): string {
        return this.firstName + this.lastName;
    }

}

let aPerson: Person = new Foo();

let someObj = {
    firstName: "FName",
    lastName: "LName",
    getFullName: () => "FullName",
    getTest: () => "Test"
};

// Duck Typing. As someObj structure matches Person, it allows assignment
aPerson = someObj;
//aPerson.getTest(); will not work though
