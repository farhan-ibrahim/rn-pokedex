import { Pressable , View , StyleSheet } from "react-native";
import Text from "./Text";


const TabBar = ({ state, descriptors, navigation, position }:any) => {


    
    return (
        <View style={styles.container}>
            {state.routes.map((route:any, index:any) => {
                const label = route.name;
                const isFocused = state.index === index;


                const onPress = () => {
                    const event = navigation.emit({
                      type: 'tabPress',
                      target: route.key,
                      canPreventDefault: true,
                    });

        
                    if (!isFocused && !event.defaultPrevented) {
                      // The `merge: true` option makes sure that the params inside the tab screen are preserved
                      navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return(
                    <Pressable 
                        key={index.toString()}
                        onPress={onPress}
                        style={styles.tab}
                        accessibilityState={isFocused ? { selected: true } : {}}

                    >
                        <Text>{label}</Text>
                    </Pressable>
                )
            })}

        </View>
       
    );

}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    tab:{
        padding:10,
        width:"25%",
        alignItems:"center",
        borderColor:"gray",
        borderWidth:1
    }
})

export default TabBar