import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PojedynczySamochodComponent} from './pojedynczy-samochod/pojedynczy-samochod.component';
import {ListaSamochodowComponent} from './lista-samochodow/lista-samochodow.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PojedynczySamochodComponent,
    ListaSamochodowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
