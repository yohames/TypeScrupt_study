console.log("Typescript is here!");

class User {
  email: string;
  name: string;
  city: string = "Bangalore";
  private readonly street: string;
  constructor(email: string, name: string) {
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
  email: string;
  name: string;
  city: string = "Bangalore";
  #street: string; // Old way of defining private property in vanilla JS
  private street1: string;
  protected street2: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this.#street = "123, 4th Cross";
    this.street1 = "456, 5th Cross";
    this.street2 = "unknown";
  }
  // =======================================================
  // ================== Getters and Setters ================
  // =======================================================

  getStreet(): string {
    return this.#street;
  }
  setStreet(street: string) {
    this.#street = street;
  }
  getStreet2(): string {
    return this.street2;
  }
  setStreet2(street: string) {
    this.street2 = street;
  }
}

const hitesh1 = new User1("abel@gmail.com", "Abel");

console.log(hitesh1.getStreet());
hitesh1.setStreet("789, 6th Cross");
console.log(hitesh1.getStreet());

// console.log(hitesh1.#street); // Error: Property 'street' is private and only accessible within class 'User1'.
// console.log(hitesh1.street1); // Error: Property 'street1' is private and only accessible within class 'User1'.

class SubUser extends User1 {
  height: number;
  constructor(email: string, name: string, heigth: number) {
    super(email, name);
    this.height = heigth;
  }

  setStreet(street: string) {
    this.street2 = street;
  }
}

const subUser = new SubUser("temesgen@gmail.com", "Temesgen", 5.8);

console.log(subUser.getStreet2());
subUser.setStreet2("789, 6th Cross");
console.log(subUser.getStreet2());
// console.log(subUser.street2); // Error: Property 'street2' is protected and only accessible within class 'User1' and its subclasses.

