import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PojedynczySamochodComponent} from './pojedynczy-samochod.component';

describe('PojedynczySamochodComponent', () => {
  let component: PojedynczySamochodComponent;
  let fixture: ComponentFixture<PojedynczySamochodComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ PojedynczySamochodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PojedynczySamochodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
