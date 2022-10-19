import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import React from "react"
import { StyleSheet, View } from "react-native";
import { Pokemon } from "../api";
import Text from "../components/Text"
import { TabParamList } from "../navigation/types";

interface Props extends MaterialTopTabScreenProps<TabParamList, "Stats">{
    stats:Pokemon["stats"]
}


const Stats = (props:Props) => {
    return(
        <View>
            {props.stats.map((el:Pokemon["stats"][0] ,i:number) => {
                return(
                    <View key={i.toString()} style={{flexDirection:"row", padding:10}}>
                    <Text style={{flex:1/3}}>{el.stat.name}</Text>
                        <View style={styles.base}>
                            <View 
                                style={[styles.value,{
                                    width:`${el.base_stat/100*100}%`,
                                    backgroundColor:"blue"
                                }]}
                            />
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        width:"100%",
        flex:2/3,
        backgroundColor:"lightgray",
        height:10,
        borderRadius:8
    },
    value:{
        // flex:2/3,
        height:10,
        borderRadius:8,
    }
})

export default Stats