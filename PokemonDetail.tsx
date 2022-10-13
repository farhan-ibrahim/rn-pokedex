import React, { useContext, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View , 
  Image , 
  SafeAreaView, 
  FlatList, 
  useWindowDimensions,
  Dimensions
} from 'react-native';
import { Pokemon } from './api';
import { LinearGradient } from 'expo-linear-gradient';

import Text from "./Text";

interface Props {
    pokemon:Pokemon
}

const WIDTH =  Dimensions.get("window").width;
const HEIGHT =  Dimensions.get("window").height;

const PokemonDetail = (props) => {
    const pokemon =  props.route.params.pokemon

    const getBackgroundColor = (type:string) => {
        if(!type){
            return "white"
        }
        switch(type){
            case "grass" : return "#6ED0AF";
            case "fire" : return "#E8686D";
            case "water" : return "blue"
            default : return "white"
        }


    }

    return(
        <View style={[styles.container, {
            backgroundColor:"white"
        }]}>
            <Text>Pokemon</Text>
            <LinearGradient 
                colors={[getBackgroundColor(pokemon?.types[0].type.name), 'yellow']}
                style={styles.background}
            >
                <Image 
                    source={{uri:pokemon.image}}
                    style={{
                        width:200,
                        height:HEIGHT*.5
                    }}
                
                />

            </LinearGradient>
            
           
            <Text>{pokemon.name}</Text>
            <View style={{flexDirection:"row"}}>

          
            {pokemon.types.map((type) => (
                <View 
                    style={{backgroundColor:"green" , padding:20}}
                    key={type.slot}
                >
                    <Text color='white'>{type.type.name}</Text>
                </View>
            ))}
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        

    },
    background:{
        // flex:1,
        width:"100%",
        alignItems:"center",
    }
})

export default PokemonDetail