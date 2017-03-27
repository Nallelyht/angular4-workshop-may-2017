import { Component, OnInit } from "@angular/core";

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

  ngOnInit() {

  }
}
