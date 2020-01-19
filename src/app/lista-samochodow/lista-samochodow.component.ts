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
  public liczbaWszystkichWynikow = 5;
  public samochodyDoWypozyczeniaLabel = 'Samochody do wypożyczenia';
  public czyPokazacPrzycisk = true;
  private samochodyNotFound = 'Nie znaleziono samochodow';

  constructor(private http: HttpClient,
              private router: Router,
              private samochodyService: SamochodyService) {
  }

  ngOnInit() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      alert("Nie jestes zalogowany");
      this.router.navigate(['/zaloguj']);
    }

    this.samochodyService.getSamochody()
      .subscribe(x => {
      this.samochody = x;
      this.liczbaWszystkichWynikow = x.length;
    });
  }

  odebranieEventuPaginacji(event) {
    var naglowki = new  HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': this.FRONT_URL
    });
    this.http.get<Samochod[]>(this.CAR_API_POBIERZ_SAMOCHODY_URL + '?pageNumber=' + (event-1)+ '&token='+ localStorage.getItem('token'), {headers: naglowki})
      .subscribe(x => {
        this.samochody = x;
      });
  }
}
