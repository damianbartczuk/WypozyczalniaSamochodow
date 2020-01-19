import {Component, Input, OnInit} from '@angular/core';
import {RentalService} from '../serwisy/rental.service';

@Component({
  selector: 'app-pojedynczy-samochod',
  templateUrl: './pojedynczy-samochod.component.html',
  styleUrls: ['./pojedynczy-samochod.component.css']
})
export class PojedynczySamochodComponent implements OnInit {

  @Input() id: number;
  @Input() logo: string;
  @Input() marka: string;
  @Input() model: string;
  @Input() cenaZaDobe: number;
  @Input() czyWypozyczony: boolean;
  @Input() opis: number;
  @Input() czyPokazacPrzycisk = false;
  readonly ALERT_NIEDOSTEPNY_SAMOCHOD = 'Ten egzemplarz jest wypożyczony';


  constructor(private rentalService: RentalService) {}

  ngOnInit() {}

  wypozyczSamochod() {
    console.log('id do wypozyczenia = ' + this.id);
    this.rentalService.saveRental(this.id)
      .subscribe(x => console.log("samochodow zostal wypozyczony "));
      this.czyWypozyczony = true;
  }
}
