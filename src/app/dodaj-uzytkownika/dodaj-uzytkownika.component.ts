import {Component, OnInit} from '@angular/core';
import {UzytkownikService} from '../serwisy/uzytkownik.service';
import {Uzytkownik} from '../Uzytkownik';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-dodaj-uzytkownika',
  templateUrl: './dodaj-uzytkownika.component.html',
  styleUrls: ['./dodaj-uzytkownika.component.css']
})
export class DodajUzytkownikaComponent implements OnInit {

private cookieValue: string;


  constructor(private formBuilder: FormBuilder, private uzytkownikService: UzytkownikService, private cookie: CookieService) { }

  ngOnInit() {
    this.cookie.set('cookie-name', 'our cookie value');
    console.log(this.cookie.getAll())
  }

  public zapisz(event: any){
    const u: Uzytkownik = <Uzytkownik> {
      imie: event.target.imie.value,
      nazwisko: event.target.nazwisko.value,
      username: event.target.username.value,
      password: event.target.password.value
    };
    this.uzytkownikService.zapisUzytkownika(u)
      .subscribe(
        user => console.log(user.username, user.nazwisko)
      );
  }

}
