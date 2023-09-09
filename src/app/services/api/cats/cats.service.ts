import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/utils/models';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  url:string='/assets/data.json';

  constructor(private httpClient:HttpClient) { }

  getAllCats():Observable<Cat[]>{
    return this.httpClient.get<Cat[]>(this.url);
  }
  // getCat(id:number):Observable<Cat>{
  //   this.httpClient.get<Cat[]>(this.url);
  // }


}
