import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import React from "react"
import { View } from "react-native";
import { Pokemon } from "../api";
import { TabParamList } from "../navigation/types";
import Text from "../components/Text"

// type Props = MaterialTopTabScreenProps<TabParamList , "Abilities">

interface Props extends MaterialTopTabScreenProps<TabParamList, "Abilities">{
    abilities:Pokemon["abilities"]
}


const Abilities = (props:Props) => {
    console.log(props.abilities);
    console.log(props.navigation);
    console.log(props.route)


    

    return(
        <View style={{flex:1}}>
            <Text>Abilities</Text>
            {props.abilities.map((item:any) => {
                return(
                    <Text key={item.slot} >{item.ability.name}</Text>
                )
            })}
        </View>
    )
}

export default Abilities