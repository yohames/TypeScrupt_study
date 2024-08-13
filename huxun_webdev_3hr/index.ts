// Annotation type
type Person = {
  name: string;
  age: number;
};
const person: Person = {
  name: "John",
  age: 23,
};
console.log(person);

// Inference type
let tech = "TypeScript";
tech = "JavaScript";
// tech = 10;// Error
console.log(tech);

// Any type
let color: any = "Blue";
color = 123;
console.log(color);

// Function Parameter Annotations
//function funcName(params: type){}

function greet(name: string) {
  return `Hello, ${name}`;
}

console.log(greet("John"));

// Default Params Value

function greet2(name: string = "John") {
  return `Hello, ${name}`;
}

// Return Type Annotation

function greet3(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet3("John Doe"));

// Return Type Annotation (Arrow Function)

const greet4 = (name: string): string => {
  return `Hello, ${name}`;
};

console.log(greet4("Arrow"));

// Void Type Annotation
function greet5(name: string): void {
  console.log(`Hello, ${name}`);
}

greet5("Void");

// Never Type Annotation

// Exhaustive checking in switch statement

type Shape = "circle" | "square" | "rombus";
// type Shape = "circle" | "square" | "rombus" | "rectangle";// Throws compile time error because of exhaustive checking

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return Math.PI * 1 * 1; // Example area calculation
    case "square":
      return 1 * 1; // Example area calculation
    case "rombus":
      return 1 * 1; // Example area
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log(getArea("circle"));

// Array Types

const nums: number[] = [];
const names: Array<string> = ["John"];

console.log("show nums", nums);
console.log("show names", names);

// Using objects as function return value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Alex",
    age: 19,
    location: "USA",
  };
}

console.log(printUser());

// Type Aliases

type User = {
  name: string;
  age: number;
  location: string;
};

function printUser2(userData: User): User {
  return userData;
}

console.log(
  "testing Type Aliases",
  printUser2({ name: "Alex", age: 19, location: "USA" })
);



// Optional Properties & Readonly properties

type PersonOptional = {
  name: String,
  readonly age: Number,
  email?: String
}


const userOptional: PersonOptional = {
  name: 'Abebe',
  age: 20
}


// userOptional.age = 21 // Error because age is readonly
userOptional.email = 'tester@gmail.com'
console.log(`Name: ${userOptional.name}, Age: ${userOptional.age}, email: ${userOptional.email}`);


// Intersection Types

type FirstType = {
  name: string;
  age: number;
};

type SecondType = {
  email: string;
  location: string;
};

type UserIntersection = FirstType & SecondType;

const userIntersection: UserIntersection = {
  name: "John",
  age: 20,
  email: "tester@gmail.com",
  location: "USA",
};


console.log(`Intersection Type= Name: ${userIntersection.name}, Age: ${userIntersection.age}, email: ${userIntersection.email}, location: ${userIntersection.location}`);

// Union types

let password: number | string = 23;

type FirstTypeUnion = {
  name: string;
  age: number;
};

type SecondTypeUnion = {
  email: string;
  location: string;
};

type UserUnion = FirstTypeUnion | SecondTypeUnion;

const userUnion: UserUnion = {
  name: "John",
  age: 20,
  // email: "tester@gmail.com"
};

const userUnion2: FirstTypeUnion | SecondTypeUnion = {
  // name: "John",
  // age: 20,
  email: "tester@gmail.com",
  location: "USA",
};

console.log(`Union Type= Name: ${userUnion.name}, Age: ${userUnion.age}}`);
console.log(`Union Type= Email: ${userUnion2.email}, Location: ${userUnion2.location}`);

// Discriminated Unions

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type ShapeUnion = Circle | Square;

function getAreaUnion(shape: ShapeUnion): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.side * shape.side;
  }
}

console.log(getAreaUnion({ kind: "square", side: 1 }));


// String Literal Types

let literalColor : "red" | "red" | "blue";
literalColor = "red";
// color = "green";// Error
console.log(literalColor);


// Tuple Types

let tuple: [string, number, boolean];
tuple = ["hello", 10, true];
console.log(tuple);

// Array Destructuring

let arr: [string, number, string] = ["John", 23, "USA"];
let [nameTuple, age, locationTuple] = arr;
console.log(nameTuple, age, locationTuple);

const products: (string | number)[] = ["Apple", 1, "Banana", 2];

const [product1, qty1, product2, qty2] = products;

console.log(product1, qty1, product2, qty2);



// Enum Types

enum enumColor {
  Red,
  Green = 'abebe',
  Blue = 3,
}

let c: enumColor = enumColor.Green;
console.log(c);

// Type Assertion

let code: any = "123";

let employeeCode = code as string;

console.log(employeeCode);

let value: any = "hello";
let stringLength = (value as string).length; // Assert value as a string
