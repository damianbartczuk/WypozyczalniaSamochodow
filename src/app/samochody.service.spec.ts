import {TestBed} from '@angular/core/testing';

import {SamochodyService} from './samochody.service';

describe('SamochodyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamochodyService = TestBed.get(SamochodyService);
    expect(service).toBeTruthy();
  });
});
