import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentTrackingComponent } from './accident-tracking.component';

describe('AccidentTrackingComponent', () => {
  let component: AccidentTrackingComponent;
  let fixture: ComponentFixture<AccidentTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccidentTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
