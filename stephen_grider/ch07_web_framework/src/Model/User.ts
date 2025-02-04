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

// import { Eventing } from "./Eventsing";
// import { Sync } from "./Sync";
// import { Atributes } from "./Attributes";
// import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Atributes } from "./Attributes";
import { Eventing } from "./Eventsing";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number | string;
  name?: string;
  age?: number;
}
type Callback = () => void;

const rootUrl = "http://localhost:3000/users";
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Atributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing()
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) => {
      return User.buildUser(json);
    });
  }

  isAdminUser(): Boolean {
    return this.get("id") == "1";
  }

  //   static buildLocalUser(attrs: UserProps): User {
  //     return new User(
  //       new Atributes<UserProps>(attrs),
  //       new LocalStorageSync<UserProps>(rootUrl),
  //       new Eventing()
  //     );
  //   }

  /* The Older Way Using composition */
  //   public Events: Eventing = new Eventing();
  //   public Sync: Sync<UserProps> = new Sync<UserProps>(
  //     "http://localhost:3000/users"
  //   );
  //   public Attributes: Atributes<UserProps>;
  //   constructor(public data: UserProps) {
  //     this.Attributes = new Atributes<UserProps>(data);
  //   }
}
