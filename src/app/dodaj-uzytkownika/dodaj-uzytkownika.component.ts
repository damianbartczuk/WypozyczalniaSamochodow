import {Component, OnInit} from '@angular/core';
import {UzytkownikService} from '../serwisy/uzytkownik.service';
import {Uzytkownik} from '../Uzytkownik';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-dodaj-uzytkownika',
  templateUrl: './dodaj-uzytkownika.component.html',
  styleUrls: ['./dodaj-uzytkownika.component.css']
})
export class DodajUzytkownikaComponent implements OnInit {

  dodajUzytkownikaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private uzytkownikService: UzytkownikService, private cookie: CookieService) { }


  ngOnInit() {
    this.dodajUzytkownikaForm = this.formBuilder.group({
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public zapisz(imie, nazwisko, nazwaUzytkownika, haslo){
    const u: Uzytkownik = <Uzytkownik> {
      imie: imie.value,
      nazwisko: nazwisko.value,
      username: nazwaUzytkownika.value,
      password: haslo.value
    };
    this.uzytkownikService.zapisUzytkownika(u)
      .subscribe(
        user => console.log(user.username, user.nazwisko)
      );
  }

}
