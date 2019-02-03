import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponentComponent } from './booking-component.component';

describe('BookingComponentComponent', () => {
  let component: BookingComponentComponent;
  let fixture: ComponentFixture<BookingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
