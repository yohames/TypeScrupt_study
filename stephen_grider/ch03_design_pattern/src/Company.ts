import { faker } from "@faker-js/faker";

export class Company {
  public companyName: string;
  public catchPhrase: string;
  public location: { lat: number; lng: number };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.location.latitude({ max: 20, min: 10 }),
      lng: +faker.location.longitude({ max: 40, min: 30 }),
    };
  }
}
