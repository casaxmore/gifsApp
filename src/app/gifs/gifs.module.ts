import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from "@angular/cdk/scrolling";

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports: [
    GifsPageComponent,
  ]
})
export class GifsModule { }
