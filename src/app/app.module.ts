import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedModule} from "./shared/shared.module";

//Configuracion del locale de la app
import localeEs from '@angular/common/locales/es';
import localeIt from '@angular/common/locales/it';

import { registerLocaleData } from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

registerLocaleData(localeEs);
registerLocaleData(localeIt);

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
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
