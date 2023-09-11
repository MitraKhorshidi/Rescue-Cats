import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavbarDialogComponent } from '../navbar-dialog/navbar-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    public dialog: MatDialog,
  ){}

  onClick(){
    this.dialog.open(NavbarDialogComponent);
  }


}
