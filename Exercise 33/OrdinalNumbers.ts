let Num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinal: string = "";

for (let number of Num) {
  if (number === 1) {
    ordinal = "st";
  }else if (number === 2) {
    ordinal = "nd";
  }else if (number === 3) {
    ordinal = "rd";
  }else {
    ordinal = "th";
  }
  console.log(number + ordinal);
}