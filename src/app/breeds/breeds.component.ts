import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/utils/models';
import { BreedsService } from '../services/api/breeds/breeds.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  breedsList: Breed[] = [];
  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.breedsService.getAllBreeds().subscribe({
      next: (result: Breed[]) => {
        console.log(result);
        this.breedsList = result; 
      } 
    });
  }
}
