import { Collection } from "../Model/Collection";

const rootUrl = "http://localhost:3000/users";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {
    // this.bindModal();
  }

  // bindModal(): void {
  //   this.collection.on("change", (): void => {
  //     this.render();
  //   });
  // }

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    this.collection.model.forEach((model: T) => {
      const itemParent = document.createElement("div");
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }); 
    this.parent.append(templateElement.content); 
  }

  abstract renderItem(model: T, itemParent: Element): void;
}
