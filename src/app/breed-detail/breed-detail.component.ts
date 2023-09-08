import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent implements OnInit{

  constructor(private activetedRout: ActivatedRoute){}


  ngOnInit(): void {
    const breedId :string =this.activetedRout.snapshot.params['breedId']
    console.log('params',breedId);
  }

  
}
