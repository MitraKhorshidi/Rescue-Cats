import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedsService } from '../services/api/breeds/breeds.service';
import { Breed, BreedImageData } from 'src/utils/models';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent implements OnInit {

  breed: Breed = {} as any;
  images: BreedImageData[] = [];

  constructor(
    private activetedRout: ActivatedRoute,
    private breedsService: BreedsService
  ) { }


  ngOnInit(): void {

    const breedId: string = this.activetedRout.snapshot.params['breedId'];
    this.breedsService.getBreed(breedId).subscribe({
      next: (breed) => {
        this.breed = breed;
        
        this.breedsService.getImages(breed).subscribe({
          next: (result) => {
            this.images = result;
          }
        });

      }
    });
  }


}
