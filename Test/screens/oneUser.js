import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import React, {useEffect, useState} from "react";
 
const oneUser = ({navigation}) => {

    const [add,setAdd] = useState();
    const [users,setUsers] = useState();


    const handleAddUser = ()  =>{
      setUsers([...users, add])
      setAdd(null)
    }
    return (
        <View>
            <TextInput
            style={styles.textinput} 
            placeholder="FirstName"
            underlineColorAndroid={'transparent'}
            value={add}
            onChangeText={text=> setAdd(text)} 
            />
            <TextInput
            style={styles.textinput} 
            placeholder="LastName"
            underlineColorAndroid={'transparent'}
            value={add}
            onChangeText={text=> setAdd(text)} 
            />
            <TextInput
            style={styles.textinput} 
            placeholder="Age"
            underlineColorAndroid={'transparent'}
            value={add}
            onChangeText={text=> setAdd(text)} 
            />
            <TextInput
            style={styles.textinput} 
            placeholder="Password"
            underlineColorAndroid={'transparent'}
            value={add}
            onChangeText={text=> setAdd(text)} 
            />
            <TouchableOpacity
            style={styles.button}
            // onPress={()=>handleAddUser()}
          >
          <Text style={styles.btnText}>Done</Text>
           </TouchableOpacity>
        </View>
    )
}

export default oneUser;

const styles = StyleSheet.create({
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
    },
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