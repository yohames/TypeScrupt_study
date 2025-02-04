import { UserProps } from "./User";

interface HasId {
  id?: number | string;
}

export class Atributes<T extends HasId> {
  constructor(public data: T) {}

  // here we are using *`keyof`* to make sure that propName is a key of UserProps; otherwise it will throw an error
  get = <K extends keyof T>(
    propName: K
  ): T[K] /* this is just a normal object lookup */ => {
    return this.data[propName];
  };

  getAll = (): T => {
    return this.data;
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };
}
