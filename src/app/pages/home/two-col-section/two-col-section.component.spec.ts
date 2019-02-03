import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColSectionComponent } from './two-col-section.component';

describe('TwoColSectionComponent', () => {
  let component: TwoColSectionComponent;
  let fixture: ComponentFixture<TwoColSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
