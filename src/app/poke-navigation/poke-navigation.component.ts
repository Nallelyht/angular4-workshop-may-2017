import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SearchValue } from "./search-value.model";


@Component( {
  selector: "poke-navigation",
  templateUrl: "app/poke-navigation/poke-navigation.component.html",
  styles: [
    `
      .navbar-default .navbar-nav > .active >a {
         margin-top: 0;
      }
    `
  ]
} )
export class PokeNavigationComponent implements OnInit {
  searchValue:string = "";
  @Output() searchValueUpdated = new EventEmitter();

  ngOnInit() {

  }

  search( event:Event ) {
    event.preventDefault();
    console.warn( "Value to search in child component:", this.searchValue );

    let searchValue:SearchValue = {
      valueFromSearchComponent: this.searchValue
    };
    this.searchValueUpdated.emit( searchValue );

  }

  onKeyUp( event:Event ) {
    this.search( event );
  }
}
