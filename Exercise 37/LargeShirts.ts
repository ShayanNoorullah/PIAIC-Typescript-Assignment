function makeShirt(size: string = "Large", message: string = "\"I love TypeScript\"") {
    console.log(`Creating a T-Shirt with ${size} size and ${message} message printed on it!`);
  }
  makeShirt();
  makeShirt("medium");
  makeShirt("Small", "\"Wisdom is Learning\"");