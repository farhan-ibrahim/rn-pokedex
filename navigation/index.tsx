import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Pokedex from '../screens/Pokedex';
import PokemonDetail from '../screens/PokemonDetail';
import { PokemonStackParamList } from './types';
import { Entypo , Feather } from '@expo/vector-icons';
import { PokemonContext } from '../contexts/PokemonContext';

const PokemonStack = createNativeStackNavigator<PokemonStackParamList>();



export default function Navigation(){
    return(
        <PokemonContext.Provider value={{setPokemons:() => {}, pokemons:[]}}>
            <NavigationContainer>
                <StatusBar style="auto" />
                <PokemonStack.Navigator initialRouteName='Pokedex' >
                    <PokemonStack.Screen 
                        name={"PokemonDetail"}
                        component={PokemonDetail}
                        options={({navigation , route }) => ({
                            title:route.params.pokemon.name.toLocaleUpperCase(),
                            headerTitleStyle:{color:"white"},
                            headerTransparent:true,
                            headerLeft:() => (
                                <Entypo 
                                    onPress={() => navigation.goBack()}
                                    name="chevron-left" 
                                    size={24} 
                                    color={"white"} 
                                />
                            ),
                            headerRight:() => (
                                <Feather 
                                    name="heart" 
                                    size={24} 
                                    color={ "white" }
                                />
                            )
                        })}
                    />
                    <PokemonStack.Screen 
                        name={"Pokedex"}
                        component={Pokedex}
                    />
                </PokemonStack.Navigator>
            </NavigationContainer>
        </PokemonContext.Provider>
    )
}