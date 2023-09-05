import { PokemonService } from '../../../pokemon.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-modal',
  templateUrl: './stats-modal.component.html',
})
export class StatsModalComponent {
  @Input() pokemon: any;
  @Input() backgourndColor!: string;

  constructor(public pokemonService: PokemonService) { }

  getColor(type: string): string {
    return this.pokemonService.getColorFromTypeName(type);
  }

  atualizarDados(url: string) {
    console.log('entrou', url);
    this.pokemonService.getPokemonInfo(url).then((res: any) => {
      const evolutionChainUrl = res.data.evolution_chain.url;
      const pokemonUrl = res.data.varieties[0].pokemon.url;

      this.pokemonService.getPokemonInfo(evolutionChainUrl).then((res: any) => {
        this.pokemon.evolutionChainData = res.data;
      });

      this.pokemonService.getPokemonInfo(pokemonUrl).then((res: any) => {
        this.pokemon.pokemonData = res.data;
      });

    });
  }

  ngOnInit(): void {
    if (this.pokemon && this.pokemon.pokemonData.types && this.pokemon.pokemonData.types.length > 0) {
      const typeName = this.pokemon.pokemonData.types[0].type.name;
      this.backgourndColor = this.pokemonService.getColorFromTypeName(typeName);
    }
  }
}
