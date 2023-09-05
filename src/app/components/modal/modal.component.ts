import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: ["ngb-modal-window {position: fixed; top:0}"]
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() pokemon: any;

  backgourndColor!: string;
  imgPokemon!: string;

  constructor(public modalService: NgbModal, public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.updatePokemonData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon']) {
      this.updatePokemonData();
    }
  }

  updatePokemonData(): void {
    if (this.pokemon && this.pokemon.pokemonData && this.pokemon.pokemonData.types && this.pokemon.pokemonData.types.length > 0) {
      const typeName = this.pokemon.pokemonData.types[0].type.name;
      this.backgourndColor = this.pokemonService.getColorFromTypeName(typeName);
    }

    if (this.pokemon && this.pokemon.pokemonData && this.pokemon.pokemonData.sprites && this.pokemon.pokemonData.sprites.other && this.pokemon.pokemonData.sprites.other.dream_world && this.pokemon.pokemonData.sprites.other.dream_world.front_default) {
      this.imgPokemon = this.pokemon.pokemonData.sprites.other.home.front_default;
    }
  }

  selecionarImagem(imagem: string) {
    this.imgPokemon = imagem;
  }

  getColor(type: string): string {
    return this.pokemonService.getColorFromTypeName(type);
  }

  fecharModal(): void {
    this.modalService.dismissAll();
  }
}
