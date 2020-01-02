import {Component, OnInit} from '@angular/core';
import {Samochod} from '../Samochod';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
    console.log("wyswietlamy samochody");
    var naglowki = new  HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYmFydGN6dWsiLCJleHAiOjE1Nzc5ODczMjIsImlhdCI6MTU3Nzk2OTMyMn0.Co43Kpgsw_MoKIp4l18426xe3orT8izEEZa1KvvHT09PcAV8yuiX2MDUrh2cdzEHgPWDa45u-dff3m6BYZFoPA',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });
    console.log("wysylam request po samochody");
    this.http.get<Samochod[]>('http://localhost:9090/api/car/pobierz_samochody', {headers: naglowki})
      .subscribe(x => {
       console.log("odbieram samochody");
        this.samochody = x

      });
  }




}
