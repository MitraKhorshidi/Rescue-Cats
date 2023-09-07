import { Component, Input } from '@angular/core';
import { Breed } from 'src/utils/models';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent {

  @Input() breed: Breed = {};
}
