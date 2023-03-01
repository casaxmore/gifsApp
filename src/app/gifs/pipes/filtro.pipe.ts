import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(resultados: any, page: number = 0, search:string = ''): any {

    if(search.length === 0){
      return resultados.slice(page, page + 5);
    }

    const filteredGifs = resultados.filter( (gif: any) => gif.includes(search));
    return filteredGifs.slice(page, page + 5);

  }

}
