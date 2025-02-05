import { User } from "../Model/User";
export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModal();
  }

  bindModal(): void {
    this.model.on("change", (): void => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.setRandomAge": this.onSetAgeClick.bind(this),
      "click:.change-name": this.onSetNameClick,
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
  public template(): string {
    return `<div>
    <h1 style="color: green">User Form</h1>
    <h2>Name: ${this.model.get("name")}</h2>
    <h2>Name: ${this.model.get("age")}</h2>
    <input/>
    <button class="change-name">Change Name</button>
    <button class="setRandomAge">Set Random Age</button>
    </div>`;
  }
  public render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    /*
    Correct Order (Bind then Append):
    If you bind before appending, the fragment still has the nodes, so your event listeners are attached correctly. 
    When you later append the fragment, the nodes (with their event listeners) move into the DOM.
    */
    this.bindEvent(templateElement.content);
    this.parent.append(templateElement.content);
  }

  bindEvent(fragment: DocumentFragment): void {
    let eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
}
