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
import {MatFileUploadModule} from 'angular-material-fileupload';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ZalogujComponent} from './zaloguj/zaloguj.component';
import {DodajUzytkownikaComponent} from './dodaj-uzytkownika/dodaj-uzytkownika.component';
import {StronaGlownaComponent} from './strona-glowna/strona-glowna.component';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthGuardService} from '../serwisy/auth-guard.service';
import {RoleGuardService} from '../role-guard.service';


const appRoutes: Routes = [
  { path: 'dodaj-samochod',
    component: DodajSamochodDoWypozyczeniaComponent,
    canActivate: [RoleGuardService],
    data: {
    expectedRole: 'admin'
    }
    },
  { path: 'zaloguj', component: ZalogujComponent },
  { path: 'dodaj_uzytkownika', component: DodajUzytkownikaComponent, canActivate: [AuthGuardService]},
  { path: 'pobierz_samochody', component: ListaSamochodowComponent, canActivate: [AuthGuardService]},
  {path: '', component: StronaGlownaComponent},
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatFileUploadModule,
    ReactiveFormsModule,
    MatChipsModule,
    BrowserAnimationsModule,
    JwtModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
