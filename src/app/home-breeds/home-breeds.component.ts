import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/utils/models';
import { BreedsService } from '../services/api/breeds/breeds.service';

@Component({
  selector: 'app-home-breeds',
  templateUrl: './home-breeds.component.html',
  styleUrls: ['./home-breeds.component.css']
})
export class HomeBreedsComponent implements OnInit{

  breedsList: Breed[] = [];

  constructor(
    private breedsService: BreedsService,
  ) { }

  ngOnInit(): void {
    this.breedsService.getAllBreeds().subscribe({
      next: (result: Breed[]) => {
        console.log(result);
        this.breedsList = result.slice(0,3);
      }
    });
  }

}
