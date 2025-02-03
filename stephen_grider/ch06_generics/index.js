"use strict";
// class ArrayOfNumbers {
//   constructor(public collection: number[]) {}
//   get(index: number): number {
//     return this.collection[index];
//   }
// }
// class ArrayOfStrings {
//   constructor(public collection: string[]) {}
//   get(index: number): string {
//     return this.collection[index];
//   }
// }
// class ArrayofAnything<T> {
//   constructor(public collection: T[]) {}
//   get(index: number): T {
//     return this.collection[index];
//   }
// }
// const arr = new ArrayofAnything(["a", "b", "c"]);
class ArrayOfAny {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
const a = [23, 5, 14, 55, 88, 7, 23];
const b = new ArrayOfAny(a);
console.log(b.get(2));
// Generics with Functions
function printAnything(arr) {
    console.log(arr);
}
printAnything([[3], [4, [5, ['a']]], [5], [6], [7], 'abebe']); // Used type inference to determine the type of T, but it is better to explicitly define the type of T because it sometimes can help to catch errors early on.
// Generic Constraints
class Car {
    print() {
        console.log('I am a car');
    }
}
class House {
    print() {
        console.log('I am a house');
    }
}
function printHousesOrCars(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHousesOrCars([new House()]); // This will work because both House and Car have the print method.
// printHousesOrCars([1, 2, 3, 4, 5]);// This will not work because the numbers do not have the print method.
const routes = Object.freeze({
    home: '/',
    about: '/about',
    contact: '/contact'
});
function goto(route) {
    return routes[route];
}
console.log(goto('home'));
