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
    const url: string = `${this.baseUrl}breeds`;
    return this.httpClient.get<Breed[]>(url);
  }
  
  getBreed(id: string): Observable<Breed> {
    const url: string = `${this.baseUrl}breeds/${id}`
    return this.httpClient.get<Breed>(url);
  }

  getImage(breed: Breed): Observable<BreedImageData> {
    const url: string = `${this.baseUrl}images/${breed.reference_image_id}`
    return this.httpClient.get<BreedImageData>(url);
  }

  getImages(breed :Breed): Observable<BreedImageData[]>{
    const url: string =`${this.baseUrl}images/search?breed_ids=${breed.id}&limit=4`;
    return this.httpClient.get<BreedImageData[]>(url);
  }

}
