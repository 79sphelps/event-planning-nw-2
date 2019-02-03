import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesContentComponent } from './services-content.component';

describe('ServicesContentComponent', () => {
  let component: ServicesContentComponent;
  let fixture: ComponentFixture<ServicesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
