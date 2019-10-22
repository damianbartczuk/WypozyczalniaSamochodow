import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PojedynczySamochodComponent} from './pojedynczy-samochod/pojedynczy-samochod.component';

@NgModule({
  declarations: [
    AppComponent,
    PojedynczySamochodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
