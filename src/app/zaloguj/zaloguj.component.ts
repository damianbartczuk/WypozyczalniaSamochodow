import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {UzytkownikService} from '../serwisy/uzytkownik.service';

@Component({
  selector: 'app-zaloguj',
  templateUrl: './zaloguj.component.html',
  styleUrls: ['./zaloguj.component.css']
})
export class ZalogujComponent implements OnInit {

  private form: FormGroup;
  private tokenAutoryzacji;
  private idUzytkownikaZalogowanego = 0;
  private imieUzytkownikaZalogowanego;
  private nazwiskoUzytkownikaZalogowanego;
  private response$: Subscription;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private uzytkownikService: UzytkownikService,
              private route: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      nazwaUzytkownika: new FormControl('', [Validators.required]),
      haslo: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  zaloguj(username: string, password: string) {
    console.log('metoda zaloguj username = ' + username + ' password = ' + password);
    if (this.form.valid) {
      this.autoryzujAndPrzypiszDoZmiennejAndZapiszWLocalStorage(username, password);
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

  przedzjdzNaWidok() {
    if (this.sprawdzCzyZalogowany()) {
      this.uzytkownikService.pobierzUzytkownikaByToken().subscribe(
        value => {
          this.idUzytkownikaZalogowanego = value.idUzytkownik;
          this.imieUzytkownikaZalogowanego = value.imie;
          this.nazwiskoUzytkownikaZalogowanego = value.nazwisko;
        },
        error => console.log(error),
        () => this.route.navigate(['/strona_glowna', this.idUzytkownikaZalogowanego, this.imieUzytkownikaZalogowanego, this.nazwiskoUzytkownikaZalogowanego]));
      // }
    }
  }
}
