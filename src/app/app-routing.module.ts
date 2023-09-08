import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { CatsComponent } from './cats/cats.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'donate' , component:DonateComponent},
  {path:'cats' , component:CatsComponent},
  {path:'breeds' , component:BreedsComponent},
  {path:'breeds/:breedId' , component:BreedDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
