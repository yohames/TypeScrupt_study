class Vehicle {
  constructor(public color: string) {} // if we make it private we couldn't access it outside of the function, if we make it protected we can only access it inside the class and the class that extends this class
  drive(to: string): void {
    console.log(`Driving to ${to} ...`);
  }
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");

vehicle.drive("London");

console.log("what is the color of the vehicle", vehicle.color);

class Car2 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(to: string): void {
    console.log(`Driving a ${this.color} car to ${to} ...`);
  }
  startDirvingProcess(to: string): void {
    this.drive(to);
    this.honk();
  }
}

const car3 = new Car2(5, "Blue");
car3.startDirvingProcess("Paris");
