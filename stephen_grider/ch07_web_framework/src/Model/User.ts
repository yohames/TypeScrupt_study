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

import { Eventing } from "./Eventsing";
import { Sync } from "./Sync";
import { Atributes } from "./Attributes";
import axios, { AxiosPromise, AxiosResponse } from "axios";

export interface UserProps {
  id?: number | string;
  name?: string;
  age?: number;
}
type Callback = () => void;

export class User {
  public Events: Eventing = new Eventing();
  public Sync: Sync<UserProps> = new Sync<UserProps>(
    "http://localhost:3000/users"
  );
  public Attributes: Atributes<UserProps>;

  constructor(public data: UserProps) {
    this.Attributes = new Atributes<UserProps>(data);
  }

  get on() {
    return this.Events.on;
  }
  get trigger() {
    return this.Events.trigger;
  }

  get get() {
    return this.Attributes.get;
  }

  set(update: UserProps) {
    this.Attributes.set(update);
    this.Events.trigger("change");
  }

  fetch(): void {
    const id = this.Attributes.get("id");
    if (!id) {
      throw new Error("Can not fetch without an id");
    }
    this.Sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save() {
    this.Sync.save(this.Attributes.getAll()).then((response: AxiosResponse) => {
        // this.set(response.data); 
        this.Events.trigger("change");
    });
  }
}
