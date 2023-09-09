import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBreedsComponent } from './home-breeds.component';

describe('HomeBreedsComponent', () => {
  let component: HomeBreedsComponent;
  let fixture: ComponentFixture<HomeBreedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBreedsComponent]
    });
    fixture = TestBed.createComponent(HomeBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
