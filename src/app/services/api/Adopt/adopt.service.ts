import { Injectable } from '@angular/core';
import { AdoptApplication } from 'src/utils/models';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  application : AdoptApplication = {} as AdoptApplication ;
  constructor() { }

  post(application :AdoptApplication){
    console.log('application form',application);
  }
}
