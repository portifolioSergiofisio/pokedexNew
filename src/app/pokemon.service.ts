import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() { }
  getAllPokemon(offset: number) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=${offset}`);
  }
  getPokemonInfo(url: string) {

    return axios.get(url)
  }

  getColorFromTypeName(typeName: string): string {
    console.log(typeName);


    switch (typeName) {
      case 'grass':
        return '#74CB48';
      case 'fire':
        return '#F57D31';
      case 'water':
      case 'ice':
        return '#6493EB';
      case 'bug':
        return '#A7B723'
      case 'poison':
        return 'purple';
      case 'electric':
        return '#F9CF30';
      case 'psychic':
        return '#FB5584';
      case 'dark':
      case 'shadow':
      case 'ghost':
        return '#70559B';
      case 'fairy':
        return '#FB5584';
      case 'steel':
        return '#B7B9D0'
      default:
        return '#AAA67F';
    }
  }
}
