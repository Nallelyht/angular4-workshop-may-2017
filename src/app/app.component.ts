import { Component } from '@angular/core';
import { SearchValue } from './poke-navigation/search-value.model';

@Component( {
  selector: 'my-app',
  template: `
    <poke-navigation (searchValueUpdated)="searchValueUpdated($event)"></poke-navigation>
    <poke-catalog [searchValueInput]="parentSearchValue"></poke-catalog>
    `,
} )
export class AppComponent {
  parentSearchValue:string = "";

  searchValueUpdated( event:SearchValue ) {
    console.log( "Value received in parent component:", event.valueFromSearchComponent );
    this.parentSearchValue = event.valueFromSearchComponent;
  }
}
