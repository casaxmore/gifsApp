import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  public search: string = '';
  public page: number = 0;

  get resultados() {
    return this.gifsService.resultados;
  }

  constructor( private gifsService: GifsService ){}

  nextPage() {
    this.page += 5
    console.log('Paginas: ', this.page);
  }

  prevPage() {
    if( this.page > 0){
      this.page -= 5
    }
  }

}
