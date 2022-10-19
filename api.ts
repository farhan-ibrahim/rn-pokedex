
interface Stats{
    base_stat:number;
    effort:number;
    stat:{
        name:string;
        url:string;
    }
}
export interface Pokemon {
    id:number;
    name:string;
    types:any[];
    image:string;
    color:string;
    abilities:[];
    moves:any;
    stats:Stats[];
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

                    const getBackgroundColor = (type:string) => {
                        if(!type){
                            return "white"
                        }
                        switch(type){
                            case "grass" : return "#6ED0AF";
                            case "fire" : return "#E8686D";
                            case "water" : return "blue"
                            default : return "purple"
                        }
                    }

                    const obj =  {
                        id:url.split("/")[6],
                        name:data.species.name,
                        types:data.types,
                        image:[
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny,
                        ],
                        color:getBackgroundColor(data.types[0].type.name),
                        abilities:data.abilities,
                        moves:data.moves,
                        stats:data.stats
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

