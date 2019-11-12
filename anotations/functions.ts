const logNumber: (i: number) => number = (i: number): number => {
  return i;
};

const cordinates: { x: number; y: number } = JSON.parse('{"x":10,"y":10}');

let words = ['green', 'blue', 'red'];
let foundWord = false;

words.forEach(word => {
  if (word === 'red') foundWord = true;
});

let numberOrBoolean: boolean | number;

const add = (a: number, b: number): number => {
  return a + b;
};

const diff = (a: number, b: number): { a: number; b: number } => {
  return {
    a,
    b
  };
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (error: string): never => {
  throw new Error(error);
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
