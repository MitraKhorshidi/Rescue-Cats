import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat, GeoLocation } from 'src/utils/models';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Output() catSelected = new EventEmitter<Cat>()

  @Input() cats: Cat[] = [];

  @Input() center: GeoLocation = {
    lat: 48.139405,
    lng: 11.574377,
  };

  zoom: number = 12;

  mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    streetViewControl: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    clickableIcons: false,

    // https://mapstyle.withgoogle.com/
    styles: [
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ],
  };
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  markerClick(cat: Cat) {
    this.catSelected.emit(cat);
  }

}
