import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DodajSamochodService} from '../dodaj-samochod.service';
import {Samochod} from '../Samochod';

@Component({
  selector: 'app-dodaj-samochod-do-wypozyczenia',
  templateUrl: './dodaj-samochod-do-wypozyczenia.component.html',
  styleUrls: ['./dodaj-samochod-do-wypozyczenia.component.css']
})
export class DodajSamochodDoWypozyczeniaComponent implements OnInit {

  dodajSamochodForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private dodajSamochodService: DodajSamochodService) {

  }
  sendForm(event: any){
    alert(`marka = ${event.target.marka.value} , model = ${event.target.marka.value}, opis = ${event.target.opis.value} cena za dobe = ${event.target.cenaZaDobe.value}`);
    let samochod: Samochod = {
      marka: event.target.marka.value,
      model: event.target.model.value,
      opis: event.target.opis.value,
      cenaZaDobe: event.target.cenaZaDobe.value,
      id: 4,
      logo : 'assets/bmwseria1.jpg',
      czyWypozyczony: false
    };
    this.dodajSamochodService.zapiszSamochod(samochod);

    alert('wyslales własnie samochod');
  }

  ngOnInit() {
    this.dodajSamochodForm = this.formBuilder.group({
      marka: ['', Validators.required],
      model: ['', Validators.required],
      opis: ['', Validators.required],
      cenaZaDobe: ['', Validators.required],
    });
  }

}
