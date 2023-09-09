import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatsComponent } from '../cats/cats.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heroImg: string = '/assets/images/hero.jpg';

  constructor(private router: Router) { }

  goCats() {
    this.router.navigate(['cats']);
  }
  goDonates() {
    this.router.navigate(['donate']);
  }
}
