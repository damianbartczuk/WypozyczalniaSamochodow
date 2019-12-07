import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-zaloguj',
  templateUrl: './zaloguj.component.html',
  styleUrls: ['./zaloguj.component.css']
})
export class ZalogujComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }


  zaloguj() {
    const val =  this.form.value;

    if(val.email && val.password) {

    }


  }

}
