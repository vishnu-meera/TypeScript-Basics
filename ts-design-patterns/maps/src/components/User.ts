import faker from "faker";
import { Marker } from "../interfaces/marker";

export class User implements Marker {
  color: string = "red";
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  printLocation() {
    console.log(`Latitude ${this.location.lat}`);
    console.log(`Longtitude ${this.location.lng}`);
    console.log(`Name ${this.name}`);
  }

  markerContent(): string {
    return `<div><h4>User Name : ${this.name}</h4><div>`;
  }
}
