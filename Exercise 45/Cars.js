function Store_Car_Info(Manufacturer, Model) {
    var keywords = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        keywords[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturerName: Manufacturer,
        modelName: Model
    };
    for (var _a = 0, keywords_1 = keywords; _a < keywords_1.length; _a++) {
        var _b = keywords_1[_a], key = _b[0], value = _b[1];
        carInfo[key] = value;
    }
    return carInfo;
}
var car = Store_Car_Info("Honda", "Civic", ["Color", "Black"], ["Year", 2023]);
console.log("Car Info:");
console.log(car);
