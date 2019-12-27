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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ZalogujComponent} from './zaloguj/zaloguj.component';
import {DodajUzytkownikaComponent} from './dodaj-uzytkownika/dodaj-uzytkownika.component';
import {StronaGlownaComponent} from './strona-glowna/strona-glowna.component';
import {JwtModule} from '@auth0/angular-jwt';
import {DefaultDataServiceConfig, EntityDataModule, EntityDataModuleConfig, EntityMetadataMap} from '@ngrx/data';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CookieService} from 'ngx-cookie-service';


const appRoutes: Routes = [
  { path: 'dodaj-samochod', component: DodajSamochodDoWypozyczeniaComponent },
  { path: 'zaloguj', component: ZalogujComponent },
  { path: 'dodaj_uzytkownika', component: DodajUzytkownikaComponent},
  { path: 'pobierz_samochody', component: ListaSamochodowComponent},
  { path: '', component: StronaGlownaComponent},
  { path: '**', redirectTo: '' }

];


const pluralNames = { Car: 'Samochod' };
export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: "http://localhost:9090",
  entityHttpResourceUrls: {
    Samochod: {
      entityResourceUrl: 'http://localhost:9090' + '/pobierz_samochody',
      collectionResourceUrl: 'http://localhost:9090' + '/pobierz_samochody'
    }
  }
}


export const entityMetadata: EntityMetadataMap = {
  Samochod: {},
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};

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
    JwtModule.forRoot({
      config: {
        throwNoTokenError: true
      }
    }),
    EntityDataModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    FormsModule,
],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
