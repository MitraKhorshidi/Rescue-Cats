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

  // pageNum :any ;

  breedsList: Breed[] = [];

  constructor(
    private breedsService: BreedsService,
    // private activatedRoute :ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.breedsService.getAllBreeds().subscribe({
      next: (result: Breed[]) => {
        // console.log(result);
        this.breedsList = result;
      }
    });

    // console.log('queryparam',this.activatedRout.snapshot.queryParamMap.get('pageNum') );
    // this.activatedRoute.queryParamMap.subscribe((params) => {
    //   this.pageNum = params.get('pageNum') ;
    //   console.log('Query params ', this.pageNum);
    // });
  }
}
