

export interface Pokemon {
    name:string;
    types:any[];
    image:string;
    color:string;
}

interface APIResponse {
    status?:number;
    data?:any[];
    message?:string;
    error?:string;

}

const getPokemonList = async () => {
    try{
        return fetch("https://pokeapi.co/api/v2/pokemon")
            .then((res) => res.json())
                .then((data) => {
                    return data.results;    
                });
    }catch(e){
        console.error(e)
    }
}

const getPokemonColor = async (name:string) => {
    try{
        return fetch(`https://pokeapi.co/api/v2/pokemon-color/${name}/`)
            .then((res) => res.json())
                .then((data) => {
                    return data.name;    
                });
    }catch(e){
        console.error(e)
    }
}

const getPokemonData = async (url:string) => {
   
    try{
        return fetch(url)
            .then((res) => res.json())
                .then( (data) => {

                    const obj =  {
                        name:data.species.name,
                        types:data.types,
                        image:data.sprites.front_default,
                    }

                    return obj
                });
    }catch(e){
        console.error(e)
    }
}


export const getData = async () => {
    let res:APIResponse = {};

    try{
        const pokemons =  await getPokemonList();
        if(pokemons.length > 0){

            const promises = pokemons.map(async (pokemon:any ,index:number) => {
                const pokemonData = await getPokemonData(pokemon.url);

                if(!pokemonData){
                    return
                }

                return pokemonData;
            })

            return Promise.all(promises).then((data) => {
                return res =  {
                    status:200,
                    data
                }
            })
        }
    }catch(e){
        console.error(e)
    }  
}

