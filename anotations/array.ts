let carMakers = ['ford', 'toyota', 'chevy'];
let carMakers2: string[];

const carByMakers = [['F150'], ['corolla'], ['camero']];
let carByMakers2: string[][] = [];
let myCarType = carByMakers.pop();
let myCar = carMakers.pop();

let temp = carMakers.map((car: string): string => {
  return car.toUpperCase();
});
const temp2 = [new Date(), 'sssss', 1];
let temp22: (Date | string)[] = [];
temp22.push(new Date());
temp22.push(new Date());

const stringArray: string[] = [];
stringArray.push('Vishnu');
stringArray.push('Meera');
stringArray.push('Prasanna');
stringArray.push('Ayaan');
