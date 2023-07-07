function prepareSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Preparing sandwich with following items: ");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var i = items_1[_a];
        console.log("".concat(i));
    }
    console.log("Sandwich is Prepared Successfully!\n");
}
prepareSandwich("Jam", "Butter");
prepareSandwich("Cucumbers", "Lettuce", "Tomato");
prepareSandwich("Peanut Butter", "cherries", "berries", "Jam");
