import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from './../../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component'; // Importe o componente do modal aqui

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  public pokemon!: any;

  @Input()
  namePokemon: string = "";

  @Input()
  url: string = "";

  constructor(private modalService: NgbModal, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonInfo(this.url).then((res: any) => {
      this.pokemon = res.data;
    });
  }

  abrirModal(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.pokemon = this.pokemon;
    window.scrollTo(100, 0);
  }

}
