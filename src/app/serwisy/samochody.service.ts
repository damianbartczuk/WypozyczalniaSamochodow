import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Samochod} from '../Samochod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamochodyService {
  readonly SAMOCHODY_RES_API = "http://localhost:9090/pobierz_samochody";

  constructor(private http: HttpClient) {
  }

  public getSamochody(): Observable<Samochod[]> {
    return this.http.get<Samochod[]>(this.SAMOCHODY_RES_API);
  }
}
