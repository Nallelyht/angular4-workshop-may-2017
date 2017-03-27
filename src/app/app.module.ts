import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PokeNavigationComponent } from './poke-navigation/poke-navigation.component';
import { PokeCatalogComponent } from './poke-catalog/poke-catalog.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PokeNavigationComponent, PokeCatalogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
