import { Component , OnInit } from '@angular/core';
import { Cat } from 'src/utils/models';
import { CatsService } from '../services/api/cats/cats.service';

@Component({
  selector: 'app-home-adoption',
  templateUrl: './home-adoption.component.html',
  styleUrls: ['./home-adoption.component.css']
})
export class HomeAdoptionComponent implements OnInit{
  catsList : Cat[] =[];
  constructor(private catsService:CatsService){}

  ngOnInit(): void {
    this.catsService.getAllCats().subscribe({
      next:(result : Cat[])=>{
        this.catsList = result.slice(0,3);
      }
    });
  }

}
