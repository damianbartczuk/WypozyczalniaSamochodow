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


const appRoutes: Routes = [
  { path: 'dodaj-samochod', component: DodajSamochodDoWypozyczeniaComponent },
  { path: 'zaloguj', component: ZalogujComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PojedynczySamochodComponent,
    ListaSamochodowComponent,
    HeaderComponent,
    DodajSamochodDoWypozyczeniaComponent,
    ZalogujComponent
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
    BrowserAnimationsModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
