import {Component, OnInit} from '@angular/core';
import {Samochod} from '../Samochod';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lista-samochodow',
  templateUrl: './lista-samochodow.component.html',
  styleUrls: ['./lista-samochodow.component.css']
})
export class ListaSamochodowComponent implements OnInit {

  public samochody: Samochod[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers': '"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYmFydGN6dWsiLCJleHAiOjE1Nzc0MTU0OTgsImlhdCI6MTU3NzM5NzQ5OH0.EE2rdPr-ksIesw2pfJYmbeU_CWtXKFFn3qo1TukqwdFlafLzq-m36jAuK6y2PrT9wDC9G-zFDz3C8uPTSMY2vg'
    };
    let options = ({headers:headerDict});

    this.http.get<Samochod[]>('http://localhost:9090/pobierz_samochody')//options
      .subscribe(x => this.samochody = x);
  }




}
