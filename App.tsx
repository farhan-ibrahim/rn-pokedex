import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View , 
  Image , 
  SafeAreaView, 
  FlatList, 
  useWindowDimensions
} from 'react-native';
import Text from "./Text";
import { PRIMARY } from './Colors';
import { Feather } from '@expo/vector-icons';
import { getData, Pokemon } from './api';
import PokemonDetail from './PokemonDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from './Pokedex';

const PokemonStack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <PokemonStack.Navigator
        initialRouteName='Pokedex'
      >
      

        <PokemonStack.Screen 
          name={"PokemonDetail"}
          component={PokemonDetail}
        />
        <PokemonStack.Screen 
          name={"Pokedex"}
          component={Pokedex}
        />
      </PokemonStack.Navigator>


    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // padding:20,
  },
  list:{
    paddingVertical:10,
    marginBottom:10,
    alignItems:"center"
  },

  item:{
    height:150,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"cyan",
    padding:16,
    margin:5,
  },
  typeContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
  },
  type:{
    backgroundColor:"red",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:8
  }


});
