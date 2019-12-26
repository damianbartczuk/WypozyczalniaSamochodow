import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-zaloguj',
  templateUrl: './zaloguj.component.html',
  styleUrls: ['./zaloguj.component.css']
})
export class ZalogujComponent implements OnInit {

  form:FormGroup;
  tokenAutoryzacji: string;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

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
        console.log(this.tokenAutoryzacji);
      });
  }
}
