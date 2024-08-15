"use strict";
var person = {
    name: "John",
    age: 23,
};
console.log(person);
// Inference type
var tech = "TypeScript";
tech = "JavaScript";
// tech = 10;// Error
console.log(tech);
// Any type
var color = "Blue";
color = 123;
console.log(color);
// Function Parameter Annotations
//function funcName(params: type){}
function greet(name) {
    return "Hello, ".concat(name);
}
console.log(greet("John"));
// Default Params Value
function greet2(name) {
    if (name === void 0) { name = "John"; }
    return "Hello, ".concat(name);
}
// Return Type Annotation
function greet3(name) {
    return "Hello, ".concat(name);
}
console.log(greet3("John Doe"));
// Return Type Annotation (Arrow Function)
var greet4 = function (name) {
    return "Hello, ".concat(name);
};
console.log(greet4("Arrow"));
// Void Type Annotation
function greet5(name) {
    console.log("Hello, ".concat(name));
}
greet5("Void");
// type Shape = "circle" | "square" | "rombus" | "rectangle";// Throws compile time error because of exhaustive checking
function getArea(shape) {
    switch (shape) {
        case "circle":
            return Math.PI * 1 * 1; // Example area calculation
        case "square":
            return 1 * 1; // Example area calculation
        case "rombus":
            return 1 * 1; // Example area
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea("circle"));
// Array Types
var nums = [];
var names = ["John"];
console.log("show nums", nums);
console.log("show names", names);
// Using objects as function return value
function printUser() {
    return {
        name: "Alex",
        age: 19,
        location: "USA",
    };
}
console.log(printUser());
function printUser2(userData) {
    return userData;
}
console.log("testing Type Aliases", printUser2({ name: "Alex", age: 19, location: "USA" }));
var userOptional = {
    name: 'Abebe',
    age: 20
};
// userOptional.age = 21 // Error because age is readonly
userOptional.email = 'tester@gmail.com';
console.log("Name: ".concat(userOptional.name, ", Age: ").concat(userOptional.age, ", email: ").concat(userOptional.email));
var userIntersection = {
    name: "John",
    age: 20,
    email: "tester@gmail.com",
    location: "USA",
};
console.log("Intersection Type= Name: ".concat(userIntersection.name, ", Age: ").concat(userIntersection.age, ", email: ").concat(userIntersection.email, ", location: ").concat(userIntersection.location));
// Union types
var password = 23;
var userUnion = {
    name: "John",
    age: 20,
    // email: "tester@gmail.com"
};
var userUnion2 = {
    // name: "John",
    // age: 20,
    email: "tester@gmail.com",
    location: "USA",
};
console.log("Union Type= Name: ".concat(userUnion.name, ", Age: ").concat(userUnion.age, "}"));
console.log("Union Type= Email: ".concat(userUnion2.email, ", Location: ").concat(userUnion2.location));
function getAreaUnion(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.side * shape.side;
    }
}
console.log(getAreaUnion({ kind: "square", side: 1 }));
// String Literal Types
var literalColor;
literalColor = "red";
// color = "green";// Error
console.log(literalColor);
// Tuple Types
var tuple;
tuple = ["hello", 10, true];
console.log(tuple);
// Array Destructuring
var arr = ["John", 23, "USA"];
var nameTuple = arr[0], age = arr[1], locationTuple = arr[2];
console.log(nameTuple, age, locationTuple);
var products = ["Apple", 1, "Banana", 2];
var product1 = products[0], qty1 = products[1], product2 = products[2], qty2 = products[3];
console.log(product1, qty1, product2, qty2);
// Enum Types
var enumColor;
(function (enumColor) {
    enumColor[enumColor["Red"] = 0] = "Red";
    enumColor["Green"] = "abebe";
    enumColor[enumColor["Blue"] = 3] = "Blue";
})(enumColor || (enumColor = {}));
var c = enumColor.Green;
console.log(c);
// Type Assertion
var code = "123";
var employeeCode = code;
console.log(employeeCode);
var value = "hello";
var stringLength = value.length; // Assert value as a string
