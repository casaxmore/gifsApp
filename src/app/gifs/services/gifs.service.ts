import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
    /* if( localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    } */
    /* localStorage.getItem('resultado');
    localStorage.getItem('historial'); */
  }

  private apiKey: string = 'lCUdjMUSNNUBPPFA4hrj03hrscHqtSu9';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    /* return this._historial; */
    return [...this._historial];
  }

  buscarGifs(query: string) {
    /* async buscarGifs(query: string) { */
    // Valor siempre en minísculas
    query = query.trim().toLocaleLowerCase();

    // Condición para sólo pintar las busquedas que no existen
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      // Para que pinta un máximo de 10 busquedas
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // Llamando API

    // 1ª Forma (Promise)
    /* fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=lCUdjMUSNNUBPPFA4hrj03hrscHqtSu9&q=freddy krueger&limit=10'
    ).then((resp) => {
      resp.json().then((data) => {
        console.log(data);
      });
    }); */

    // 2ª Forma
    /* const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=lCUdjMUSNNUBPPFA4hrj03hrscHqtSu9&q=freddy krueger&limit=10');
    const data = await resp.json();
    console.log(data); */

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '30')
          .set('q', query);
    console.log(params);

    // 3ª Forma y la mejor ahora mismo (Observable)
    this.http
      .get<SearchGifsResponse>(
        `${this.servicioUrl}/search`, { params } )
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      });
  }

  deleteLocalStorage() {
    localStorage.clear();
    this._historial = [];
  }
}
