// Destructuring
var animal = {
    species: "Dog",
    weight: 23,
    sound: "woof"
};
var species = animal.species, sound = animal.sound;
console.log("The " + species + " says " + sound + "!");
var unKnownAnimal = {
    weight: 12,
    sound: "meow"
};
function makeSound(_a) {
    var _b = _a.species, species = _b === void 0 ? 'animal' : _b, sound = _a.sound;
    console.log("The " + species + " says " + sound + "!");
}
makeSound(unKnownAnimal);
