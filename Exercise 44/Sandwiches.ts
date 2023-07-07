function prepareSandwich(...items: string[]){
    console.log("Preparing sandwich with following items: ")
    for (let i of items){
        console.log(`${i}`);
    }
    console.log("Sandwich is Prepared Successfully!\n")
}

prepareSandwich("Jam", "Butter");
prepareSandwich("Cucumbers", "Lettuce", "Tomato");
prepareSandwich("Peanut Butter", "cherries", "berries", "Jam");