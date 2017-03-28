import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PokeNavigationComponent } from './poke-navigation/poke-navigation.component';
import { PokeCatalogComponent } from './poke-catalog/poke-catalog.component';
import { ExternalImageURLPipe } from "./pipes/external-image-url.pipe";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PokeNavigationComponent, PokeCatalogComponent, ExternalImageURLPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
