import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  center: google.maps.LatLngLiteral = {
    lat: 48.139405,
    lng: 11.574377,
  };
  zoom = 12;

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [
    { lng: 11.574377, lat: 48.139405 },
  ];



  markerClick(loc: google.maps.LatLngLiteral) {
    console.log('marker clicked: ', loc)
    // if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  moveMap(event: google.maps.MapMouseEvent) {
    // if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    // if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
