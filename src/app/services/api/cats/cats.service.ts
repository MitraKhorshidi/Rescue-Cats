import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/utils/models';

import cats from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  catsList: Cat[] = [];

  constructor() { }

  getAllCats(): Observable<Cat[]> {
    return new Observable(observer => observer.next(cats));
  }

  getCat(id: number): Observable<Cat> {
    const cat = this.catsList.find((cat) => cat.id == id);
    return new Observable(observer => observer.next(cat));
  }


}
