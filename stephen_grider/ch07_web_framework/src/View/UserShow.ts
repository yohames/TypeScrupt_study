import { User, UserProps } from "../Model/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
    this.bindModal();
  }

  public template(): string {
    console.log(this.model.get("name"));
    return `<div>
    <h1>User Detail</h1>
    <h2>User  Name: ${this.model.get("name")}</h2>
    <h2>User  Age: ${this.model.get("age")}</h2>
    </div>`;
  }
}
