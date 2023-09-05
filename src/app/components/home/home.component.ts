import { PokemonService } from './../../pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public pokemons!: Array<any>;
  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.PokemonService.getAllPokemon(0)
      .then((res: any) => {

        this.pokemons = res.data.results;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
