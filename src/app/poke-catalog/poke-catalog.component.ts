import { OnInit, Component, Input } from "@angular/core";
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
  searchValue:string = "";

  @Input() set searchValueInput( value:string ) {
    console.log( "Input for search: " + value );
    this.searchValue = value;
  };

  constructor( private _pokeCatalogService:PokeCatalogService ) {

  }

  public ngOnInit() {
    this.pokemonList = this._pokeCatalogService.getPokemonList();
    console.log( this.pokemonList );
  }
}
