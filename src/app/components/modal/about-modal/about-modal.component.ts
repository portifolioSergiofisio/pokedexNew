import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
})
export class AboutModalComponent {
  @Input() pokemon: any;
  @Input() backgourndColor!: string;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {

    if (this.pokemon && this.pokemon.pokemonData.types && this.pokemon.pokemonData.types.length > 0) {
      const typeName = this.pokemon.pokemonData.types[0].type.name;
      this.backgourndColor = this.pokemonService.getColorFromTypeName(typeName);
    }
  }

}
