import { OnInit, Component } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { PokeCatalogService } from "./poke-catalog.service";

@Component( {
  selector: "poke-catalog",
  providers: [ PokeCatalogService ],
  templateUrl: "app/poke-catalog/poke-catalog.component.html",
  styleUrls: [ "app/poke-catalog/poke-catalog.component.css" ]
} )
export class PokeCatalogComponent implements OnInit {
  pokemonList:Array<Pokemon> = [];

  constructor( private _pokeCatalogService:PokeCatalogService ) {

  }

  public ngOnInit() {
    this.pokemonList = this._pokeCatalogService.getPokemonList();
    console.log( this.pokemonList );
  }
}
