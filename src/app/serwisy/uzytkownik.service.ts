import {Injectable} from '@angular/core';
import {Uzytkownik} from '../modele/Uzytkownik';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UzytkownikService {
  private readonly BACK_URL = 'http://localhost:8080/';
  private readonly  SAVE_USER = 'zapisz_uzytkownika/';

  constructor(private http: HttpClient,
              ) {}

  zapisUzytkownika(u: Uzytkownik) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Uzytkownik>(this.BACK_URL.concat(this.SAVE_USER) + this.SAVE_USER, u, httpOptions);

  }
}
