import { Component, Input } from '@angular/core';
import { Cat } from 'src/utils/models';
import { MatDialog } from '@angular/material/dialog';
import { CatDialogComponent } from '../cat-dialog/cat-dialog.component';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css'],
})
export class CatDetailComponent {
  @Input() cat: Cat = {};

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CatDialogComponent, {
      data: { cat: this.cat }
    });
  }

}
