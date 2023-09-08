import { Component, Input, OnInit } from '@angular/core';
import { Breed, BreedImageData } from 'src/utils/models';
import { BreedsService } from '../services/api/breeds/breeds.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent implements OnInit {
  @Input() breed: Breed = {} as any;
  imageUrl: string = '';

  constructor(
    private breedsService: BreedsService ,
    private router:Router ,
    ) { }

  ngOnInit(): void {
    this.breedsService.getImage(this.breed).subscribe({
      next: (result: BreedImageData) => {
        console.log(result);
        this.imageUrl = result.url;
      }
    });
  }

  onClick(){
    this.router.navigate(['breeds',this.breed.id] )
  }

}
