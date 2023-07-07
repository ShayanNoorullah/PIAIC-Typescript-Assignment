var magicians_name = ["Ricky Jay", "David Copperfield", "Dynamo", "Chris Angel"];
function showMagicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var m = magician_1[_i];
        console.log(m);
    }
}
//Making Great Magicians:
function make_great(magician) {
    var great_magician = [];
    for (var _i = 0, magician_2 = magician; _i < magician_2.length; _i++) {
        var m = magician_2[_i];
        great_magician.push(m + " the Great");
    }
    return great_magician;
}
//unchanged Magicians:
var greatMagicians = make_great(magicians_name);
console.log("Original (unchanged) List:");
showMagicians(magicians_name);
console.log("\nModified List:");
showMagicians(greatMagicians);
