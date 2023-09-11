import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/utils/models';
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
  counter: number = 8;
  loadMore: boolean = true;

  constructor(
    private breedsService: BreedsService,
  ) { }

  ngOnInit(): void {
    this.breedsService.getAllBreeds().subscribe({
      next: (result: Breed[]) => {
        this.allBreeds = result;
        this.breedsList = this.allBreeds.slice(0,this.counter)
      }
    });
  }
  onLoadMore() {

    this.counter += 8;
    this.breedsList = [...this.breedsList, ...this.allBreeds.slice(this.counter - 8, this.counter)];

    if (this.breedsList.length === this.allBreeds.length) { this.loadMore = false; }
  }


}
