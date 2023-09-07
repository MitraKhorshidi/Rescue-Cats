import { Component } from '@angular/core';
import { catsList } from 'src/utils/data';
import { Cat } from 'src/utils/models';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {

  catsList : Cat[] =catsList;
}
