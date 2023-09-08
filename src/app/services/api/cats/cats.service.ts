import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/utils/models';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  catsList:Cat[] =[];

  constructor(private httpClient:HttpClient) { }

  getAllCats():Observable<Cat[]>{
    const url='/assets/data.json';
    return this.httpClient.get<Cat[]>(url);
  }


}
