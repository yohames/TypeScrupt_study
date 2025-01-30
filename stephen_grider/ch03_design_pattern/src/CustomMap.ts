import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent?(): string;
  color: string;
}
interface MarkerAdder {
  addMarker(location: Mappable): void;
}

export class CustomMap implements MarkerAdder {
  private googleMap: google.maps.Map;
  center: google.maps.LatLngLiteral = { lat: 9.145, lng: 40.4897 };

  constructor(mapElementId: string) {
    this.googleMap = new google.maps.Map(
      /* ================ Type Assertion ================ */
      /*
      In TypeScript, the as HTMLElement syntax is a type assertion. It tells the TypeScript compiler to treat the result of document.getElementById("map") as an HTMLElement. This is useful because document.getElementById can return `null` if the element with the specified ID does not exist, and TypeScript needs to know the type of the returned value to ensure type safety. Here's a breakdown of the code: Without the type assertion, TypeScript might raise an error because document.getElementById can return `null`, and google.maps.Map expects an HTMLElement. This ensures that you only attempt to create the map if the element exists.
       */
      document.getElementById(mapElementId) as HTMLElement,
      {
        center: this.center,
        zoom: 2,
      }
    );
  }
  // =============== bad way of implementing addMarker ===============
  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng,
  //       },
  //       map: this.googleMap,
  //       title: "Hello World!",
  //       animation: google.maps.Animation.BOUNCE,
  //     });
  //   }
  addMarker(mappable: Mappable): void {
    const googleMarker = new google.maps.Marker({
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      map: this.googleMap,
      // animation: google.maps.Animation.BOUNCE,
    });
    const googleInfoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent ? mappable.markerContent() : "",
      ariaLabel: "Uluru",
    });
    googleMarker.addListener("click", () => {
      googleInfoWindow.open({
        anchor: googleMarker,
        map: this.googleMap,
      });
    });
  }
}
