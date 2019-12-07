import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DodajUzytkownikaComponent} from './dodaj-uzytkownika.component';

describe('DodajUzytkownikaComponent', () => {
  let component: DodajUzytkownikaComponent;
  let fixture: ComponentFixture<DodajUzytkownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajUzytkownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajUzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
