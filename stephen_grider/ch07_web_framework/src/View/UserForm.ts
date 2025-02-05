import { User, UserProps } from "../Model/User";
import { View } from "./View";

interface HasId {
  id?: number | string;
}
export class UserForm extends View<User, UserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
    this.bindModal();
  }
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.setRandomAge": this.onSetAgeClick.bind(this),
      "click:.change-name": this.onSetNameClick,
      "click:.save-user": this.onSaveUserClick,
    };
  }
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.setName(name);
    }
  };

  onSaveUserClick = (): void => {
    this.model.save();
  };
  public template(): string {
    return `<div>
    <input placeholder="${this.model.get("name")}" />
    <button class="change-name">Change Name</button>
    <button class="setRandomAge">Set Random Age</button>
    <button class="save-user">Save</button>
    </div>`;
  }
}
