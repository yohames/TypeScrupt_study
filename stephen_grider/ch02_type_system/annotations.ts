let abe = 34; // Type inference: Type inference will only work when we declare and initialize the variable on the same line
const apples: number = 5;
let speed: string = "fast";

// abe = 'hello'; // Error: Type '"hello"' is not assignable to type 'number'

// speed = 10; // Error: Type '10' is not assignable to type 'string'

let nothingMuch: null = null;
let undefinedValue: undefined = undefined;
// undefinedValue = null; // This will not throw an error

let now: Date = new Date();
console.log(now);

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];

myNumbers.push(4);
// myNumbers.push("hello"); // Error: Argument of type '"hello"' is not assignable to parameter of type 'number'

// Classes

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

// const logNumber: (i: number) => void = (i: number) => {
//   console.log(i);
// };

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';

const coordinates: { x: number; y: number } = JSON.parse(json);
// const coordinates = JSON.parse(json); // This will be of type any

console.log(coordinates);

let words = ["red", "green", "blue"];
let foundWord: boolean | undefined;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  } else {
    foundWord = false;
  }
}

console.log(foundWord);

// 3) Variables whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

console.log(numberAboveZero);

// Functions

const add = (a: number, b: number) => {
  return a + b + "t";
};

console.log(add(5, 8));

// const logger: (message: string) => void = (message: string): void => {
//   console.log(message);
// };

const logger = (message: string): void => {
  console.log(message);
};

logger("hello");

const throwError = (message: string): never => {
  throw new Error(message);
};

function divide(a: number, b: number): number {
  return a / b;
}

console.log("divide", divide(3, 2));

const forecast: { date: Date; weather: string } = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(forecast);

// 4) Objects

const profile = {
  user: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 25,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, user }: { age: number; user: string } = profile;

console.log("age", age);
console.log("user", user);

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log("lat", lat);

// Arrays

const carMakers: string[] = ["ford", "toyota", "chevy"];

const names: string[] = [];

names.push("abebe");
// names.push(['tariku']); // Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

const dates = [new Date(), new Date()];

console.log("carMakers", carMakers);
console.log(dates);
// : (number[] | (string[] | number[])[])[]
const ageList: (number[] | (number | string[] | number[])[])[] = [
  [1, 2, 3],
  [3, ["four", "five", "six"], [4, 5, 6]],
  [7, 8, 9],
];

console.log(ageList);

const myCar = carMakers[0];
const myCar2 = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Tuples

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

// pepsi[0] = 34; // Error: Type '34' is not assignable to type 'string'

pepsi[0] = "black";

// we can use types instead of writing tuples in every declaration
type Drink = [string, boolean, number];

const coke: Drink = ["black", true, 40];

const sprite: Drink = ["clear", true, 40];

const abeObj = {
  age: 33,
  name: "Abebe",
  wheight: 34,
};

// abeObj.abeClass = "7B";// we can make this work by using interface

console.log("show final obj", abeObj);
