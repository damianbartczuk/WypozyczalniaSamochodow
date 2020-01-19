import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SamochodyService} from '../serwisy/samochody.service';

@Component({
  selector: 'app-paginacja',
  templateUrl: './paginacja.component.html',
  styleUrls: ['./paginacja.component.css']
})
export class PaginacjaComponent implements OnInit {
  @Input() liczbaWynikowWyszukania = 3;
  @Output() klikEvent = new EventEmitter();

  liczbaStron = 0;
  aktNumerStrony = 1;
  liczbaStronArray: Array<number>;

  constructor(private samochodyService: SamochodyService){}

  ngOnInit() {
    this.stworzPaginacje(-1);
    console.log("paginacja mysli, że mamy " + this.liczbaWynikowWyszukania + " samochodow");
  }

  zmienStrone(numerStrony: number) {
    this.klikEvent.emit(numerStrony);
  }

  stworzPaginacje(numerStrony: number) {
    this.liczbaStron = Math.ceil(this.liczbaWynikowWyszukania / 2);
    console.log("liczba stron to " + this.liczbaStron);
    console.log("liczba wynikow = " + this.liczbaWynikowWyszukania);
    this.liczbaStronArray = Array.from(new Array(this.liczbaStron), (value, index) => index + 1);
    console.log("liczbaStronArray = " + this.liczbaStronArray);
    if (this.liczbaStron > 0) {
      if (numerStrony === -1) {
        this.aktNumerStrony = 1;
      } else {
        this.aktNumerStrony = numerStrony;
      }
    }
  }
}
