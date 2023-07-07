var Animals = ["Dog", "Cat", "Parrots"];
for (var _i = 0, Animals_1 = Animals; _i < Animals_1.length; _i++) {
    var a = Animals_1[_i];
    if (a == "Dog") {
        console.log("A ".concat(a, " would make a Loyal pet."));
    }
    else if (a == "Cat") {
        console.log("A ".concat(a, " would make a Caring pet."));
    }
    else if (a == "Parrots") {
        console.log("A ".concat(a, " would make a Enthusistic pet."));
    }
}
console.log("Any of these animals would make a great pet!");
