import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatDetailComponent,
    BreedsComponent,
    BreedDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
