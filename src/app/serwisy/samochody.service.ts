import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Samochod} from '../modele/Samochod';
import {Observable} from 'rxjs';
import {SamochodDto} from "../modele/SamochodDto";

@Injectable({
  providedIn: 'root'
})
export class SamochodyService {
  readonly SAMOCHODY_RES_API = "http://localhost:8080/pobierz_samochody";
  readonly FRONT_URL = "http://localhost:4200/";
  readonly RENTAL_URL = "http://localhost:8080/get_rental/";
  readonly ZAPISZ_SAMOCHOD_URL = "http://localhost:8080/zapisz_samochod";

  constructor(private http: HttpClient) {
  }


  public getWypozyczoneSamochodyDLaId(id: number){
    console.log('wybralem id = ' + id);
    if(id == undefined){
      console.log('id jest indefined');
      return ;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': '*',
      })
    };
    return this.http.get<SamochodDto[]>(this.RENTAL_URL + id, httpOptions);
  }

  public getSamochody(pageNumber?: number, pageSize?: number): Observable<Samochod[]> {
    console.log('getSamochody z serwisu '+pageNumber);
    console.log('get samochody z serwisu ' + pageSize);
    var naglowki = new  HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': '*'
      // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'

    });
    return pageNumber == undefined || pageSize == undefined ?
      this.http.get<Samochod[]>(this.SAMOCHODY_RES_API + '?token=' + localStorage.getItem('token'), {headers: naglowki}) :
      this.http.get<Samochod[]>(this.SAMOCHODY_RES_API +
        '?pageNumber=' + pageNumber + '&pageSize=' + pageSize + '&token=' + localStorage.getItem('token'), {headers: naglowki});
  }

  public zapiszSamochod(samochod: Samochod): Observable<Samochod>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': '*'
    });
    let options = {
      headers: headers
    };
    return this.http.post<Samochod>(this.ZAPISZ_SAMOCHOD_URL, samochod, options);
  }

}
