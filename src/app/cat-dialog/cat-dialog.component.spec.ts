import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDialogComponent } from './cat-dialog.component';

describe('CatDialogComponent', () => {
  let component: CatDialogComponent;
  let fixture: ComponentFixture<CatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatDialogComponent]
    });
    fixture = TestBed.createComponent(CatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
