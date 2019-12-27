import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pojedynczy-samochod',
  templateUrl: './pojedynczy-samochod.component.html',
  styleUrls: ['./pojedynczy-samochod.component.css']
})
export class PojedynczySamochodComponent implements OnInit {

  // public samochody: Samochod[];

  @Input() logo: string;
  @Input() marka: string;
  @Input() model: string;
  @Input() cenaZaDobe: number;
  @Input() czyWypozyczony: boolean;
  @Input() opis: number;
  readonly ALERT_NIEDOSTEPNY_SAMOCHOD = 'Ten egzemplarz jest wypożyczony';

  constructor() {
  }

  ngOnInit() {

    // const headerDict = {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    //   'Access-Control-Allow-Headers': '"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    //   // 'Access-Control-Allow-Credentials' : 'true',
    //   // "Accept": 'application/json',
    //   'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYmFydGN6dWsiLCJleHAiOjE1Nzc0MTU0OTgsImlhdCI6MTU3NzM5NzQ5OH0.EE2rdPr-ksIesw2pfJYmbeU_CWtXKFFn3qo1TukqwdFlafLzq-m36jAuK6y2PrT9wDC9G-zFDz3C8uPTSMY2vg'
    // };
    // let options = ({headers:headerDict});
    //
    // this.http.get<Samochod[]>('http://localhost:9090/pobierz_samochody')//options
    //   .subscribe(x => this.samochody = x);
  }

  wypozyczSamochod() {
      this.czyWypozyczony = true;
  }
}
