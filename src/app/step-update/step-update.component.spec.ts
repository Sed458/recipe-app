import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { StepUpdateComponent } from './step-update.component';

describe('StepUpdateComponent', () => {
  let component: StepUpdateComponent;
  let fixture: ComponentFixture<StepUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepUpdateComponent ],
      imports: [MatSnackBarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(StepUpdateComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
