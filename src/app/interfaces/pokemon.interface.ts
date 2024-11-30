import { PokemonSprites } from "./pokemon_sprites.interface";

export interface Pokemon {
    id: number;
    name: string;
    url: string;
    weight: number;
    height: number;
    sprites: PokemonSprites;
  }