// Type Narrowing

// Type narrowing is a way to narrow down the type of a variable within a block of code.
// This is useful when you want to perform different operations based on the type of a variable.
// In TypeScript, type narrowing can be done using type guards, which are functions that return a boolean value indicating whether a variable is of a certain type.
// Here's an example of type narrowing using a type guard:

// Type Guard
// A type guard is a function that checks the type of a variable and narrows it down to a specific type.
// Type guards are used to perform type narrowing in TypeScript.
// Here's an example of a type guard that checks if a value is a number:

// Type Narrowing with Type Guards typeof
// Type guards are functions that return a boolean value indicating whether a variable is of a certain type.
// Type guards are used to narrow down the type of a variable within a block of code.
// Here's an example of type narrowing using a type guard:
console.log(
  '================ Type Narrowing with "Type Guard with typeof" operator ================'
);
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

/**
 * Doubles the given value if it is a number.
 *
 * @param value - The value to be doubled.
 * @returns The doubled value if it is a number, otherwise undefined.
 */
function double(value: unknown): number | undefined {
  // return value * 2; // This line will throw an error.
  if (isNumber(value)) {
    return value * 2; // here value is narrowed to number
  }
  return undefined;
}

const result = double(5);
if (result !== undefined) {
  console.log(result); // Output: 10
}

type MyType = string | number;

function exampleFunc(value: MyType): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

exampleFunc("hello");
exampleFunc(3.2345);

// Type Narrowing with instanceof
// The instanceof operator can be used to narrow down the type of a variable based on its constructor function.
// The instanceof operator returns true if an object is an instance of a particular class.
// Here's an example of type narrowing using the instanceof operator:
console.log(
  '================ Type Narrowing with "instanceof" Types ================'
);
class Dog1 {
  name: string;
  bark(): void {
    console.log("Woof! Woof! " + this.name);
  }
  constructor(name: string) {
    this.name = name;
  }
}

class Cat1 {
  name: string;
  meow(): void {
    console.log("Meow! Meow! " + this.name);
  }

  constructor(name: string) {
    this.name = name;
  }
}

function animalSound(animal: Dog1 | Cat1): void {
  if (animal instanceof Dog1) {
    console.log(`${animal.name}'s usually`); // Access the property of MyClass
    animal.bark();
  } else {
    console.log(`${animal.name}'s usually`);
    animal.meow();
  }
}

const dog1Class = new Dog1("Dog");
animalSound(dog1Class); // Output: Dog's usually /n Woof!;
const cat1Class = new Cat1("Cat");
animalSound(cat1Class); // Output: Cat's usually /n Meow!;

// Type Narrowing with Intersection Types
// Intersection types are a way to narrow down the type of a variable based on its combined types.
// Intersection types are used to perform type narrowing in TypeScript.
// Here's an example of type narrowing using intersection types:
console.log(
  '================ Type Narrowing with "Intersection" Types ================'
);
type Person1 = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  position: string;
};

function printDetails(person: Person1 & Employee): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Company: ${person.company}`);
  console.log(`Position: ${person.position}`);
}

// Create an Intersection Type
type employeePerson = Person1 & Employee; // Intersection Type

// const employee: Person & Employee = { // you can define your intersection type like this
const employee: employeePerson = {
  name: "John Doe",
  age: 30,
  company: "ABC Corp",
  position: "Manager",
};

printDetails(employee);

// Type Narrowing with in Operator
// The in operator can be used to narrow down the type of a variable based on its property.
// The in operator returns true if a property exists in an object.
// Here's an example of type narrowing using the in operator:
console.log(
  '================ Type Narrowing with "in" Operator ================'
);
type Car1 = {
  make: string;
  model: string;
};

type Truck = {
  make: string;
  model: string;
  capacity: number;
};

function printVehicle(vehicle: Car1 | Truck): void {
  if ("capacity" in vehicle) {
    console.log(`Vehicle: ${vehicle.make} ${vehicle.model}`);
    console.log(`Capacity: ${vehicle.capacity}`);
  } else {
    console.log(`Vehicle: ${vehicle.make} ${vehicle.model}`);
  }
}

const car1Obj: Car1 = {
  make: "Toyota",
  model: "Corolla",
};

const truck: Truck = {
  make: "Ford",
  model: "F-150",
  capacity: 1000,
};

printVehicle(car1Obj); // Output: Vehicle: Toyota Corolla
printVehicle(truck); // Output: Vehicle: Ford F-150 /n Capacity: 1000

// Type Narrowing with Discriminated Unions
// Discriminated unions are a way to narrow down the type of a variable based on a common property.
// Discriminated unions are used to perform type narrowing in TypeScript.
// Here's an example of type narrowing using discriminated unions:
console.log(
  '================ Type Narrowing with "Discriminated Unions" ================'
);
type CircleNarrow = {
  kind: "circle";
  radius: number;
};

type SquareNarrow = {
  kind: "square";
  sideLength: number;
};

type ShapeNarrow = CircleNarrow | SquareNarrow;

function getArea1(shape: ShapeNarrow): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

const circleNarrow: CircleNarrow = { kind: "circle", radius: 5 };
const squareNarrow: SquareNarrow = { kind: "square", sideLength: 5 };
console.log(getArea1(circleNarrow)); // Output: 78.54
console.log(getArea1(squareNarrow)); // Output: 25

// Type Narrowing with Type Assertion
// Type assertion is a way to narrow down the type of a variable in TypeScript.
// Type assertion is used to tell the compiler that a variable is of a specific type.
// Here's an example of type narrowing using type assertion:
console.log(
  '================ Type Narrowing with "Type Assertion" ================'
);
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "John",
  age: 30,
};

// Type Assertion
const userName = (user as User).name;
console.log(userName); // Output: John

// Type Narrowing with User-Defined Type Guards
// User-defined type guards are functions that return a boolean value indicating whether a variable is of a certain type.
// User-defined type guards are used to perform type narrowing in TypeScript.
// Here's an example of type narrowing using a user-defined type guard:
console.log(
  '================ Type Narrowing with "User-Defined Type Guards" ================'
);
type Animal5 = {
  name: string;
};

type Dog5 = Animal5 & {
  bark(): void;
};

type Cat2 = Animal5 & {
  meow(): void;
};

function isDog(animal: Animal5): animal is Dog5 {
  return (animal as Dog5).bark !== undefined;
}

function animalSound1(animal: Dog5 | Cat2): void {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog1: Dog5 = {
  name: "Buddy",
  bark() {
    console.log("Woof! Woof!");
  },
};

const cat1: Cat2 = {
  name: "Whiskers",
  meow() {
    console.log("Meow! Meow!");
  },
};

animalSound1(dog1); // Output: Woof! Woof!

animalSound1(cat1); // Output: Meow! Meow!

// Type Narrowing with Type Predicates
// Type predicates are functions that return a boolean value indicating whether a variable is of a certain type.
// Type predicates are used to perform type narrowing in TypeScript.
// Here's an example of type narrowing using a type predicate:
console.log(
  '================ Type Narrowing with "Type Predicates" ================'
);
type Animal6 = {
  name: string;
};

type Dog6 = Animal6 & {
  bark(): void;
};

type Cat3 = Animal6 & {
  meow(): void;
};

/*
 * Type Predicate Function: animal is Dog
 * It tells TypeScript that if the function isString returns true,
 * then the type of value can be safely assumed to be string within the scope
 * where the function was called, uses type assertion to check.
 * It returns a boolean value indicating whether the animal is a Dog.
 * It allows the TypeScript compiler to infer the correct type of the animal variable.
 */
function isDog1(animal: Animal6): animal is Dog6 {
  return (animal as Dog6).bark !== undefined;
}

function animalSound2(animal: Dog6 | Cat3): void {
  if (isDog1(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog6: Dog6 = {
  name: "Buddy",
  bark() {
    console.log("Woof! Woof!");
  },
};

const cat2: Cat3 = {
  name: "Whiskers",
  meow() {
    console.log("Meow! Meow!");
  },
};

animalSound2(dog6); // Output: Woof! Woof!

animalSound2(cat2); // Output: Meow! Meow!

// Type Narrowing with Literal Types
// Literal types are a way to narrow down the type of a variable based on a specific value.
// Literal types are used to perform type narrowing in TypeScript.
// Here's an example of type narrowing using literal types:
console.log(
  '================ Type Narrowing with "Literal Types" ================'
);
type Color = "red" | "green" | "blue";

function printColor(color: Color): void {
  switch (color) {
    case "red":
      console.log("Red");
      break;
    case "green":
      console.log("Green");
      break;
    case "blue":
      console.log("Blue");
      break;
  }
}

printColor("red"); // Output: Red
printColor("green"); // Output: Green
printColor("blue"); // Output: Blue
// printColor("yellow"); // Error: Argument of type 'yellow' is not assignable to parameter of type 'Color'.

// Type Narrowing with Type Aliases
// Type aliases are a way to narrow down the type of a variable based on a specific type.
// Type aliases are used to perform type narrowing in TypeScript.
// Here's an example of type narrowing using type aliases:
