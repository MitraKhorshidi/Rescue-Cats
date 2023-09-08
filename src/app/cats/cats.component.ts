import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/utils/models';
import { CatsService } from '../services/api/cats/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit{

  catsList : Cat[] =[];
  constructor(private catsService:CatsService){}

  ngOnInit(): void {
    this.catsService.getAllCats().subscribe({
      next:(result : Cat[])=>{
        console.log(result);
        this.catsList = result;
      }
    });
  }

}
