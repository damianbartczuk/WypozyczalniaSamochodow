import {Component, OnInit} from '@angular/core';
import {UzytkownikService} from '../serwisy/uzytkownik.service';
import {ActivatedRoute} from '@angular/router';
import {Samochod} from '../modele/Samochod';
import {SamochodyService} from '../serwisy/samochody.service';
import {SamochodDto} from '../modele/SamochodDto';

@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.component.html',
  styleUrls: ['./strona-glowna.component.css']
})
export class StronaGlownaComponent implements OnInit {

  public imieUzytkownikaZalogowanego;
  public nazwiskoUzytkownikaZalogowanego;
  public samochody: Samochod[];
  public samochodyDto: SamochodDto[];
  public czyPokazacPrzycisk = false;
  idUzytkownikaZalogowanego: number;
  iloscPobranychSamochodow;
  constructor(private uzytkownikService: UzytkownikService,
              private samochodService: SamochodyService,
              private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(p => {
      this.idUzytkownikaZalogowanego = +p['id'];
      this.imieUzytkownikaZalogowanego = p['imie'];
      this.nazwiskoUzytkownikaZalogowanego = p['nazwisko']
    },
      error => console.log(error),
      () => console.log('skonczylem pobierac parametry')
    );

    // console.log(this.tablicaParametrow[0]);
    if(this.idUzytkownikaZalogowanego != undefined){
      this.samochodService.getWypozyczoneSamochodyDLaId(this.idUzytkownikaZalogowanego)
        .subscribe(x => {
            this.iloscPobranychSamochodow = x.length;
            // this.samochody = x;
          this.samochodyDto = x;
          },
          error => console.log(error),
          () => this.samochodyDto);
    }
  }
}
