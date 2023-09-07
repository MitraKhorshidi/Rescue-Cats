import { Component } from '@angular/core';
import { Breed } from 'src/utils/models';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent {

  breedsList :Breed[] =[];
}
