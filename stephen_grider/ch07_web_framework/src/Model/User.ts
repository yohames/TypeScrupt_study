/////////////////////////////////////////////////////////////////////////////////////////////
// ===================================== PROJECT DESC =======================================
/////////////////////////////////////////////////////////////////////////////////////////////
/*
 *  #private data: UserProps
 *  - Object to store information about particular user (name, age)
 *  #get(propName: string): (string | number)
 *  - Gets a single piece of info about this user
 *  #set(update: UserProps): void
 *  - Changes information about this user (name, age)
 *  #on(eventName: string, callback: () => {})
 *  - Registers an event handler with this object, so other parts of the app know when something changes.
 *  #trigger(eventName: string): void
 *  - Triggers an event to tell other parts of the app that something has changed.
 *  #fetch(): Promise
 *  - Fetches some data from the server about the particular user
 *  #save():Promise
 *  - Saves some data about this user to the server
 * #attributes(): UserProps
 * - Returns a copy of the user's attributes
 * #sync(): void
 * - Syncs the user's data with the server
 * #events(): Events
 * - Returns the events object
 * #UserProps
 * - Interface that describes the properties of a user
 * #User
 * - Class that represents a user
 * */
/////////////////////////////////////////////////////////////////////////////////////////////
// ==========================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////

// ===================================================================
// ============================== NOTES ==============================
// ===================================================================

/* couldn't solve this issue */
//   set(update: UserProps): void{
//     for (let key of Object.keys(update) as (keyof UserProps)[]){
//         this.data[key] = update[key]!;
//     }
//   }
/* Fixed by this */
//   set(update: UserProps): void {
//     for (let key in update) {
//       if (update.hasOwnProperty(key)) {
//         (this.data as any)[key] = update[key as keyof UserProps];
//       }
//     }
//   }

// ===================================================================
// ===================================================================
// ===================================================================

import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventsing";

interface UserProps {
  id?: number | string;
  name?: string;
  age?: number;
}
type Callback = () => void;

export class User {
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  // here we are using *`keyof`* to make sure that propName is a key of UserProps; otherwise it will throw an error
  get(propName: keyof UserProps): UserProps[keyof UserProps] {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  //   on(eventName: string, callback: Callback): void {
  //     this.events.on(eventName, callback);
  //   }
  //   trigger(eventName: string): void {
  //     this.events.trigger(eventName);
  //   }

  fetch(): void {
    console.log("Show me the id:", this.get("id"));
    // Make a request for a user with a given ID
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  save(): void {
    const id = this.data.id;
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
