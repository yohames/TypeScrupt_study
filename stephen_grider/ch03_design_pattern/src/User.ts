import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  public name: string;
  public location: { lat: number; lng: number };
  constructor() {
    this.name = faker.person.firstName("male");
    this.location = {
      lat: +faker.location.latitude({ max: 80, min: 1 }),
      lng: +faker.location.longitude({ max: 80, min: 30 }),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
  color: string = "red";
}
