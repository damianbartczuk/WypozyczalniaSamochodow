import {TestBed} from '@angular/core/testing';

import {UzytkownikService} from './uzytkownik.service';

describe('UzytkownikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UzytkownikService = TestBed.get(UzytkownikService);
    expect(service).toBeTruthy();
  });
});
