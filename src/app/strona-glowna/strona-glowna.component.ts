import {Component, OnInit} from '@angular/core';
import {UzytkownikService} from '../serwisy/uzytkownik.service';
import {ActivatedRoute} from '@angular/router';
import {Samochod} from '../modele/Samochod';
import {SamochodyService} from '../serwisy/samochody.service';

@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.component.html',
  styleUrls: ['./strona-glowna.component.css']
})
export class StronaGlownaComponent implements OnInit {

  public imieUzytkownikaZalogowanego;
  public nazwiskoUzytkownikaZalogowanego;
  public samochody: Samochod[];
  public czyPokazacPrzycisk = false;
  private idUzytkownikaZalogowanego: number;
  private iloscPobranychSamochodow;
  private tablicaParametrow = [];
  constructor(private uzytkownikService: UzytkownikService,
              private samochodService: SamochodyService,
              private router: ActivatedRoute) {

  }



  ngOnInit() {
    this.router.params.subscribe(p => {
      this.idUzytkownikaZalogowanego = +p['id'];
      this.imieUzytkownikaZalogowanego = p['imie'];
      this.nazwiskoUzytkownikaZalogowanego = p['nazwisko']
    },
      error => console.log(error),
      () => console.log('skonczylem pobierac parametry')
    );

    console.log(this.tablicaParametrow[0]);
    if(this.idUzytkownikaZalogowanego != undefined){
      this.samochodService.getWypozyczoneSamochodyDLaId(this.idUzytkownikaZalogowanego)
        .subscribe(x => {
            this.iloscPobranychSamochodow = x.length;
            this.samochody = x;
          },
          error => console.log(error),
          () => this.samochody);
    }
  }
}
