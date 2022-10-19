import React, { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { 
  StyleSheet, 
  View , 
  SafeAreaView, 
  useWindowDimensions,
} from 'react-native';
import Text from "../components/Text";
import { getData, Pokemon } from '../api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokemonStackParamList } from '../navigation/types';
import { PokemonContext, reducer } from '../contexts/PokemonContext';
import Animated, { createAnimatedPropAdapter, Easing, useAnimatedStyle, withDelay, withTiming } from 'react-native-reanimated';
import Tile from '../components/Tile';

type Props = NativeStackScreenProps<PokemonStackParamList, 'Pokedex'>;


const Pokedex = (props:Props) => {
  const WIDTH = useWindowDimensions().width;
  const [state , dispatch] = useReducer(reducer, []);
  const { pokemons } = useContext(PokemonContext);


  const getPokemonList = async () => {
    const res = await getData();
    if(res?.status === 200){
      dispatch(res.data)
    }
  }

  useEffect(() => {
    getPokemonList();
  },[])

  const renderItem = ({item , index}:{item:Pokemon , index:number}) => (
    <View style={{width:WIDTH, backgroundColor:"cyan", alignItems:"center",justifyContent:"center", padding:10, height:"80%"}}>
      <Text bold color={"gray"} >{item.name.toUpperCase()}</Text>
          <Animated.Image 
            source={{uri:item.image[0]}}
            style={{
              width:200,
              height:200,
             
            }}
  
          />
          <View style={styles.typeContainer}>
          {item.types.map((type , index) => (
            <View style={styles.type} key={index.toString()}>
              <Text color="white" >{type.type.name}</Text>
            </View>
          ))}
          </View>
    </View>
    // <Tile 
    //   item={item}
    //   index={index}
    //   navigation={props.navigation}
    // />
  )

  const scrollX = useRef(new Animated.Value(0)).current;
  
    return(

      <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
      <Animated.FlatList 
          horizontal
          data={state}
          // numColumns={2}
          contentContainerStyle={styles.list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: {
            contentOffset: {
              x: scrollX
            }
          }
        }])}
      />
      <Animated.View style={{flexDirection:"row", alignItems:"center", backgroundColor:"cyan", justifyContent:"center", paddingVertical:20}}>
        {state.map((item, index) => {
          return(
            <Animated.View 
              style={{width:scrollX.interpolate({
                inputRange:[
                  WIDTH * (index - 2),
                  WIDTH * index,
                  WIDTH * (index + 2)
                ],
                outputRange:[
                  10,
                  20,
                  10
                ]
              }), 
                height:scrollX.interpolate({
                  inputRange:[
                    WIDTH * (index - 2),
                    WIDTH * index,
                    WIDTH * (index + 2)
                  ],
                  outputRange:[
                    10,
                    20,
                    10
                  ]
                }), borderRadius:8, backgroundColor:"darkgray", margin:2}}
            />
          )
        })}
      </Animated.View>
      
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