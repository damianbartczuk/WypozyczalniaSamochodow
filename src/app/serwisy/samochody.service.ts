import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Samochod} from '../modele/Samochod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamochodyService {
  readonly SAMOCHODY_RES_API = "http://localhost:8080/pobierz_samochody";

  constructor(private http: HttpClient) {
  }

  public getSamochody(): Observable<Samochod[]> {
    return this.http.get<Samochod[]>(this.SAMOCHODY_RES_API);
  }

  public zapiszSamochod(samochod: Samochod): Observable<Samochod>{
    alert('w serwisie zapiszSamochod = ' + samochod);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    };
    return this.http.post<Samochod>(this.SAMOCHODY_RES_API, samochod, options);
  }

}
