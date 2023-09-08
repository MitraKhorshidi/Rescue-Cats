import { Component ,Input } from '@angular/core';
import { Breed } from 'src/utils/models';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent {
  @Input() breed: Breed = {};
}
