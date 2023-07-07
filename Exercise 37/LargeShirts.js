function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "\"I love TypeScript\""; }
    console.log("Creating a T-Shirt with ".concat(size, " size and ").concat(message, " message printed on it!"));
}
makeShirt();
makeShirt("medium");
makeShirt("Small", "\"Wisdom is Learning\"");
