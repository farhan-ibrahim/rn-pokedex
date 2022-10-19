import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View , 
  Image , 
  SafeAreaView, 
  FlatList, 
  useWindowDimensions,
  Pressable,
  Animated,
  Easing
} from 'react-native';
import Text from "../components/Text";
import { Pokemon } from "../api";
import { PokemonStackParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MotiView, MotiText } from 'moti'
// import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';


interface Props{
    item:Pokemon;
    index:number;
    navigation:NativeStackScreenProps<PokemonStackParamList, 'Pokedex'>["navigation"]
}

const Tile = ({item , index , navigation}:Props) => {
    const WIDTH = useWindowDimensions().width;

   



    // const progress = useSharedValue(0)

    // const animatedStyles = useAnimatedStyle(() => {
    //   return {
    //     opacity:withDelay(500 * index , progress.value),
    //     transform: [{ scaleX:withDelay(500*index, withTiming(0.9, {
    //       duration: 500,
    //       // easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    //     })) }],
    //     // width: withTiming(150, {
    //     //   duration: 500,
    //     //   easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    //     // }),
    //   };
    // });

    // useEffect(() => {
    //     progress.value = 1
    // },[])




    // Scale when press
    const scale = new Animated.Value(1);
    const rotate = new Animated.Value(0);



    const [ pressed , setPressed ] = useState(false)

    const onPress = () => {
      setPressed(true)
        // Animated.timing(scale,{
        //     toValue:1.2,
        //     duration:300,
        //     useNativeDriver:true,
        //     easing:Easing.ease
        // }).start(() => {
        //   Animated.timing(scale,{
        //     toValue:1,
        //     duration:300,
        //     useNativeDriver:true
        //   }).start(() => {
        //     navigation.navigate("PokemonDetail",{
        //       pokemon:item
        //     })
        //   })
        // })

    

        

       

      }

    const opacity = new Animated.Value(0);
    

    // useEffect(() => {
    //   Animated.timing(opacity, {
    //     toValue:1,
    //     duration:1500,
    //     delay:500 * index,
    //     useNativeDriver:true,
    //   }).start()
    // },[])


    return(
      <MotiView 
        from={{opacity:0}}

        animate={{opacity:1}}
        transition={{
          type: 'timing',
          duration: 350,
          delay:500 * index
        }}
      
        style={[
            styles.item ,
            {
                width:WIDTH * .4,
                transform:[{
                  scale:pressed ? 1 : 0.8
                
                }]
                
            }
        ]}
        >
        <Pressable onPress={onPress} >
          <Text bold color={"gray"} >{item.name.toUpperCase()}</Text>
          <Animated.Image 
            source={{uri:item.image[0]}}
            style={{
              width:100,
              height:100,
             
            }}
  
          />
          <View style={styles.typeContainer}>
          {item.types.map((type , index) => (
            <View style={styles.type} key={index.toString()}>
              <Text color="white" >{type.type.name}</Text>
            </View>
          ))}
          </View>
          
        </Pressable>
      </MotiView>
    )
}

const styles = StyleSheet.create({
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
})

export default Tile;