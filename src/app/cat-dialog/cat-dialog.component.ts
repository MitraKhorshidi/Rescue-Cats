import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cat } from 'src/utils/models';


@Component({
  selector: 'app-cat-dialog',
  templateUrl: './cat-dialog.component.html',
  styleUrls: ['./cat-dialog.component.css'],
})
export class CatDialogComponent {
  public readonly cat;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { cat: Cat },
    private router: Router
  ) {
    this.cat = data.cat;
  }

  mapClick(cat: Cat) { }

  onClick() {
    this.router.navigate(['adopt', this.cat.id]);
  }

}
