import { Model, HasId } from "../Model/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
  public regions: { [key: string]: Element } = {};
  constructor(public parent: Element, public model: T) {
    this.bindModal();
  }
  bindModal(): void {
    this.model.on("change", (): void => {
      this.render();
    });
  }

  public render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.mapRegions(templateElement.content);
    this.onRender();
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
        element.removeEventListener(eventName, eventsMap[eventKey]); // Cleanup
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}
  abstract template(): string;
}
