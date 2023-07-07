var magicians_name = ["Ricky Jay", "David Copperfield", "Dynamo", "Chris Angel"];
function showMagicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var m = magician_1[_i];
        console.log(m);
    }
}
showMagicians(magicians_name);
function make_great(magician) {
    var great_majician = [];
    for (var _i = 0, magician_2 = magician; _i < magician_2.length; _i++) {
        var m = magician_2[_i];
        great_majician.push(m + " the Great");
    }
    return great_majician;
}
magicians_name = make_great(magicians_name);
showMagicians(magicians_name);
