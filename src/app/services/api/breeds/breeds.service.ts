import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from 'src/utils/models';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private httpClient : HttpClient){}

  baseUrl : string = 'https://api.thecatapi.com/v1/breeds';

  getAllBreeds():Observable<Breed[]>{
    return this.httpClient.get<Breed[]>(this.baseUrl)
  }
}
