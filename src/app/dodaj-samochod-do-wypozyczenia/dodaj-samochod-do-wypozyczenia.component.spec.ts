import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DodajSamochodDoWypozyczeniaComponent} from './dodaj-samochod-do-wypozyczenia.component';

describe('DodajSamochodDoWypozyczeniaComponent', () => {
  let component: DodajSamochodDoWypozyczeniaComponent;
  let fixture: ComponentFixture<DodajSamochodDoWypozyczeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajSamochodDoWypozyczeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajSamochodDoWypozyczeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
