import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Samochod} from './Samochod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DodajSamochodService {

  readonly SAMOCHODY_RES_API = "http://localhost:9020/samochody/dodaj-samochod";


  constructor(private http: HttpClient) { }

  public zapiszSamochod(samochod: Samochod): Observable<Samochod>{
    alert('w serwisie zapiszSamochod');
    return this.http.post<Samochod>(this.SAMOCHODY_RES_API, samochod);
  }

}
