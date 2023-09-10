import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatsService } from '../services/api/cats/cats.service';
import { Breed, Cat } from 'src/utils/models';
import { BreedsService } from '../services/api/breeds/breeds.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {

  cat: Cat = {} as Cat;
  breed: Breed = {} as Breed;

  constructor(
    private router: Router,
    private activatedRout: ActivatedRoute,
    private catsService: CatsService,
    private breedsService: BreedsService,
  ) { }

  ngOnInit(): void {
    const catId: string = this.activatedRout.snapshot.params['catId'];
    this.catsService.getCat(catId).subscribe({
      next: (result: Cat) => {
        console.log(result);
        this.cat = result;
      }
    });

    const breedId: string = this.cat.breedId;
    this.breedsService.getBreed(breedId).subscribe({
      next: (result: Breed) => {
        this.breed = result;
      }
    });


  }

  onClick() {
    this.router.navigate(["adopt", this.cat.id]);
  }
  catSelected(cat: Cat) { }



}
