import axios, { AxiosPromise, AxiosResponse } from "axios";
type Callback = () => void;

interface HasId {
  id?: number | string;
}

interface ModelAttributes<T> {
  get<K extends keyof T>(propName: K): T[K];
  getAll(): T;
  set(update: T): void;
}

interface Sync<T> {
  fetch(id: number | string): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;

  get = this.attributes.get;

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");
    if (!id) {
      throw new Error("Can not fetch without an id");
    }
    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save() {
    this.sync.save(this.attributes.getAll()).then((response: AxiosResponse) => {
      this.events.trigger("change");
    });
  }
}
