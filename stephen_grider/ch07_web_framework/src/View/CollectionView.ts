import { User, UserProps } from "../Model/User";
import { Collection } from "../Model/Collection";


// const users = new Collection<User, UserProps>(rootUrl, (json: UserProps) => {
//   return User.buildUser(json);
// });

const rootUrl = "http://localhost:3000/users";

export abstract class CollectionView<T> extends Collection<U, V>{
//   public collection: T = [];
  constructor(public parent: Element, public model: V) {
    super(rootUrl, (json:UserProps) =>);
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
  }

  template(): string {
    return `
    <div>Hello guys</div>
    `;
  }

  abstract renderItem(): void;
}

// this.mapRegions(templateElement.content);
// this.onRender();
/*
    Correct Order (Bind then Append):
    If you bind before appending, the fragment still has the nodes, so your event listeners are attached correctly. 
    When you later append the fragment, the nodes (with their event listeners) move into the DOM.
    */
// this.bindEvent(templateElement.content);
// this.parent.append(templateElement.content);
