import faker from "faker";
import { Marker } from "../interfaces/marker";

export class Company implements Marker {
  color: string = "yellow";
  companyName: string;
  location: {
    lat: number;
    lng: number;
  };
  catchPhrase: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  printLocation() {
    console.log(`Latitude ${this.location.lat}`);
    console.log(`Longtitude ${this.location.lng}`);
    console.log(`Company Name ${this.companyName}`);
    console.log(`Catch Phrase ${this.catchPhrase}`);
  }

  markerContent(): string {
    return `<div><h4>Company Name : ${this.companyName}</h4><p>${this.catchPhrase}<p> <div>`;
  }
}
