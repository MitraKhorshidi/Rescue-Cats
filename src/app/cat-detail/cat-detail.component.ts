import { Component, Input } from '@angular/core';
import { Cat } from 'src/utils/models';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent {
  @Input() cat :Cat ={};
}
