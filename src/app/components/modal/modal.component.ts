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

  constructor(private modalService: NgbModal, public pokemonService: PokemonService) { }

  getColor(type: string): string {
    return this.pokemonService.getColorFromTypeName(type);
  }

  ngOnInit(): void {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0) {
      const typeName = this.pokemon.types[0].type.name;
      this.backgourndColor = this.pokemonService.getColorFromTypeName(typeName);
    }
  }

  fecharModal(): void {
    this.modalService.dismissAll();
  }
}
