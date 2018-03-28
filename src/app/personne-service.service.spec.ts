import { TestBed, inject } from '@angular/core/testing';

import { PersonneServiceService } from './personne-service.service';

describe('PersonneServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonneServiceService]
    });
  });

  it('should be created', inject([PersonneServiceService], (service: PersonneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
