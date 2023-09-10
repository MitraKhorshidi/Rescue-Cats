import { Component, Input } from '@angular/core';
import { Cat } from 'src/utils/models';
import { MatDialog } from '@angular/material/dialog';
import { CatDialogComponent } from '../cat-dialog/cat-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css'],
})
export class CatCardComponent {
  @Input() cat: Cat = {} as any;

  constructor(private router:Router) { }

  onClick(){
    this.router.navigate(["cats",this.cat.id]);
  }

}
