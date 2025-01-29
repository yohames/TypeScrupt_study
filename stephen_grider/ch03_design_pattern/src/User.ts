import { faker } from "@faker-js/faker";

const randomName = faker.person.fullName(); // Rowan Nikolaus
console.log(randomName);
export class User {
  public name: string;
  public location: { lat: number; lng: number };
  constructor() {
    this.name = faker.person.firstName("male");
    this.location = {
      lat: +faker.location.latitude({ max: 20, min: 10 }),
      lng: +faker.location.longitude({ max: 40, min: 30 }),
    };
  }
}

const user = new User();

