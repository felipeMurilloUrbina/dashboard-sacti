import { EstructuraModule } from './estructura-pagina/estructura.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EstructuraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
