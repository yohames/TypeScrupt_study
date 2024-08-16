// Generics

// Regular Function

const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printboolean = (x: boolean) => console.log(x);

printString("hello");
printNumber(10);

// Generic Function

const printInfo = <T>(x: T) => console.log(x);

printInfo<string>("hello");
printInfo<number>(10);
printInfo<boolean>(true);

// Regular Function

function printBoolean(
  item: boolean,
  defaultValue: boolean
): [boolean, boolean] {
  return [item, defaultValue];
}

console.log(printBoolean(true, false));

// Generic Function

function printItem<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

console.log(printItem<string>("hello", "world"));

function printArray<T>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray<string>(["a", "b", "c"]);

function filterArray<T>(arr: T[], check: (item: T) => boolean): T[] {
  return arr.filter((item) => check(item));
}


const users = ["Alex", "Sam", "John"];
const filteredNames = filterArray(users, (name) => name.length > 3);
console.log('Filtered Name',filteredNames);

// Accepting multiple types

function printId<T, U>(id: T, name: U): [T, U] {
  return [id, name];
}

console.log(printId<number, string>(1, "Alex"));

// Default Generic Types

function printDefault<T = string>(item: T): T {
  return item;
}

console.log(printDefault(10));

// Generic Interface

interface Item<T> {
  item: T;
}

const item: Item<string> = {
  item: "hello",
};

console.log(item.item);


// Generic Class

class Data<T> {
  constructor(public data: T) {}

  getData(): T {
    return this.data;
  }
}

const data = new Data<string>("hello");
console.log(data.getData());

// Generic Constraints

interface Length {
  length: number;
}

function printLength<T extends Length>(item: T): T {
  console.log(item.length);
  return item;
}

printLength("hello");

// Generic with keyof

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const obj = {
  name: "Alex",
  age: 25,
};

console.log(getProperty(obj, "name"));
console.log(getProperty(obj, "age"));

// Generic with Array

function getArray<T>(arr: T[]): T[] {
  return arr;
}

console.log(getArray([1, 2, 3]));

// Generic with Promise

function resolvePromise<T>(promise: Promise<T>) {
  promise.then((data) => console.log(data));
}

resolvePromise(Promise.resolve("Hello"));

// Generic with async function 

async function asyncFunction<T>(item: T) {
  return item;
}

asyncFunction<string>("Hello").then((data) => console.log(data));

