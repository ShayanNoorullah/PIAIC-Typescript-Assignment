let PersonName: string = "ShaYan NoorUllah";
let Upper: string = PersonName.toUpperCase();
let Lower: string = PersonName.toLowerCase();
let Title = Lower.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" ");
console.log(`Upper Case: ${Upper} \nLower Case: ${Lower} \nTitle Case: ${Title}`);