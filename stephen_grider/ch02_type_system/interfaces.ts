// const oldCivic = {
//   name: "civic",
//   year: 2000,
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   },
// };

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

// Fix the above code by defining an interface for the object

/*
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
*/

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Model ${this.name} year ${this.year} is ${
      this.broken ? "broken" : "not broken"
    }`;
  },
};

const mirinda = {
  color: "orange",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic);
printSummary(mirinda);

// ===========================================================
// ======================== Interface ========================
// ===========================================================

interface User {
  readonly dbId: number; // readonly property
  name: string;
  age: number;
  email: string;
  address: string;
  googleId?: string; // optional property
  startTrial: () => void; // function property
  // startTrial(): void; // another way of defining a function property
  getCoupon(couponname: string, couponNumber: number): void; // function property with arguments
}

const hitesh: User = {
  dbId: 1,
  name: "Hitesh",
  age: 24,
  email: "abebe@gmail.com",
  address: "Addis Ababa",
  startTrial() {
    console.log(this.name + " started trial");
  },
  getCoupon(name: string, num: number) {
    console.log(this.name + " got coupon " + name, "with number " + num + "!");
  },
};

hitesh.startTrial();
hitesh.getCoupon("50% off", 50);

// ===========================================================
// =================== REOPENING INTERFACE ===================
// ===========================================================

// We can reopen an interface and add more properties to it
interface User1 {
  readonly dbId: number;
  name: string;
  age: number;
  email: string;
}

interface Admin extends User1 {
  phone: string;
}

const user1: User1 = {
  dbId: 1,
  name: "Hitesh",
  age: 24,
  email: "abebe@gmail.com",
};

const adminUser: Admin = {
  dbId: 2,
  name: "Admin",
  age: 24,
  email: "admin@gmail.com",
  phone: "123456789",
};


