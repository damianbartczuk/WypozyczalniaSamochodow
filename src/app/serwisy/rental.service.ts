import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Rental} from '../modele/Rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  readonly SAVE_RENTAL_URL = 'http://localhost:8080/save_rental';
  readonly FRONT_URL = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  saveRental(idCar: number){
    console.log("wypozyczasz samochod");
    return this.http.post<Rental>(this.SAVE_RENTAL_URL, idCar, this.prepareHttpHeaders());
  }

  private prepareHttpHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),

      })
    };
  }
}
