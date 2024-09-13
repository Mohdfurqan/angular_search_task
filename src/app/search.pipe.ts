import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(name: string[], searchInput: string): any[] {
    if (!searchInput) {
      return name;
    }
    searchInput = searchInput.toLowerCase();
    console.log(searchInput)
    return name.filter( (x: any) => {
      return x.name.toLowerCase().includes(searchInput) || x.country.toLowerCase().includes(searchInput) 
         }
     )
  }

}
