var animals = [
    { name: "John", species: "Dog" },
    { name: "Marty", species: "Horse" },
    { name: "Mary", species: "Fish" },
    { name: "Oliver", species: "Beetle" },
    { name: "Madison", species: "Cat" },
];
var names = animals.map(function (x) { return x.name + " is a " + x.species; });
console.log(names);
var doggos = animals.filter(function (x) { return x.species === "Dog"; });
console.log("Good Bois:");
console.log(doggos);
var notGoodBois = animals.filter(function (x) { return x.species !== "Cat"; });
console.log("Not Bad Bois:");
console.log(notGoodBois);
var orders = [
    { amount: 269 },
    { amount: 687 },
    { amount: 156 },
    { amount: 458 },
    { amount: 596 }
];
var totalAmount = orders.reduce(function (sum, order) { return sum + order.amount; }, 0);
console.log("Sum : " + totalAmount);
