import { Marker } from "../interfaces/marker";

export class MyMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      },
      clickableIcons: true
    });
  }

  getMap(): google.maps.Map {
    return this.googleMap;
  }

  addMarker(marker: Marker): void {
    const markerObj = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng
      }
    });

    markerObj.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.markerContent()
      });
      infoWindow.open(this.googleMap, markerObj);
    });
  }
}
