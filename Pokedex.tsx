import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View , 
  Image , 
  SafeAreaView, 
  FlatList, 
  useWindowDimensions,
  Pressable
} from 'react-native';
import Text from "./Text";
import { PRIMARY } from './Colors';
import { Feather } from '@expo/vector-icons';
import { getData, Pokemon } from './api';

const Pokedex = (props) => {

    const WIDTH = useWindowDimensions().width;
  const [ pokemons , setPokemons ] = useState<Pokemon[]>([]);


  const getPokemonList = async () => {
    const res = await getData();
    if(res?.status === 200){
      setPokemons(res.data)
    }
  }

  useEffect(() => {
    getPokemonList();
  },[])

  const renderItem = ({item , index}:{item:Pokemon , index:number}) => {
    const onPress = () => {
        props.navigation.navigate("Pokemons",{
            pokemon:item
        })
    }

    return(
      <Pressable 
        onPress={onPress}
        style={[styles.item , {width:WIDTH * .4}]}
    >
        <Text bold color={"gray"} >{item.name.toUpperCase()}</Text>
        <Image 
          source={{uri:item.image}}
          style={{
            width:100,
            height:100
          }}
        />
        <View style={styles.typeContainer}>
        {item.types.map((type) => (
          <View style={styles.type}>
            <Text color="white" >{type.type.name}</Text>
          </View>
        ))}
        </View>
        
      </Pressable>
    )
  }

    return(

      <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
      <Text>Pokedex</Text>
      <FlatList 
          data={pokemons}
          numColumns={2}
          contentContainerStyle={styles.list}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
      />
      
      </View>
      </SafeAreaView>
    )
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

export default Pokedex