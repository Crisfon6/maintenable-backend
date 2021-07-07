import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccidenTrackingComponent } from './search-acciden-tracking.component';

describe('SearchAccidenTrackingComponent', () => {
  let component: SearchAccidenTrackingComponent;
  let fixture: ComponentFixture<SearchAccidenTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAccidenTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAccidenTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
