import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSentDialogComponent } from './application-sent-dialog.component';

describe('ApplicationSentDialogComponent', () => {
  let component: ApplicationSentDialogComponent;
  let fixture: ComponentFixture<ApplicationSentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationSentDialogComponent]
    });
    fixture = TestBed.createComponent(ApplicationSentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
