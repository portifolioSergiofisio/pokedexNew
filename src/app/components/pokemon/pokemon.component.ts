import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from './../../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

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

  constructor(private modalService: NgbModal, public pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemonInfo(this.url).then((res: any) => {
      this.pokemonService.getPokemonInfo(res.data.chain.species.url).then((res: any) => {
        this.pokemon = {
          pokemonData: null,
          evolutionChainData: null
        };

        const evolutionChainUrl = res.data.evolution_chain.url;
        const pokemonUrl = res.data.varieties[0].pokemon.url;

        this.pokemonService.getPokemonInfo(evolutionChainUrl).then((res: any) => {
          this.pokemon.evolutionChainData = res.data;
        });

        this.pokemonService.getPokemonInfo(pokemonUrl).then((res: any) => {
          this.pokemon.pokemonData = res.data;
        });
      });
    });
  }

  abrirModal(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.pokemon = this.pokemon;
    window.scrollTo(100, 0);
  }

}
