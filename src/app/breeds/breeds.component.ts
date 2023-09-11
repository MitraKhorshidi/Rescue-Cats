import { Component, OnInit } from '@angular/core';
import { Breed, SearchParams } from 'src/utils/models';
import { BreedsService } from '../services/api/breeds/breeds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  allBreeds: Breed[] = [];
  breedsList: Breed[] = [];
  loadMore: boolean = true;
  filteredBreeds: Breed[] = [];

  constructor(
    private breedsService: BreedsService,
  ) { }

  ngOnInit(): void {
    this.breedsService.getAllBreeds().subscribe({
      next: (result: Breed[]) => {
        this.allBreeds = result;
        this.filteredBreeds = result;
        this.load();
      }
    });
  }
  
  filterBreeds(searchParams: SearchParams) {
    this.breedsList = [];
    this.filteredBreeds = this.allBreeds
      .filter((breed) => breed.child_friendly >= searchParams.child_friendly)
      .filter((breed) => breed.intelligence >= searchParams.intelligence)
      .filter((breed) => breed.dog_friendly >= searchParams.dog_friendly)
    this.load();

  }

  load() {
    const counter = this.breedsList.length;
    this.breedsList = [...this.breedsList, ...this.filteredBreeds.slice(counter , counter+8)];

    this.loadMore = !(this.breedsList.length === this.filteredBreeds.length);
  }



}
