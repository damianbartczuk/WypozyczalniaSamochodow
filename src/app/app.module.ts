import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PojedynczySamochodComponent} from './pojedynczy-samochod/pojedynczy-samochod.component';
import {ListaSamochodowComponent} from './lista-samochodow/lista-samochodow.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {DodajSamochodDoWypozyczeniaComponent} from './dodaj-samochod-do-wypozyczenia/dodaj-samochod-do-wypozyczenia.component';
import {RouterModule, Routes} from '@angular/router';
import {MatChipsModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
// import {MatFileUploadModule} from 'angular-material-fileupload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ZalogujComponent} from './zaloguj/zaloguj.component';
import {DodajUzytkownikaComponent} from './dodaj-uzytkownika/dodaj-uzytkownika.component';
import {StronaGlownaComponent} from './strona-glowna/strona-glowna.component';
import {JwtModule} from '@auth0/angular-jwt';
import {CookieService} from 'ngx-cookie-service';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import {PaginacjaComponent} from './paginacja/paginacja.component';
import {WylogujComponent} from './wyloguj/wyloguj.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';

const appRoutes: Routes = [
  { path: 'dodaj-samochod', component: DodajSamochodDoWypozyczeniaComponent },
  { path: 'zaloguj', component: ZalogujComponent },
  { path: 'dodaj_uzytkownika', component: DodajUzytkownikaComponent},
  { path: 'pobierz_samochody', component: ListaSamochodowComponent},
  { path: 'wyloguj', component: WylogujComponent},
  { path: 'strona_glowna/:id/:imie/:nazwisko', component: StronaGlownaComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [
    AppComponent,
    PojedynczySamochodComponent,
    ListaSamochodowComponent,
    HeaderComponent,
    DodajSamochodDoWypozyczeniaComponent,
    ZalogujComponent,
    DodajUzytkownikaComponent,
    StronaGlownaComponent,
    PaginacjaComponent,
    WylogujComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatChipsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        throwNoTokenError: true
      }
    }),
    FormsModule,
    NgxLocalStorageModule

],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
