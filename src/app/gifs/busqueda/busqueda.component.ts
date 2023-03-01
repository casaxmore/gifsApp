import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  vButton: boolean = true;

  constructor( private gifsService: GifsService ){}

  buscar(){
    this.vButton = true;
    const valor = this.txtBuscar.nativeElement.value;

    // Condición para no pintar espacios en blanco
    if ( valor.trim().length === 0){
      return;
    }


    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }

  validatorButton() {
    this.vButton = false;
  }

}
