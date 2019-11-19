import {TestBed} from '@angular/core/testing';

import {DodajSamochodService} from './dodaj-samochod.service';

describe('DodajSamochodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DodajSamochodService = TestBed.get(DodajSamochodService);
    expect(service).toBeTruthy();
  });
});
