import { Component } from '@angular/core';
import { SearchValue } from './poke-navigation/search-value.model';

@Component({
@Component( {
  selector: 'my-app',
  template: `
    <poke-navigation></poke-navigation>
    <poke-catalog></poke-catalog>
    <poke-navigation (searchValueUpdated)="searchValueUpdated($event)"></poke-navigation>
    `,
})
export class AppComponent  {  }
} )
export class AppComponent {
  parentSearchValue:string = "";

  searchValueUpdated( event:SearchValue ) {
    console.log( "Value received in parent component:", event.valueFromSearchComponent );
    this.parentSearchValue = event.valueFromSearchComponent;
  }
}
