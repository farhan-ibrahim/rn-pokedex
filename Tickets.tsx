
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View , Pressable, SafeAreaView, FlatList } from 'react-native';
import Text from "./Text";
import { PRIMARY } from './Colors';
import { Feather } from '@expo/vector-icons';

interface ITicket {
  id:number;
  title:string;
  description:string;
  status:"IN PROGRESS" | "DONE" | "BACKLOG";
  priority:"HIGH" | "MID" | "LOW";
  category:"ADNEXIO" | "MENIAGA" | "DECORIS";
  createdAt:Date;
  updatedAt:Date;
  createdBy:string;
}

const tickets:ITicket[] = [
    {
      id:1,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    },
    {
      id:2,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    },
    {
      id:3,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    },
    {
      id:4,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    },
    {
      id:5,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    },
    {
      id:6,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    },
    {
      id:7,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    },
    {
      id:8,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    },
    {
      id:9,
      title:"bug",
      description:"need to fix urgently",
      status:"IN PROGRESS",
      priority:"HIGH",
      category:"ADNEXIO",
      createdAt:new Date("12/10/2022"),
      updatedAt:new Date("12/10/2022"),
      createdBy:"Farhan"
    }
  
  ]

const Tickets = () => {
    const TicketCard = ({ticket}:{ticket:ITicket}) => {
        return(
          <View style={styles.item}>
            <Text style={{color:"black"}}>{ticket.title}</Text>
            <Text style={{color:"black"}}>{ticket.description}</Text>
            <Text style={{color:"black"}}>{`Status : ${ticket.status}`}</Text>
            <Text style={{color:"black"}}>{ticket.priority}</Text>
          </View>
        )
      }
    
    const renderItem = ({item, index}:{item:ITicket , index:number}) => {
        return(
          <TicketCard ticket={item} />
        )
      }
      
    const ListEmptyComponent = () => (
        <View>
            <Text>No bugs are recorded. Good job devs!</Text>
        </View>
    )

    const ListFooterComponent = () => (
        <Pressable style={styles.button}>
            <Text color='white' bold >See all</Text>
        </Pressable>
    )

    const ListHeaderComponent = () => (
        <Pressable style={styles.addButton}>
            <Feather name="plus" size={24} color="cyan" />
            <Text color={"cyan"} bold >Add new ticket</Text>
        </Pressable>
    )

    return(
        <SafeAreaView style={{flex:1}}>
            <StatusBar style="auto" />

            <View style={styles.container}>
            <Text>My Ticket</Text>
            <Text style={styles.label} >Backlog</Text>
            <FlatList 
                horizontal
                data={tickets.slice(0,4)}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                ListEmptyComponent={ListEmptyComponent}
                ListFooterComponent={ListFooterComponent}
                showsHorizontalScrollIndicator={false}
            />
            
            <Text style={styles.label} >In Progress</Text>
            <FlatList 
                horizontal
                data={tickets}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
                ListEmptyComponent={ListEmptyComponent}
                ListFooterComponent={ListFooterComponent}
            />
            
            <Text style={styles.label} >Done</Text>
            <FlatList 
                horizontal
                data={tickets}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
                ListEmptyComponent={ListEmptyComponent}
                ListFooterComponent={ListFooterComponent}
            />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding:20,
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
      addButton:{
        height:150,
        alignItems:"center",
        justifyContent:"center",
        padding:16,
        margin:5,
        borderColor:"cyan",
        borderWidth:2
      },
      button:{
        backgroundColor:PRIMARY,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:8
      },
      text:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
      },
      label:{
        textAlign:"left"
      }
})

export default Tickets