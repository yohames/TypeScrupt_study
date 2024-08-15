"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.eat = function (food) {
        console.log("".concat(this.name, " is eating ").concat(food, "."));
    };
    Animal.prototype.sleep = function () {
        console.log("".concat(this.name, " is sleeping."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking."));
    };
    return Dog;
}(Animal));
// Usage
var dog = new Dog("Buddy", 3, "Labrador");
dog.eat("bones"); // Output: Buddy is eating bones.
dog.sleep(); // Output: Buddy is sleeping.
dog.bark(); // Output: Buddy is barking.
// Access Modifiers
// Public
// By default, all class members are
// public. Public members can be accessed
// from outside the class.
// Private
// Private members are accessible only
// within the class in which they are
// declared.
// Protected
// Protected members are accessible within
// the class in which they are declared and
// in the derived classes.
var Animal2 = /** @class */ (function () {
    function Animal2(name, age, type, color) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.color = color;
    }
    Animal2.prototype.displayType = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Color: ").concat(this.color, ", Type: ").concat(this.type));
    };
    return Animal2;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name, age, color) {
        var _this = _super.call(this, name, age, "Dog", color) || this;
        _this.color = color;
        return _this;
    }
    Dog2.prototype.display = function () {
        // console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Type: ${this.type}`); // Error: Property 'type' is private and only accessible within class 'Animal2'.
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Color: ").concat(this.color));
    };
    return Dog2;
}(Animal2));
// Usage
var dog2 = new Dog2("Buddy", 3, "Brown");
dog2.display(); // Output: Name: Buddy, Age: 3, Color: Brown
dog2.displayType(); // Output: Name: Buddy, Age: 3, Color: Brown
console.log(dog2.name); // Output: Buddy
console.log(dog2.age); // Output: 3
// console.log(dog2.type); // Error: Property 'type' is private and only accessible within class 'Animal2'.
// console.log(dog2.color); // Error: Property 'color' is protected and only accessible within class 'Animal2' and its subclasses.
// Getters and Setters
// Getters and setters are used to
// define computed properties.
var MyClass = /** @class */ (function () {
    function MyClass() {
        this._myProperty = 0;
    }
    Object.defineProperty(MyClass.prototype, "myProperty", {
        get: function () {
            return this._myProperty;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value cannot be negative");
            }
            this._myProperty = value;
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
// Usage
var myClass = new MyClass();
myClass.myProperty = 10;
console.log(myClass.myProperty); // Output: 10
// myClass.myProperty = -10; // Error: value cannot be negative
// Abstract Classes
// Abstract classes are base classes
// from which other classes may be derived.
// They may not be instantiated directly.
var Animal3 = /** @class */ (function () {
    function Animal3() {
    }
    Animal3.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal3;
}());
var Dog3 = /** @class */ (function (_super) {
    __extends(Dog3, _super);
    function Dog3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog3.prototype.makeSound = function () {
        console.log("Bark");
    };
    return Dog3;
}(Animal3));
// Usage
var dog3 = new Dog3();
dog3.makeSound(); // Output: Bark
dog3.move(); // Output: Moving...
var Dog4 = /** @class */ (function () {
    function Dog4(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog4.prototype.eat = function (food) {
        console.log("".concat(this.name, " is eating ").concat(food, "."));
    };
    Dog4.prototype.sleep = function () {
        return "".concat(this.name, " is sleeping.");
        // console.log(`${this.name} is sleeping.`);
    };
    return Dog4;
}());
// Usage
var dog4 = new Dog4("Buddy", 3);
dog4.eat("bones"); // Output: Buddy is eating bones.
// dog4.sleep(); // Output: Buddy is sleeping.
// console.log(dog4.sleep()); // Output: Buddy is sleeping.
// Inheritance vs Composition
// Inheritance
// Inheritance is a mechanism where a new class
// inherits properties and methods from an
// existing class. It promotes code reusability.
// Composition
// Composition is a design technique to implement has-a
// relationship between objects. It allows creating
// complex objects by combining simpler ones.
// Inheritance Example
// class Engine {
//   start(): void {
//     console.log("Engine starting...");
//   }
// }
// class Car extends
// Engine {
//   drive(): void {
//     console.log("Car driving...");
//   }
// }
// // Composition Example
// class Engine2 {
//   start(): void {
//     console.log("Engine starting...");
//   }
// }
// class Car2 {
//   engine = new Engine2();
//   drive(): void {
//     console.log("Car driving...");
//     this.engine.start();
//   }
// }
// // Usage
// const car2 = new Car2();
// car2.drive(); // Output: Car driving... Engine starting...
// // Factory Pattern
// // Factory pattern is a creational pattern
// // that provides an interface to create
// // objects without specifying the class.
// interface AnimalFactory {
//   createAnimal(): Animal;
// }
// class DogFactory implements AnimalFactory {
//   createAnimal(): Dog {
//     return new Dog("Buddy", 3, "Labrador");
//   }
// }
// // Usage
// const dogFactory = new DogFactory();
// const dog5 = dogFactory.createAnimal();
// dog5.eat("bones"); // Output: Buddy is eating bones.
// dog5.sleep(); // Output: Buddy is sleeping.
// dog5.bark(); // Output: Buddy is barking.
// // Builder Pattern
// // Builder pattern is a creational pattern
// // that separates the construction of a
// // complex object from its representation.
// class User {
//   name: string;
//   age: number;
//   email: string;
//   constructor(builder: UserBuilder) {
//     this.name = builder.name;
//     this.age = builder.age;
//     this.email = builder.email;
//   }
// }
// class UserBuilder {
//   name: string;
//   age: number;
//   email: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   setAge(age: number): UserBuilder {
//     this.age = age;
//     return this;
//   }
//   setEmail(email: string): UserBuilder {
//     this.email = email;
//     return this;
//   }
//   build(): User {
//     return new User(this);
//   }
// }
// // Usage
// const user = new UserBuilder("John")
//   .setAge(30)
//   .setEmail("tester@gmail.com")
//   .build();
// console.log(user.name); // Output: John
// console.log(user.age); // Output: 30
// console.log(user.email); // Output:
// //
// //
// // Prototype Pattern
// // Prototype pattern is a creational pattern
// // that is used to instantiate a new object
// // by copying an existing object.
// class Prototype {
//   property: string;
//   constructor(property: string) {
//     this.property = property;
//   }
//   clone(): this {
//     return Object.create(this);
//   }
// }
// // Usage
// const prototype = new Prototype("property");
// const clone = prototype.clone();
// console.log(clone.property); // Output: property
// // Observer Pattern
// // Observer pattern is a behavioral pattern
// // that defines a one-to-many dependency between objects.
// // When one object changes state, all its dependents
// // are notified and updated automatically.
// class Subject {
//   observers: Observer[] = [];
//   addObserver(observer: Observer): void {
//     this.observers.push(observer);
//   }
//   removeObserver(observer: Observer): void {
//     this.observers = this.observers.filter(
//       existingObserver => existingObserver !== observer
//     );
//   }
//   notifyObservers(): void {
//     this.observers.forEach(observer => observer.update());
//   }
// }
// interface Observer {
//   update(): void;
// }
// class ConcreteObserver implements Observer {
//   update(): void {
//     console.log("Observer notified");
//   }
// }
// // Usage
// const subject = new Subject();
// const observer = new ConcreteObserver();
// subject.addObserver(observer);
// subject.notifyObservers(); // Output: Observer notified
// // Strategy Pattern
// // Strategy pattern is a behavioral pattern
// // that enables selecting an algorithm at runtime.
// interface Strategy {
//   execute(): void;
// }
// class ConcreteStrategy1 implements Strategy {
//   execute(): void {
//     console.log("Strategy 1");
//   }
// }
// class ConcreteStrategy2 implements Strategy {
//   execute(): void {
//     console.log("Strategy 2");
//   }
// }
// class Context {
//   strategy: Strategy;
//   constructor(strategy: Strategy) {
//     this.strategy = strategy;
//   }
//   executeStrategy(): void {
//     this.strategy.execute();
//   }
// }
// // Usage
// const strategy1 = new ConcreteStrategy1();
// const context = new Context(strategy1);
// context.executeStrategy(); // Output: Strategy 1
// const strategy2 = new ConcreteStrategy2();
// context.strategy = strategy2;
// context.executeStrategy(); // Output: Strategy 2
// // State Pattern
// // State pattern is a behavioral pattern
// // that allows an object to change its behavior
// // when its internal state changes.
// interface State {
//   handle(context: Context2): void;
// }
// class ConcreteStateA implements State {
//   handle(context: Context2): void {
//     console.log("State A");
//     context.state = new ConcreteStateB();
//   }
// }
// class ConcreteStateB implements State {
//   handle(context: Context2): void {
//     console.log("State B");
//     context.state = new ConcreteStateA();
//   }
// }
// class Context2 {
//   state: State;
//   constructor(state: State) {
//     this.state = state;
//   }
//   request(): void {
//     this.state.handle(this);
//   }
// }
// // Usage
// const stateA = new ConcreteStateA();
// const context2 = new Context2(stateA);
// context2.request(); // Output: State A
// context2.request(); // Output: State B
// context2.request(); // Output: State A
// // Command Pattern
// // Command pattern is a behavioral pattern
// // that encapsulates a request as an object,
// // thereby allowing parameterization of clients
// // with different requests, queuing, and logging
// // of requests, and supporting undoable operations.
// interface Command {
//   execute(): void;
// }
// class ConcreteCommand implements Command {
//   receiver: Receiver;
//   constructor(receiver: Receiver) {
//     this.receiver = receiver;
//   }
//   execute(): void {
//     this.receiver.action();
//   }
// }
// class Receiver {
//   action(): void {
//     console.log("Receiver action");
//   }
// }
// class Invoker {
//   command: Command;
//   constructor(command: Command) {
//     this.command = command;
//   }
//   executeCommand(): void {
//     this.command.execute();
//   }
// }
// // Usage
// const receiver = new Receiver();
// const command = new ConcreteCommand(receiver);
// const invoker = new Invoker(command);
// invoker.executeCommand(); // Output: Receiver action
// // Chain of Responsibility Pattern
// // Chain of responsibility pattern is a behavioral
// // pattern that allows an object to pass a request
// // along a chain of handlers.
// interface Handler {
//   setNext(handler: Handler): Handler;
//   handle(request: string): string;
// }
// abstract class AbstractHandler implements Handler {
//   private nextHandler: Handler;
//   setNext(handler: Handler): Handler {
//     this.nextHandler = handler;
//     return handler;
//   }
//   handle(request: string): string {
//     if (this.nextHandler) {
//       return this.nextHandler.handle(request);
//     }
//     return null;
//   }
// }
// class Handler1 extends AbstractHandler {
//   handle(request: string): string {
//     if (request === "one") {
//       return "Handler 1";
//     } else {
//       return super.handle(request);
//     }
//   }
// }
// class Handler2 extends AbstractHandler {
//   handle(request: string): string {
//     if (request === "two") {
//       return "Handler 2";
//     } else {
//       return super.handle(request);
//     }
//   }
// }
// // Usage
// const handler1 = new Handler1();
// const handler2 = new Handler2();
// handler1.setNext(handler2);
// console.log(handler1.handle("one")); // Output: Handler 1
// console.log(handler1.handle("two")); // Output: Handler 2
// console.log(handler1.handle("three")); // Output: null
// // Mediator Pattern
// // Mediator pattern is a behavioral pattern
// // that defines an object that encapsulates how
// // objects interact.
// class Mediator {
//   component1: Component1;
//   component2: Component2;
//   constructor(component1: Component1, component2: Component2) {
//     this.component1 = component1;
//     this.component1.setMediator(this);
//     this.component2 = component2;
//     this.component2.setMediator(this);
//   }
//   notify(sender: object, event: string): void {
//     if (event === "A") {
//       console.log("Mediator reacts on A and triggers following operations:");
//       this.component2.doC();
//     }
//     if (event === "D") {
//       console.log("Mediator reacts on D and triggers following operations:");
//       this.component1.doB();
//       this.component2.doC();
//     }
//   }
// }
// class BaseComponent {
//   mediator: Mediator;
//   setMediator(mediator: Mediator): void {
//     this.mediator = mediator;
//   }
// }
// class Component1 extends BaseComponent {
//   doA(): void {
//     console.log("Component 1 does A.");
//     this.mediator.notify(this, "A");
//   }
//   doB(): void {
//     console.log("Component 1 does B.");
//     this.mediator.notify(this, "B");
//   }
// }
// class Component2 extends BaseComponent {
//   doC(): void {
//     console.log("Component 2 does C.");
//     this.mediator.notify(this, "C");
//   }
//   doD(): void {
//     console.log("Component 2 does D.");
//     this.mediator.notify(this, "D");
//   }
// }
// // Usage
// const component1 = new Component1();
// const component2 = new Component2();
// const mediator = new Mediator(component1, component2);
// component1.doA(); // Output: Component 1 does A. Mediator reacts on A and triggers following operations: Component 2 does C.
// component2.doD(); // Output: Component 2 does D. Mediator reacts on D and triggers following operations: Component 1 does B. Component 2 does C.
// // Visitor Pattern
// // Visitor pattern is a behavioral pattern
// // that allows adding new behaviors to existing
// // classes without altering their structure.
// interface Visitor {
//   visitConcreteElementA(element: ConcreteElementA): void;
//   visitConcreteElementB(element: ConcreteElementB): void;
// }
// class ConcreteVisitor1 implements Visitor {
//   visitConcreteElementA(element: ConcreteElementA): void {
//     console.log("ConcreteVisitor1 visited ConcreteElementA");
//   }
//   visitConcreteElementB(element: ConcreteElementB): void {
//     console.log("ConcreteVisitor1 visited ConcreteElementB");
//   }
// }
// class ConcreteVisitor2 implements Visitor {
//   visitConcreteElementA(element: ConcreteElementA): void {
//     console.log("ConcreteVisitor2 visited ConcreteElementA");
//   }
//   visitConcreteElementB(element: ConcreteElementB): void {
//     console.log("ConcreteVisitor2 visited ConcreteElementB");
//   }
// }
// interface Element {
//   accept(visitor: Visitor): void;
// }
// class ConcreteElementA implements Element {
//   accept(visitor: Visitor): void {
//     visitor.visitConcreteElementA(this);
//   }
// }
// class ConcreteElementB implements Element {
//   accept(visitor: Visitor): void {
//     visitor.visitConcreteElementB(this);
//   }
// }
// // Usage
// const visitor1 = new ConcreteVisitor1();
// const visitor2 = new ConcreteVisitor2();
// const elementA = new ConcreteElementA();
// const elementB = new ConcreteElementB();
// elementA.accept(visitor1); // Output: ConcreteVisitor1 visited ConcreteElementA
// elementA.accept(visitor2); // Output: ConcreteVisitor2 visited ConcreteElementA
// elementB.accept(visitor1); // Output: ConcreteVisitor1 visited ConcreteElementB
// elementB.accept(visitor2); // Output: ConcreteVisitor2 visited ConcreteElementB
// // Template Method Pattern
// // Template method pattern is a behavioral
// // pattern that defines the program skeleton
// // of an algorithm in the superclass but lets
// // subclasses override specific steps of the
// // algorithm without changing its structure.
// abstract class AbstractClass {
//   templateMethod(): void {
//     this.baseOperation1();
//     this.requiredOperation1();
//     this.baseOperation2();
//     this.hook1();
//     this.requiredOperation2();
//     this.baseOperation3();
//     this.hook2();
//   }
//   baseOperation1(): void {
//     console.log("AbstractClass baseOperation1");
//   }
//   baseOperation2(): void {
//     console.log("AbstractClass baseOperation2");
//   }
//   baseOperation3(): void {
//     console.log("AbstractClass baseOperation3");
//   }
//   hook1(): void {}
//   hook2(): void {}
//   abstract requiredOperation1(): void;
//   abstract requiredOperation2(): void;
// }
// class ConcreteClass extends AbstractClass {
//   requiredOperation1(): void {
//     console.log("ConcreteClass requiredOperation1");
//   }
//   requiredOperation2(): void {
//     console.log("ConcreteClass requiredOperation2");
//   }
//   hook1(): void {
//     console.log("ConcreteClass hook1");
//   }
//   hook2(): void {
//     console.log("ConcreteClass hook2");
//   }
// }
// // Usage
// const concreteClass = new ConcreteClass();
// concreteClass.templateMethod();
// // Output:
// // AbstractClass baseOperation1
// // ConcreteClass requiredOperation1
// // AbstractClass baseOperation2
// // ConcreteClass hook1
// // ConcreteClass requiredOperation2
// // AbstractClass baseOperation3
// // ConcreteClass hook2
// // Iterator Pattern
// // Iterator pattern is a behavioral pattern
// // that provides a way to access the elements
// interface Iterator {
//   next(): any;
//   hasNext(): boolean;
// }
// interface Aggregator {
//   createIterator(): Iterator;
// }
// class ConcreteIterator implements Iterator {
//   private collection: any[] = [];
//   private position: number = 0;
//   constructor(collection: any[]) {
//     this.collection = collection;
//   }
//   next(): any {
//     const result = this.collection[this.position];
//     this.position += 1;
//     return result;
//   }
//   hasNext(): boolean {
//     return this.position < this.collection.length;
//   }
// }
// class ConcreteAggregator implements Aggregator {
//   private collection: any[] = [];
//   constructor(collection: any[]) {
//     this.collection = collection;
//   }
//   createIterator(): Iterator {
//     return new ConcreteIterator(this.collection);
//   }
// }
// // Usage
// const collection = [1, 2, 3, 4, 5];
// const aggregator = new ConcreteAggregator(collection);
// const iterator = aggregator.createIterator();
// while (iterator.hasNext()) {
//   console.log(iterator.next());
// }
// // Output:
// // 1
// // 2
// // 3
// // 4
// // 5
// // Memento Pattern
// // Memento pattern is a behavioral pattern
// // that allows capturing and storing the
// // current state of an object.
// class Memento {
//   state: string;
//   constructor(state: string) {
//     this.state = state;
//   }
//   getState(): string {
//     return this.state;
//   }
// }
// class Originator {
//   state: string;
//   setState(state: string): void {
//     this.state = state;
//   }
//   saveToMemento(): Memento {
//     return new Memento(this.state);
//   }
//   restoreFromMemento(memento: Memento): void {
//     this.state = memento.getState();
//   }
// }
// class Caretaker {
//   mementos: Memento[] = [];
//   addMemento(memento: Memento): void {
//     this.mementos.push(memento);
//   }
//   getMemento(index: number): Memento {
//     return this.mementos[index];
//   }
// }
// // Usage
// const originator = new Originator();
// const caretaker = new Caretaker();
// originator.setState("State1");
// originator.setState("State2");
// caretaker.addMemento(originator.saveToMemento());
// originator.setState("State3");
// caretaker.addMemento(originator.saveToMemento());
// originator.setState("State4");
// console.log(originator.state); // Output: State4
// originator.restoreFromMemento(caretaker.getMemento(0));
// console.log(originator.state); // Output: State2
// originator.restoreFromMemento(caretaker.getMemento(1));
// console.log(originator.state); // Output: State3
// // Static Members
// // Static members belong to the class
// // rather than the instance of the class.
// // They are accessed using the class name.
// class StaticExample {0
//     static staticProperty = "static property";
//     static staticMethod(): void {
//         console.log("Static method");
//     }
// }
// // Usage
// console.log(StaticExample.staticProperty); // Output: static property
// StaticExample.staticMethod(); // Output: Static method
// // Singleton Pattern
// // Singleton pattern restricts the instantiation
// // of a class to a single object.
// class Singleton {
//   private static instance: Singleton;
//   private constructor() {}
//   static getInstance(): Singleton {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }
//     return Singleton.instance;
//   }
// }
// // Usage
// const singleton1 = Singleton.getInstance();
// const singleton2 = Singleton.getInstance();
// console.log(singleton1 === singleton2); // Output: true
// // Mixins
// // Mixins are a way to share methods among
// // classes without using inheritance.
// class Jumpable {
//   jump(): void {
//     console.log("Jumping...");
//   }
// }
// class Duck {
//   quack(): void {
//     console.log("Quack");
//   }
// }
// interface Duck extends Jumpable {}
// applyMixins(Duck, [Jumpable]);
// // Usage
// const duck = new Duck();
// duck.quack(); // Output: Quack
// duck.jump(); // Output: Jumping...
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//   baseCtors.forEach(baseCtor => {
//     Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//       derivedCtor.prototype[name] = baseCtor.prototype[name];
//     });
//   });
// }
// // Decorators
// // Decorators are a design pattern that is
// // used to separate modification or decoration
// // of a class without modifying the original
// // source code.
// function classDecorator<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     newProperty = "new property";
//     hello = "override";
//   };
// }
// @classDecorator
// class Greeter {
//   property = "property";
//   hello: string;
//   constructor(m: string) {
//     this.hello = m;
//   }
// }
// // Usage
// console.log(new Greeter("world")); // Output: Greeter { property: 'property', hello: 'override', newProperty: 'new property' }
// // Method Decorator
// // Method decorators are applied to the
// // property descriptor for the method and
// // can be used to observe, modify, or replace
// // a method definition.
// function methodDecorator(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method Decorator called");
// }
// class MethodDecoratorExample {
//   @methodDecorator
//   method() {}
// }
// // Usage
// const methodDecoratorExample = new MethodDecoratorExample();
// methodDecoratorExample.method(); // Output: Method Decorator called
// // Property Decorator
// // Property decorators are applied to the
// // property descriptor for the member and
// // can be used to observe, modify, or replace
// // a property definition.
// function propertyDecorator(target: any, propertyKey: string) {
//   console.log("Property Decorator called");
// }
// class PropertyDecoratorExample {
//   @propertyDecorator
//   property = "property";
// }
// // Usage
// const propertyDecoratorExample = new PropertyDecoratorExample();
// console.log(propertyDecoratorExample.property); // Output: Property Decorator called
// // Parameter Decorator
// // Parameter decorators are applied for a
// // class constructor
// function parameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
//   console.log("Parameter Decorator called");
// }
// class ParameterDecoratorExample {
//   method(@parameterDecorator parameter: string) {}
// }
// // Usage
// const parameterDecoratorExample = new ParameterDecoratorExample();
// parameterDecoratorExample.method("test"); // Output: Parameter Decorator called
