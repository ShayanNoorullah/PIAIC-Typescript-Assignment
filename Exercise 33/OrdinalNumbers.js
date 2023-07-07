var Num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinal = "";
for (var _i = 0, Num_1 = Num; _i < Num_1.length; _i++) {
    var number = Num_1[_i];
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(number).concat(ordinal));
}
