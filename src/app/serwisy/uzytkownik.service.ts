import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Uzytkownik} from '../Uzytkownik';

@Injectable({
  providedIn: 'root'
})
export class UzytkownikService {

  constructor(private http: HttpClient) {

  }

  zapisUzytkownika(u: Uzytkownik) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Uzytkownik>('http://localhost:9090/zapisz_uzytkownika/', u, httpOptions);

  }
}
