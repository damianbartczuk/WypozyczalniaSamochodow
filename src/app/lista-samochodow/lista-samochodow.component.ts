import {Component, OnInit} from '@angular/core';
import {Samochod} from '../modele/Samochod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SamochodyService} from '../serwisy/samochody.service';

@Component({
  selector: 'app-lista-samochodow',
  templateUrl: './lista-samochodow.component.html',
  styleUrls: ['./lista-samochodow.component.css']
})
export class ListaSamochodowComponent implements OnInit {

  private readonly FRONT_URL = 'http://localhost:4200';
  private readonly CAR_API_POBIERZ_SAMOCHODY_URL = 'http://localhost:8080/pobierz_samochody';
  public samochody: Samochod[];
  public liczbaWszystkichWynikow = 3;
  public samochodyDoWypozyczeniaLabel = 'Samochody do wypożyczenia';
  public czyPokazacPrzycisk = true;

  constructor(private http: HttpClient,
              private router: Router,
              private samochodyService: SamochodyService) {
  }

  ngOnInit() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      alert("Nie jestes zalogowany");
      this.router.navigate(['/zaloguj']);
    }
    console.log("wysylam request po samochody");
    this.samochodyService.getSamochody()
      .subscribe(x => {
      this.samochody = x;
      this.liczbaWszystkichWynikow = x.length;
      console.log("liczba wszystkich wynikow to!!!!!!!!!!! " + this.liczbaWszystkichWynikow);
    });


    this.samochodyService.getSamochody(0, 2).subscribe(x => {
      console.log("odbieram samochody " + x.length);
      this.samochody = x;
      console.log("liczba wszystkich wynikow to " + this.liczbaWszystkichWynikow);
    });
  }

  odebranieEventuPaginacji(event) {
    console.log("pdebranieEventuPaginacji");
    var naglowki = new  HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': this.FRONT_URL
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
