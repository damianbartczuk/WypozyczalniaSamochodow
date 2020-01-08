import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {JwtResponse} from '../JwtResponse';

@Component({
  selector: 'app-zaloguj',
  templateUrl: './zaloguj.component.html',
  styleUrls: ['./zaloguj.component.css']
})
export class ZalogujComponent implements OnInit {

  form:FormGroup;
  tokenAutoryzacji: JwtResponse;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nazwaUzytkownika: new FormControl(),
      haslo: new FormControl()
    });
  }

  zaloguj(username: string, password: string) {
    console.log('metoda zaloguj username = ' + username + ' password = ' + password);
    this.authService.authorizeWithUsernameAndPassword('dbartczuk', '0001')
      .subscribe(pobranyToken => {
        this.tokenAutoryzacji = pobranyToken;
        console.log(this.tokenAutoryzacji.token);
        localStorage.setItem('token', this.tokenAutoryzacji.token);
      });

    console.log("token bez prefixów = " + this.tokenAutoryzacji.tokenWithoutPrefix);
    this.router.navigate(['/pobierz_samochody']);
  }
}
