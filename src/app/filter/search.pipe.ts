import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(value: any[], searchText: any[]): any[] {
    if (!value) {
      return []
    }

    if (!searchText) {
      return value
    }

    searchText = searchText

    return value.filter(item=>{
      if (typeof item.name === 'string') {
        return item.name.toLowerCase().includes(searchText)
      }
      return false
    })
  }

}
