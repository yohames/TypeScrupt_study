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

// Don't use any type

// Use any type when you don't know the type of the value that you are getting back from a third party library
// Use any type when you are working with a large codebase and you are not sure what the type of the value is going to be in the future

/*
function addTwo(num: number): number {
  return num + 2;
}

console.log(addTwo(2)); // 4

let logInUser = (name: string, email: string, isPaid: boolean = false) => {
  console.log(name, email, isPaid);
};

logInUser("abebe", "abebe@gmail.com");

const hero = ["thor", "spiderman", "ironman"];

const a = hero.map((hero, idx) => {
  return idx;
});

const b = a.reduce((acc, curr) => {
  return (acc += curr);
}, 0);
console.log(a, b);

const User = {
  name: "hitesh",
  email: "hitesh@localStorage.dev",
  isActive: true,
};

function createCourse(): { name: string; price: number } {
  return { name: "reactJs", price: 100 };
}

function createUser(newUser: { name: string; isPaid: boolean }) {
  console.log(`User ${JSON.stringify(newUser)}`);
}

const newUser = {
  name: "hitesh",
  isPaid: true,
  email: "abebe@gmail.com",
};

createUser(newUser);

type User = {
  name: string;
  email: string;
  isPaid: boolean;
};
function createUser1(user: User) {
  console.log(`User ${JSON.stringify(user)}`);
}

const newUser1 = {
  name: "hitesh",
  isPaid: true,
  email: "hitesh@gmai.com",
};

createUser1(newUser1);


*/

// ReadOnly
/*
type User = {
  readonly _id: string;
  name: string;
  readonly courses: string[];
  email: string;
  isActive: boolean;
  creditCard?: number; // Optional property: creditCard is not required to be passed
};

type PaidAmmount = {
  ammount: number;
};


// This shows how to use intersection types
let myUser: User & PaidAmmount & { cvv: number } = {
  _id: "abc123",
  name: "abebe",
  email: "h@h.com",
  courses: ["react", "node"],
  isActive: true,
  ammount: 100,
  cvv: 333,
};

// myUser._id = "abc123"; // Error: Cannot assign to '_id' because it is a read-only property
myUser.name = "hitesh";
myUser.courses.push("typescript", "Go"); // This will work because we are not changing the reference of the array
console.log(myUser);

*/

const superHeros: string[] = [];

superHeros.push("thor");

// ========================================================================
// ========================== Array of Objects ============================
// ========================================================================

/*
type Student = {
  name: string;
  age: number;
  class: number;
};

const students: Student[] = [];

students.push({ age: 32, class: 7, name: "abebe" });
console.log(students);
*/

// ========================================================================
// ================================ Unions ================================
// ========================================================================

/*
let myAge: string | number = 20;
myAge = "20";

type User = {
  name: string;
  id: string;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: "1234" };

hitesh = { username: "hitesh", id: 1234 };

function getDBID(id: string | number) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
    return id;
  }
}

console.log(getDBID("A1234"));
console.log(getDBID(1234));

const data3: (string | number | boolean)[] = [1, "2", 3, true, "4"];

*/
// ================== Magic numbers ==================
// let pi: 3.14 = 3.14; // This is a way to define a constant in typescript but it is not recommended because it is not a good practice to use magic numbers in the code
// pi = 3.14;

// Usecase for Magic numbers

// let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "aisle";
// seatAllotment = "middle";
// seatAllotment = "crew"; // Error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'

// ===========================================
// ================== Tuples =================
// ===========================================

// Tuples are used when we want to represent a collection of different types of values as a single unit
/*
const drink2 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

let drink3: readonly [string, boolean, number]; // This is how we define a tuple as readonly
drink3 = ["brown", true, 40];

// drink3.push(40); // Error: Property 'push' does not exist on type 'readonly [string, boolean, number]'
// drink3[0] = "black"; // Error: Index signature in type 'readonly [string, boolean, number]' only permits reading  // This is because we have defined the tuple as readonly
console.log(drink3);
*/

// ===========================================
// ================== Enums ==================
// ===========================================

// enum SeatChoice {
const enum SeatChoice { // Puting const before enum will make the enum a const enum & it will make the javascript output to be the actual values of the enum which will make the typescript code to be more efficient; but it will not be able to be used in the switch statement
  Aisle = 10,
  MIDDLE,
  CREW = "crew",
  WINDOW = 34,
}

const hcSeat = SeatChoice.MIDDLE;

console.log(
  hcSeat,
  SeatChoice.CREW,
  SeatChoice.MIDDLE,
  SeatChoice.CREW,
  SeatChoice.WINDOW
);

enum UserResponse {
  No = 0,
  Yes = 1,
}
function respond(recipient: string, message: UserResponse): void {
  console.log(`${recipient} responded with ${message}`);
}

respond("Alice", UserResponse.Yes); // Output: Alice responded with 1
respond("Alice", 1); // Output: Alice responded with 1

/*
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let go: Direction = Direction.Up;
console.log(go); // Output: 1

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  console.log(`${recipient} responded with ${message}`);
}

respond("Alice", UserResponse.Yes); // Output: Alice responded with 1

// String Enums

enum StringDirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let move: StringDirection = StringDirection.Left;
console.log(move); // Output: LEFT

// Heterogeneous Enums

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

console.log(BooleanLikeHeterogeneousEnum.No); // Output: 0
console.log(BooleanLikeHeterogeneousEnum.Yes); // Output: YES

*/
