import {TestBed} from '@angular/core/testing';

import {SamochodDataService} from './samochod-data.service';

describe('SamochodDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamochodDataService = TestBed.get(SamochodDataService);
    expect(service).toBeTruthy();
  });
});
