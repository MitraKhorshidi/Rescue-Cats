import { Component  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-sent-dialog',
  templateUrl: './application-sent-dialog.component.html',
  styleUrls: ['./application-sent-dialog.component.css']
})
export class ApplicationSentDialogComponent {

  constructor(private router :Router){}

  onClick(){
    this.router.navigate(['/']);
  }
}
