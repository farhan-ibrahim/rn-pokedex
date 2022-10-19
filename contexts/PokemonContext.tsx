import { createContext } from "react";
import { Pokemon } from "../api";

export const reducer = (state:any[] , payload:Pokemon[]) => {
    // console.log("paylaod" ,payload)
    return payload
}

export const PokemonContext = createContext({
    pokemons:[],
    setPokemons:(data:Pokemon[]) => {}
})