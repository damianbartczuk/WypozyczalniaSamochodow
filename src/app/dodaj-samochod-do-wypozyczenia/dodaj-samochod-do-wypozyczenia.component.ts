import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dodaj-samochod-do-wypozyczenia',
  templateUrl: './dodaj-samochod-do-wypozyczenia.component.html',
  styleUrls: ['./dodaj-samochod-do-wypozyczenia.component.css']
})
export class DodajSamochodDoWypozyczeniaComponent implements OnInit {

  dodajSamochodForm: FormGroup;



  constructor(private formBuilder: FormBuilder) {

  }
  sendForm(event: any){
    alert(`marka = ${event.target.marka.value} , model = ${event.target.marka.value}, opis = ${event.target.opis.value} cena za dobe = ${event.target.cenaZaDobe.value}`);
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
