import { Component, Input, OnInit } from '@angular/core';
import { Breed, BreedImageData } from 'src/utils/models';
import { BreedsService } from '../services/api/breeds/breeds.service';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent implements OnInit {
  @Input() breed: Breed = {} as any;
  imageUrl: string = '';

  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.breedsService.getImage(this.breed).subscribe({
      next: (result: BreedImageData) => {
        console.log(result);
        this.imageUrl = result.url;
      }
    });
  }

  onClick(){}

}
