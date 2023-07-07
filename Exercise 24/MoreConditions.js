var car = 'Toyota';
//Equality and Inequality with Strings Test:
console.log("Is car == 'honda'?");
console.log(car == "honda"); //equality
console.log("Is car != 'suzuki'?");
console.log(car != "suzuki"); //inequality
//Lower Case Function Test:
console.log("Is car.toLowerCase() == 'Toyota'?");
console.log(car.toLowerCase() == "Toyota");
console.log("Is car.toLowerCase() == 'toyota'?");
console.log(car.toLowerCase() == "toyota");
// Numerical Test:
var car_reg_year = 2022;
console.log("Is car_reg_year > 2020?");
console.log(car_reg_year > 2020);
console.log("Is car_reg_year <= 2020?");
console.log(car_reg_year <= 2020);
// AND and OR operators Test:
var isAutomatic = true;
var is7Seater = false;
console.log("Is car Automatic and 7 Seater?");
console.log(isAutomatic && is7Seater);
console.log("Is car Automatic or a 7 Seater?");
console.log(isAutomatic || is7Seater);
// Item is in Array Test:
var carModels = ['Toyota', 'Honda', 'Suzuki'];
console.log("Is 'Unique' in the carModels array?");
console.log(carModels.indexOf('Unique') != -1);
console.log("Is 'Toyota' in the carModels array?");
console.log(carModels.indexOf('Toyota') != -1);
// Item is not in Array Test:
console.log("Is 'BMW' not in the carModels array?");
console.log(carModels.indexOf('BMW') == -1);
console.log("Is 'Toyota' not in the carModels array?");
console.log(carModels.indexOf('Toyota') == -1);
