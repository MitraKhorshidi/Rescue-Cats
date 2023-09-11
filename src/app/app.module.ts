import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { CatCardComponent } from './cat-card/cat-card.component';
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
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationSentDialogComponent } from './application-sent-dialog/application-sent-dialog.component';
import { ImagesCarouselComponent } from './images-carousel/images-carousel.component';
import { CarouselModule } from '@marcreichel/angular-carousel';
import { NavbarDialogComponent } from './navbar-dialog/navbar-dialog.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatCardComponent,
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
    MapComponent,
    ApplicationSentDialogComponent,
    ImagesCarouselComponent,
    NavbarDialogComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    GoogleMapsModule,
    FormsModule,
    CarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
