function Store_Car_Info(Manufacturer: string, Model: string, ...keywords: [string, any][]) {
  let carInfo: { [key: string]: any } = {
    manufacturerName: Manufacturer,
    modelName: Model
  };

  for (let [key, value] of keywords) {
    carInfo[key] = value;
  }

  return carInfo;
}

let car = Store_Car_Info("Honda", "Civic", ["Color", "Black"], ["Year", 2023]);

console.log("Car Info:")
console.log(car);