import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-image-selector-modal',
  templateUrl: './image-selector-modal.component.html',
})
export class ImageSelectorModalComponent implements OnInit, OnChanges {
  @Input() pokemon: any;
  imgPokemon!: string;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.updatePokemonData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon']) {
      this.updatePokemonData();
      console.log(this.imgPokemon);
    }
  }

  updatePokemonData(): void {

    if (this.pokemon && this.pokemon.pokemonData && this.pokemon.pokemonData.sprites && this.pokemon.pokemonData.sprites.other && this.pokemon.pokemonData.sprites.other.dream_world && this.pokemon.pokemonData.sprites.other.dream_world.front_default) {
      this.imgPokemon = this.pokemon.pokemonData.sprites.other.home.front_default;
    }
  }

  selecionarImagem(imagem: string) {
    this.imgPokemon = imagem;
  }
}
