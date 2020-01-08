import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Samochod} from '../Samochod';
import {Router} from '@angular/router';
import {SamochodyService} from '../serwisy/samochody.service';

@Component({
  selector: 'app-dodaj-samochod-do-wypozyczenia',
  templateUrl: './dodaj-samochod-do-wypozyczenia.component.html',
  styleUrls: ['./dodaj-samochod-do-wypozyczenia.component.css']
})
export class DodajSamochodDoWypozyczeniaComponent implements OnInit {

  dodajSamochodForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private samochodyService:SamochodyService) {
  }
  sendForm(event: any){
    let samochod: Samochod = {
      marka: event.target.marka.value,
      model: event.target.model.value,
      opis: event.target.opis.value,
      cenaZaDobe: event.target.cenaZaDobe.value,
      logo : '',
      czyWypozyczony: false
    };
    this.samochodyService.zapiszSamochod(samochod)
      .subscribe(x => console.log("zapisany samochod: " + samochod));
  }

  ngOnInit() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      alert("Nie jestes zalogowany");
      this.router.navigate(['/zaloguj']);
    }

    this.dodajSamochodForm = this.formBuilder.group({
      marka: ['', Validators.required],
      model: ['', Validators.required],
      opis: ['', Validators.required],
      cenaZaDobe: ['', Validators.required],
    });
  }

}
