import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { SearchParams } from 'src/utils/models';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchChange = new EventEmitter<SearchParams>();

  options: string[] = ['All', 'Very Low', 'low', 'Medium', 'High', 'Very High'];

  control_friendly = new FormControl('');
  control_intelligence = new FormControl('');
  control_dog = new FormControl('');


  ngOnInit() {
    this.control_friendly.valueChanges.subscribe({
      next: () => this.calculate()
    })
    this.control_intelligence.valueChanges.subscribe({
      next: () => this.calculate()
    })
    this.control_dog.valueChanges.subscribe({
      next: () => this.calculate()
    })
  }

  calculate() {
    const child_friendly = this.options.indexOf(this.control_friendly.value || '');
    const intelligence = this.options.indexOf(this.control_intelligence.value || '');
    const dog_friendly = this.options.indexOf(this.control_dog.value || '');
    this.searchChange.emit({ child_friendly, intelligence, dog_friendly });

  }


}
