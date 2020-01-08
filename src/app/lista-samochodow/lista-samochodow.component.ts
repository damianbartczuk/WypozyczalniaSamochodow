import {Component, OnInit} from '@angular/core';
import {Samochod} from '../Samochod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-samochodow',
  templateUrl: './lista-samochodow.component.html',
  styleUrls: ['./lista-samochodow.component.css']
})
export class ListaSamochodowComponent implements OnInit {

  private readonly FRONT_URL = 'http://localhost:4200';
  private readonly CAR_API_POBIERZ_SAMOCHODY_URL = 'http://localhost:8080/pobierz_samochody';
  public samochody: Samochod[];
  public liczbaWszystkichWynikow = 0;
  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      alert("Nie jestes zalogowany");
      this.router.navigate(['/zaloguj']);
    }
    console.log("wyswietlamy samochody");
    var naglowki = new  HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': this.FRONT_URL,
    });
    console.log("wysylam request po samochody");

    this.http.get<Samochod[]>(this.CAR_API_POBIERZ_SAMOCHODY_URL, {headers: naglowki})
      .subscribe(x => {
       console.log("odbieram samochody " + x.length);
        this.samochody = x;
        this.liczbaWszystkichWynikow = x.length;
        console.log("liczba wszystkich wynikow to " + this.liczbaWszystkichWynikow);
      });
  }

  odebranieEventuPaginacji(event) {
    console.log("pdebranieEventuPaginacji");
    var naglowki = new  HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': this.FRONT_URL,
    });
    console.log("wysylam request po samochody");
    this.http.get<Samochod[]>(this.CAR_API_POBIERZ_SAMOCHODY_URL + '?pageNumber=' + (event-1), {headers: naglowki})
      .subscribe(x => {
        console.log("odbieram samochody");
        this.samochody = x;
        console.log("odebralem" + x.length);
      });
  }
}
