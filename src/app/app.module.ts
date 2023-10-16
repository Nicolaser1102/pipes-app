import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localeEsEC from "@angular/common/locales/es-EC";
import localefrCA from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";
//? llamar la función para que estableza de forma local los idiomas que queremos utilizar en la aplicación (se combina con lo de arriba)
registerLocaleData(localeEsEC);
registerLocaleData(localefrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      //Cambiar idioma de forma global
      provide:LOCALE_ID, useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
