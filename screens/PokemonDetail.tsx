import React, { useContext, useEffect } from 'react';
import { 
  StyleSheet, 
  View , 
  Image , 
  Dimensions,
  Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Text from "../components/Text";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokemonStackParamList, TabParamList } from '../navigation/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Abilities from './Abilities';
import About from './About';
import Stats from './Stats';
import Moves from './Moves';
import TopTab from '../components/TabBar';
import { PokemonContext } from '../contexts/PokemonContext';

const WIDTH =  Dimensions.get("window").width;
const HEIGHT =  Dimensions.get("window").height;

type Props = NativeStackScreenProps<PokemonStackParamList, 'PokemonDetail'>;

const Tab = createMaterialTopTabNavigator<TabParamList>();


const PokemonDetail = ({route , navigation }:Props) => {
    const pokemon = route.params.pokemon;   

    const data = useContext(PokemonContext)

    // console.log("context" , data.pokemons)

    const scale =  new Animated.Value(1);

    useEffect(() =>{
        Animated.timing(scale,{
            toValue:1.5,
            delay:500,
            duration:500,
            useNativeDriver:true
        }).start()
    },[])

    return(
        <View style={styles.container}>
            <LinearGradient 
                colors={[pokemon.color, 'white']}
                style={[styles.background, {
                    paddingTop:useSafeAreaInsets().top + 50
                }]}
            >
                
                <View style={{flexDirection:"row"}}>
                    {pokemon.types.map((type:any) => (
                        <View 
                            style={{backgroundColor:"transparent" , padding:8 , borderColor:pokemon.color, borderWidth:2 , borderRadius:8}}
                            key={type.slot}
                        >
                            <Text color='white'>{type.type.name}</Text>
                        </View>
                    ))}
                </View>
                <Animated.Image 
                    source={{uri:pokemon.image[0]}}
                    style={{
                        width:"100%",
                        height:HEIGHT*.4,
                        transform:[{scale}]
                    }}
                
                />
            </LinearGradient>
            <Tab.Navigator tabBar={props => <TopTab {...props} />} >
            <Tab.Screen name="About"  >
                    {() => (<About  />)}
                </Tab.Screen>
                    
                <Tab.Screen name="Abilities" >
                    {(props) => (<Abilities abilities={pokemon.abilities} {...props} />)}
                </Tab.Screen>

                <Tab.Screen name="Stats" >
                    {(props) => (<Stats stats={pokemon.stats} {...props} />)}
                </Tab.Screen>
               
                <Tab.Screen name="Moves" component={Moves} />
            </Tab.Navigator>
           
            <Text>{pokemon.name}</Text>
         
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