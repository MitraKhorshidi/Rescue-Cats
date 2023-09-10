import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { AdoptApplication, Cat } from 'src/utils/models';
import { CatsService } from '../services/api/cats/cats.service';
import { AdoptService } from '../services/api/Adopt/adopt.service';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationSentDialogComponent } from '../application-sent-dialog/application-sent-dialog.component';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  application: AdoptApplication = {} as AdoptApplication;

  cat: Cat = {} as Cat;

  constructor(
    private activatedRout: ActivatedRoute,
    private catsService: CatsService,
    private adoptService :AdoptService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    const catId = this.activatedRout.snapshot.params['catId'];
    this.catsService.getCat(catId).subscribe({ next: (result: Cat) => { this.cat = result } });
  }

  onSubmit() { 
    this.adoptService.post(this.application);
    this.dialog.open(ApplicationSentDialogComponent);
  }

}
