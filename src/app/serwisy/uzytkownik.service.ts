import {Injectable} from '@angular/core';
import {Uzytkownik} from '../modele/Uzytkownik';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UzytkownikService {
  private readonly BACK_URL = 'http://localhost:8080/';
  private readonly BACK_URL_POBIERZ_USERNA_Z_TOKENU = 'http://localhost:8080/pobierz_uzytkownika_za_pomoca_tokenu?token=';
  private readonly  SAVE_USER = 'zapisz_uzytkownika/';
  private readonly  FRONT_URL = 'http://localhost:4200/';

  constructor(private http: HttpClient,
              ) {}

  zapisUzytkownika(u: Uzytkownik) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': 'http://localhost:4200',
      })
    };
    return this.http.post<Uzytkownik>(this.BACK_URL.concat(this.SAVE_USER), u, httpOptions);

  }

  pobierzUzytkownikaByToken(){
    if(localStorage.getItem('token') !== null){
      const  naglowki = new  HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': '*',
      });

      return this.http.get<Uzytkownik>(this.BACK_URL_POBIERZ_USERNA_Z_TOKENU + localStorage.getItem('token'), {headers: naglowki});
    }
    alert("Chyba nie jestes zalogowany i nie mozesz zapytac o swoje samochody");
  }
}
