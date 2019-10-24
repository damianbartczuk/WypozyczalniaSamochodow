import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {SamochodyService} from './samochody.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

fdescribe('SamochodyService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

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
