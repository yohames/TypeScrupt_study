"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User1_street;
console.log("Typescript is here!");
class User {
    constructor(email, name) {
        this.city = "Bangalore";
        this.email = email;
        this.name = name;
        this.street = "123, 4th Cross";
    }
}
const hitesh = new User("abel@gmail.com", "Abel");
console.log(hitesh);
hitesh.city = "Mumbai";
console.log(hitesh);
// Public and Private Access Modifiers
class User1 {
    constructor(email, name) {
        this.city = "Bangalore";
        _User1_street.set(this, void 0); // Old way of defining private property in vanilla JS
        this.email = email;
        this.name = name;
        __classPrivateFieldSet(this, _User1_street, "123, 4th Cross", "f");
        this.street1 = "456, 5th Cross";
        this.street2 = "unknown";
    }
    // =======================================================
    // ================== Getters and Setters ================
    // =======================================================
    getStreet() {
        return __classPrivateFieldGet(this, _User1_street, "f");
    }
    setStreet(street) {
        __classPrivateFieldSet(this, _User1_street, street, "f");
    }
    getStreet2() {
        return this.street2;
    }
    setStreet2(street) {
        this.street2 = street;
    }
}
_User1_street = new WeakMap();
const hitesh1 = new User1("abel@gmail.com", "Abel");
console.log(hitesh1.getStreet());
hitesh1.setStreet("789, 6th Cross");
console.log(hitesh1.getStreet());
// console.log(hitesh1.#street); // Error: Property 'street' is private and only accessible within class 'User1'.
// console.log(hitesh1.street1); // Error: Property 'street1' is private and only accessible within class 'User1'.
class SubUser extends User1 {
    constructor(email, name, heigth) {
        super(email, name);
        this.height = heigth;
    }
    setStreet(street) {
        this.street2 = street;
    }
}
const subUser = new SubUser("temesgen@gmail.com", "Temesgen", 5.8);
console.log(subUser.getStreet2());
subUser.setStreet2("789, 6th Cross");
console.log(subUser.getStreet2());
// console.log(subUser.street2); // Error: Property 'street2' is protected and only accessible within class 'User1' and its subclasses.
