import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: ["ngb-modal-window {position: fixed; top:0}"]
})
export class ModalComponent {
  @Input() pokemon: any;

  backgourndColor!: string;
  imgPokemon!: string


  constructor(private modalService: NgbModal, public pokemonService: PokemonService) { }

  selecionarImagem(imagem: string) {
    this.imgPokemon = imagem;
  }

  getColor(type: string): string {
    return this.pokemonService.getColorFromTypeName(type);
  }

  ngOnInit(): void {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0) {
      const typeName = this.pokemon.types[0].type.name;
      this.backgourndColor = this.pokemonService.getColorFromTypeName(typeName);
    }
    if (this.pokemon && this.pokemon.sprites && this.pokemon.sprites.other && this.pokemon.sprites.other.dream_world && this.pokemon.sprites.other.dream_world.front_default) {
      this.imgPokemon = this.pokemon.sprites.other.home.front_default;
    }
  }

  fecharModal(): void {
    this.modalService.dismissAll();
  }
}
