import { User } from "./User";
import { Company } from "./Company";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

let map: google.maps.Map;

const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8,
  });
}

initMap();


/*
In TypeScript, the as HTMLElement syntax is a type assertion. It tells the TypeScript compiler to treat the result of document.getElementById("map") as an HTMLElement
. This is useful because document.getElementById can return `null` if the element with the specified ID does not exist, and TypeScript needs to know the type of the returned value to ensure type safety. Here's a breakdown of the code: Without the type assertion, TypeScript might raise an error because document.getElementById can return `null`, and google.maps.Map expects an HTMLElement. This ensures that you only attempt to create the map if the element exists.
*/