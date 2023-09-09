import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat, GeoLocation } from 'src/utils/models';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input() cats: Cat[] = [];

  @Input() center: GeoLocation = {
    lat: 48.139405,
    lng: 11.574377,
  };


  @Output() catSelected  = new EventEmitter<Cat>()


  zoom = 12;
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  markerClick(cat: Cat) {
    this.catSelected.emit(cat);
  }

}
