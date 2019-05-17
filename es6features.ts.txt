// Destructuring
var animal = {
    species: "Dog",
    weight: 23,
    sound: "woof"
}

var { species, sound } = animal
console.log("The " + species + " says " + sound + "!");


var unKnownAnimal = {
    weight: 12,
    sound: "meow"
}

function makeSound({ species = 'animal', sound }) {
    console.log("The " + species + " says " + sound + "!");
}

makeSound(unKnownAnimal);
