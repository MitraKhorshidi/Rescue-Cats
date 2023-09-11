import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/utils/models';
import { CatsService } from '../services/api/cats/cats.service';
import { MatDialog } from '@angular/material/dialog';
import { CatDialogComponent } from '../cat-dialog/cat-dialog.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  allCats: Cat[] = [];
  catsList: Cat[] = [];
  counter: number = 8;
  loadMore: boolean = true;

  constructor(
    private catsService: CatsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.catsService.getAllCats().subscribe({
      next: (result: Cat[]) => {
        this.allCats = result;
        this.catsList = result.slice(0, this.counter);
      }
    });
  }

  onLoadMore() {

    this.counter += 8;
    this.catsList = [...this.catsList, ...this.allCats.slice(this.counter - 8, this.counter)];

    if (this.catsList.length === this.allCats.length) { this.loadMore = false; }
  }

  catSelected(cat: Cat) {
    this.dialog.open(CatDialogComponent, {
      data: { cat: cat }
    });
  }



}
