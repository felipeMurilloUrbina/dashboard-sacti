import { ContenidoComponent } from './contenido/contenido.component';
import { MenuComponent } from './menu/menu.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { EstructuraComponent } from './estructura/estructura.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PiePaginaComponent } from './pie-pagina';


@NgModule({
  declarations: [
    ContenidoComponent,
    EstructuraComponent,
    EncabezadoComponent,
    MenuComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class EstructuraModule { }
