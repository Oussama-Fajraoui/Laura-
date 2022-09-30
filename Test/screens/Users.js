import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import UsersCard from "../Components/UsersCard";
import oneUser from "../Components/oneUser";
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
        <View>
        <FlatList data = {user.users}
        keyExtractor = {(items, index)=> 'key' + index}
        renderItem = {({item}) => {
            return (
            <UsersCard item = {item} /> 
            )
        }}
        />
        </View>
    )
}

export default Users