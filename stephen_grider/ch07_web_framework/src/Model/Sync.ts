import axios, { AxiosPromise, AxiosResponse } from "axios";
interface HasId {
  id?: number | string;
}

export class Sync<T extends HasId> {
  /*
  The code attempts to assign the entire object (data) to the current instance (this) inside the constructor. However, in TypeScript (and JavaScript) you cannot reassign "this" to a new value within the constructor. This will result in a compilation error because "this" is immutable and is automatically prepared for you by the class system.
  */

  /* 
  A common approach to initialize an instance with data from an object is to copy the properties of "data" into "this". One straightforward way to do this is by using Object.assign, which copies enumerable properties from the source object to the target object.
  */

  constructor(public rootUrl: string) {}

  fetch(id: number | string): AxiosPromise {
    // Make a request for a user with a given ID
    return axios
      .get(`${this.rootUrl}/${id}`)
      .then((response: AxiosResponse): void => {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
        return error;
      });
  }

  save = (data: T): AxiosPromise => {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  };
}
