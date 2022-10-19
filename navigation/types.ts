import { Pokemon } from "../api";

export type PokemonStackParamList = {
    Detail:undefined;
    Pokedex:undefined;
    PokemonDetail:{
        pokemon:Pokemon;
        id?:number
    }
}

export type TabParamList = {
    About:{
        abilities:any[]
    };
    Abilities:undefined;
    Stats:undefined;
    Moves:undefined;
}