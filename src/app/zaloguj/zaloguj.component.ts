import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {UzytkownikService} from '../serwisy/uzytkownik.service';
import {Uzytkownik} from '../modele/Uzytkownik';

@Component({
  selector: 'app-zaloguj',
  templateUrl: './zaloguj.component.html',
  styleUrls: ['./zaloguj.component.css']
})
export class ZalogujComponent implements OnInit {

  form: FormGroup;
  tokenAutoryzacji;
  zalogowanyUzytkownik: Uzytkownik;
  response$: Subscription;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private uzytkownikService: UzytkownikService,
              private route: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      nazwaUzytkownika: new FormControl('', [Validators.required]),
      haslo: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  public zaloguj(username: string, password: string) {
    console.log('metoda zaloguj username = ' + username + ' password = ' + password);
    if (this.form.valid) {
      this.autoryzujAndPrzypiszDoZmiennejAndZapiszWLocalStorage(username, password);
      console.log('cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc');
      this.przedzjdzNaWidok();
    }
  }

  private autoryzujAndPrzypiszDoZmiennejAndZapiszWLocalStorage(username: string, password: string) {
    this.response$ = this.authService.authorizeWithUsernameAndPassword(username, password)
      .subscribe(pobranyToken => {
          console.log(pobranyToken.token);
          this.tokenAutoryzacji = pobranyToken.token;
          localStorage.setItem('token', this.tokenAutoryzacji);
        },
        error => alert('Podaleś złą nazwę użytkownika lub hasło'),
        () => console.log('skonczylem auytoryzowac'));
  }

  public sprawdzCzyZalogowany(): boolean {
    return !(localStorage.getItem('token') == undefined);
  }

  public przedzjdzNaWidok() {
    setTimeout(()=>{
      if (this.sprawdzCzyZalogowany()) {
        this.uzytkownikService.pobierzUzytkownikaByToken().subscribe(
          value => {
            console.log('uzytkownik z rolami!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log(value);
            this.zalogowanyUzytkownik = value;
          },
          error => console.log(error),
          () => this.route.navigate(['/strona_glowna', this.zalogowanyUzytkownik.idUzytkownik,
            this.zalogowanyUzytkownik.imie, this.zalogowanyUzytkownik.nazwisko]));
      }
    }, 1000)

  }
}
