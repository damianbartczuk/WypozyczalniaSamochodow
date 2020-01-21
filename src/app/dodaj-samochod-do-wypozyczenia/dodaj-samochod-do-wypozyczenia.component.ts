import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Samochod} from '../modele/Samochod';
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
  sendForm(marka: string , model: string, opis: string, cenaZaDobe: string){
    let samochod: Samochod = {
      marka: marka,
      model: model,
      opis: opis,
      cenaZaDobe: cenaZaDobe,
      logo : '',
      czyWypozyczony: false
    };
    this.samochodyService.zapiszSamochod(samochod)
      .subscribe(x => console.log("zapisany samochod: " + x),
        error => alert('Nie udało się zapisać samochodu'),
        () => alert('Zapisałem ' + samochod.marka)
      );

    this.dodajSamochodForm.reset();
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
      cenaZaDobe: ['', Validators.required]
    });
  }

}
