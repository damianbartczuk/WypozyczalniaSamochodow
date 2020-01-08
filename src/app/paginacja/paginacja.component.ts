import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginacja',
  templateUrl: './paginacja.component.html',
  styleUrls: ['./paginacja.component.css']
})
export class PaginacjaComponent implements OnInit {
  @Input() liczbaWynikowWyszukania;
  @Output() klikEvent = new EventEmitter();

  liczbaStron = 0;
  aktNumerStrony = 1;
  liczbaStronArray: Array<number>;

  ngOnInit() {
    console.log("odebrana ilosc wynikow = " + this.liczbaWynikowWyszukania);
    this.stworzPaginacje(-1);
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