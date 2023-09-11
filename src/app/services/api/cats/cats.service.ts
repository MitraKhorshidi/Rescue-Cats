import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/utils/models';

import cats from 'src/app/services/data';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor() { }

  getAllCats(): Observable<Cat[]> {
    return new Observable(observer => observer.next(cats));
  }
  

  getCat(catId: string): Observable<Cat> {
    console.log('service',cats);
    const cat = cats.find(({id}) => id == catId);
    console.log('service',cat);
    return new Observable(observer => observer.next(cat));
  }


}
