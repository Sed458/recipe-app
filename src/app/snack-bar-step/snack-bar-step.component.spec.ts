import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarStepComponent } from './snack-bar-step.component';

describe('SnackBarStepComponent', () => {
  let component: SnackBarStepComponent;
  let fixture: ComponentFixture<SnackBarStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
