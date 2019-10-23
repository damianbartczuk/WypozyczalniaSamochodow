import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Samochod} from './Samochod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamochodyService {
  private SAMOCHODY_RES_API = '';

  constructor(private http: HttpClient) {
  }

  public getSamochody(): Observable<Samochod[]> {
    return this.http.get<Samochod[]>("http://localhost:9020/samochody");
  }
}
