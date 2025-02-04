import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventsing";
import { User, UserProps } from "./User";

export class Collection<T, K> {
  model: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public decerializer: (json: K) => T) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    axios
      .get(this.rootUrl)
      .then((response: AxiosResponse): void => {
        response.data.forEach((element: K) => {
          //   const user = User.buildUser(element);
          this.model.push(this.decerializer(element));
        });
        this.trigger("change");
      })
      .catch(function (error) {
        return error;
      });
  }
}
