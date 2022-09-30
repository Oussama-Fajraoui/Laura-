import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import UsersCard from "../Components/UsersCard";
import Usersapi from "../apis/Users";

const Users = ({navigation})=> {

    const [user,setUsers] = useState([])

    useEffect(()=> {
        getUsersFromAPI()
    },[])

    // const usersResponse = async() =>{
    //     const response = await Usersapi.get('users')
    //     console.log(response.data)
    // }

    function getUsersFromAPI() {
        Usersapi.get('users')
        .then(function(response){
            console.log(response.data)
            setUsers(response.data)
           
        })
        .catch(function(error){
            console.log(error)
        })
    }



    return (
        <ScrollView style={{backgroundColor:'gray'}}>
            
        <FlatList data = {user.users}
        keyExtractor = {(items, index)=> 'key' + index}
        renderItem = {({item}) => {
            return (
            <UsersCard item = {item} /> 
            
            )
        }}
        />  
 <View>
        <TouchableOpacity
          style={styles.button}
            onPress={()=>navigation.navigate("oneUser")}
          >
          <Text style={styles.btnText}>Add</Text>
           </TouchableOpacity>
            </View>  
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    button: {
        width: 150,
        marginTop: -15,
        backgroundColor: "green",
        padding: 15,
        borderRadius: 5,
        alignSelf: "center"
      },
      btnText: {
        color: "white",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
      },
})

export default Users