import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { Pokemon } from "./pokemon.model";

@Injectable()
export class PokeCatalogService {
  pokemonListObject:any = { "count": 811, "previous": null, "results": [ { "url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/", "name": "bulbasaur" }, { "url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/", "name": "ivysaur" } ], "next": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/?limit=2&offset=2" };

  constructor() {

  }

  getPokemonList():Pokemon[] {
    return this.pokemonListObject.results;
  }

}
