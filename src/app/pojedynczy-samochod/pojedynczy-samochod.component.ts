import {Component, OnInit} from '@angular/core';
import {SamochodyService} from '../samochody.service';
import {Samochod} from '../Samochod';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pojedynczy-samochod',
  templateUrl: './pojedynczy-samochod.component.html',
  styleUrls: ['./pojedynczy-samochod.component.css']
})
export class PojedynczySamochodComponent implements OnInit {

  public samochody: Observable<Samochod[]>;

  constructor(private samochodyService: SamochodyService) { }

  ngOnInit() {
    this.samochody = this.samochodyService.getSamochody();
  }

  wypozyczSamochod(samochod: Samochod) {
      samochod.czyWypozyczony = true;
  }

}
