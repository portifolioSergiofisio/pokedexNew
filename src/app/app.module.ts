import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { ImageSelectorModalComponent } from './components/modal/image-selector-modal/image-selector-modal.component';
import { AboutModalComponent } from './components/modal/about-modal/about-modal.component';
import { StatsModalComponent } from './components/modal/stats-modal/stats-modal.component';
import { ModalHeaderComponent } from './components/modal/header-modal/header-modal.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent, PokemonComponent, HomeComponent, ModalComponent, ImageSelectorModalComponent, AboutModalComponent, StatsModalComponent, ModalHeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
