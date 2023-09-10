import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatsService } from '../services/api/cats/cats.service';
import { Cat } from 'src/utils/models';
import { BreedsService } from '../services/api/breeds/breeds.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit{

  cat :Cat ={} as Cat;

  constructor(
    private router : Router,
    private activatedRout:ActivatedRoute,
    private catsService :CatsService,
    private breedsService : BreedsService,
    ){}

  ngOnInit(): void {
    const catId :number = this.activatedRout.snapshot.params['catId'];
    this.catsService.getCat(catId).subscribe({
      next:(result:Cat)=>{
        console.log(result);
        this.cat=result;
      }
    });
    

  }

  onClick(){
    this.router.navigate(["adopt",this.cat.id]);
  }
  catSelected(cat:Cat){}



}
