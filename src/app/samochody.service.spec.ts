import {TestBed} from '@angular/core/testing';
import {SamochodyService} from './samochody.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

fdescribe('SamochodyService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  });

  it('should be created', () => {
    const service: SamochodyService = TestBed.get(SamochodyService);
    expect(service).toBeTruthy();
  });

  it('should returns Observable of cars', () => {
    const service: SamochodyService = TestBed.get(SamochodyService);
    expect(service.getSamochody()).toBeTruthy();
  });
});
