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
