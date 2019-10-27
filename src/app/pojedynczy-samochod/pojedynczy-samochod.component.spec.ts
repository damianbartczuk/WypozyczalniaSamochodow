import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PojedynczySamochodComponent} from './pojedynczy-samochod.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ListaSamochodowComponent} from '../lista-samochodow/lista-samochodow.component';

fdescribe('PojedynczySamochodComponent', () => {
  let component: PojedynczySamochodComponent;
  let fixture: ComponentFixture<PojedynczySamochodComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ PojedynczySamochodComponent, ListaSamochodowComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(async (() => {
    fixture = TestBed.createComponent(PojedynczySamochodComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
