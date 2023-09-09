import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { BreedCardComponent } from './breed-card/breed-card.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatDialogComponent } from './cat-dialog/cat-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AdoptComponent } from './adopt/adopt.component';
import { HomeAdoptionComponent } from './home-adoption/home-adoption.component';
import { HomeBreedsComponent } from './home-breeds/home-breeds.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatDetailComponent,
    BreedsComponent,
    BreedDetailComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    DonateComponent,
    BreedCardComponent,
    HomeComponent,
    CatDialogComponent,
    AdoptComponent,
    HomeAdoptionComponent,
    HomeBreedsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule, MatButtonModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
