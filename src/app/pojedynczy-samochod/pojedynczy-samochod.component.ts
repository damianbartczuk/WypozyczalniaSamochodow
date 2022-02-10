import {Component, Input, OnInit} from '@angular/core';
import {RentalService} from '../serwisy/rental.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker'
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pojedynczy-samochod',
  templateUrl: './pojedynczy-samochod.component.html',
  styleUrls: ['./pojedynczy-samochod.component.css']
})
export class PojedynczySamochodComponent {

  @Input() id: number;
  @Input() logo: string;
  @Input() marka: string;
  @Input() model: string;
  @Input() cenaZaDobe: number;
  @Input() czyWypozyczony: boolean;
  @Input() opis: string;
  @Input() czyPokazacPrzycisk = false;
  @Input() dataOd: Date;
  @Input() dataDo: Date;

  events: string[] = [];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private rentalService: RentalService) {}

  wypozyczSamochod() {
    console.log('id do wypozyczenia = ' + this.id);
    this.rentalService.saveRental(this.id)
      .subscribe(x => console.log("samochodow zostal wypozyczony "));
      this.czyWypozyczony = true;
  }
}
