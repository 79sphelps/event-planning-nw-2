import { TestBed, inject } from '@angular/core/testing';

import { ServicesFormService } from './services-form.service';

describe('ServicesFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesFormService]
    });
  });

  it('should be created', inject([ServicesFormService], (service: ServicesFormService) => {
    expect(service).toBeTruthy();
  }));
});
