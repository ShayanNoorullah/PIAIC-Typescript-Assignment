var PersonName = "ShaYan NoorUllah";
var Upper = PersonName.toUpperCase();
var Lower = PersonName.toLowerCase();
var Title = Lower.split(" ").map(function (l) { return l[0].toUpperCase() + l.substring(1); }).join(" ");
console.log("Upper Case: ".concat(Upper, " \nLower Case: ").concat(Lower, " \nTitle Case: ").concat(Title));
