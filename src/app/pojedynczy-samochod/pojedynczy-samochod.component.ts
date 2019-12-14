import {Component, OnInit} from '@angular/core';
import {Samochod} from '../Samochod';
import {Observable} from 'rxjs';
import {CarDataService} from '../serwisy/car-data.service';

@Component({
  selector: 'app-pojedynczy-samochod',
  templateUrl: './pojedynczy-samochod.component.html',
  styleUrls: ['./pojedynczy-samochod.component.css']
})
export class PojedynczySamochodComponent implements OnInit {

  public samochody: Observable<Samochod[]>;

  constructor(private cds: CarDataService) {
  }

  ngOnInit() {
    this.samochody = this.cds.getAll();
  }

  wypozyczSamochod(samochod: Samochod) {
      samochod.czyWypozyczony = true;
  }

}
