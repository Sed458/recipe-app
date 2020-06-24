import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepUpdateComponent } from './step-update.component';

describe('StepUpdateComponent', () => {
  let component: StepUpdateComponent;
  let fixture: ComponentFixture<StepUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
