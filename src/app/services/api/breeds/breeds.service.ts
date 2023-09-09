import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed, BreedImageData } from 'src/utils/models';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  baseUrl: string = 'https://api.thecatapi.com/v1/';

  getAllBreeds(): Observable<Breed[]> {
    const url: string = 'breeds';
    return this.httpClient.get<Breed[]>(this.baseUrl.concat(url));
  }

  getImage(breed: Breed): Observable<BreedImageData> {
    const url: string = `images/${breed.reference_image_id}`
    return this.httpClient.get<BreedImageData>(this.baseUrl.concat(url));
  }
  
  getBreed(id: string): Observable<Breed> {
    const url: string = `breeds/${id}`
    return this.httpClient.get<Breed>(this.baseUrl.concat(url));
  }

}
