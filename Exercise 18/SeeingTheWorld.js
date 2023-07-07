var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var desiredLocations = ["Switzerland", "London", "Singapoure", "Paris", "NewYork"];
console.log("Original form: " + desiredLocations);
console.log("Alphabetically Ordered: " + __spreadArray([], desiredLocations, true).sort());
console.log("Original form: " + desiredLocations);
console.log("Alphabetically Ordered and Reversed: " + __spreadArray([], desiredLocations, true).sort().reverse());
console.log("Original form: " + desiredLocations);
desiredLocations.reverse();
console.log("Reversed List: " + desiredLocations);
desiredLocations.reverse();
console.log("Reversed to original List: " + desiredLocations);
desiredLocations.sort();
console.log("Alphabetically Ordered: " + desiredLocations);
desiredLocations.sort().reverse();
console.log("Alphabetically Ordered and Reversed: " + desiredLocations);
