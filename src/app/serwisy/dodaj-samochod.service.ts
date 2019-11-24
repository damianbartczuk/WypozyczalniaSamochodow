import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Samochod} from '../Samochod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DodajSamochodService {

  readonly SAMOCHODY_RES_API = "http://localhost:9090/zapisz_samochod";


  constructor(private http: HttpClient) { }

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
