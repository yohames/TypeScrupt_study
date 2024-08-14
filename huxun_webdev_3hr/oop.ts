class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat(food: string): void {
    console.log(`${this.name} is eating ${food}.`);
  }

  sleep(): void {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} is barking.`);
  }
}

// Usage
const dog = new Dog("Buddy", 3, "Labrador");
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

class Animal2 {
  public name: string;
  public age: number;
  private type: string;
  protected color: string;

  constructor(name: string, age: number, type: string, color: string) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.color = color;
  }

  displayType(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Type: ${this.type}`
    );
  }
}

class Dog2 extends Animal2 {
  constructor(name: string, age: number, color: string) {
    super(name, age, "Dog", color);
    this.color = color;
  }

  display(): void {
    // console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Type: ${this.type}`); // Error: Property 'type' is private and only accessible within class 'Animal2'.
    console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}`);
  }
}

// Usage

const dog2 = new Dog2("Buddy", 3, "Brown");
dog2.display(); // Output: Name: Buddy, Age: 3, Color: Brown
dog2.displayType(); // Output: Name: Buddy, Age: 3, Color: Brown
console.log(dog2.name); // Output: Buddy
console.log(dog2.age); // Output: 3
// console.log(dog2.type); // Error: Property 'type' is private and only accessible within class 'Animal2'.
// console.log(dog2.color); // Error: Property 'color' is protected and only accessible within class 'Animal2' and its subclasses.


// Getters and Setters

// Getters and setters are used to
// define computed properties.

class MyClass {
	private _myProperty: number = 0;

	get myProperty(): number {
		return this._myProperty;
	}

	set myProperty(value: number){
		if(value < 0){
			throw new Error("value cannot be negative");	
		}
		this._myProperty = value;
	}
}


// Usage
const myClass = new MyClass();
myClass.myProperty = 10;
console.log(myClass.myProperty); // Output: 10
// myClass.myProperty = -10; // Error: value cannot be negative

// Abstract Classes

// Abstract classes are base classes
// from which other classes may be derived.
// They may not be instantiated directly.

abstract class Animal3 {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

class Dog3 extends Animal3 {
  makeSound(): void {
    console.log("Bark");
  }
}

// Usage
const dog3 = new Dog3();
dog3.makeSound(); // Output: Bark
dog3.move(); // Output: Moving...




// Static Members
// Static members belong to the class
// rather than the instance of the class.
// They are accessed using the class name.

// class StaticExample {0
//     static staticProperty = "static property";

//     static staticMethod(): void {
//         console.log("Static method");
//     }
// }
