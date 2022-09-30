import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, Touchable, TouchableOpacity} from "react-native";

const {width, height} = Dimensions.get('window')

const UsersCard = ({item})=> {
    return (
        <TouchableOpacity style = {styles.cardView}>
            <Image style={styles.image} source = {{uri: item.image}} />
            <View style={{flexDirection: "row"}}>
                <Text style={styles.title}>Firstname and last Name : </Text>
            <Text style={styles.description}>{item.firstName}  </Text>
            <Text style={styles.description}>{item.lastName}</Text>
            </View>
            <Text></Text>
            <View style = {{flexDirection:"row"}}>
            <Text style={styles.title}>Age : </Text>
            <Text style={styles.description}>{item.age}</Text>
            </View>
            <Text></Text>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.title}>Gender : </Text>
            <Text style={styles.description}>{item.gender}</Text>
            </View>
            <Text></Text>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.title}>Email : </Text>
            <Text style={styles.description}>{item.email}</Text>
            </View>
            <Text></Text>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.title}>Phone Number : </Text>
            <Text style={styles.description}>{item.phone}</Text>
            </View>
            <Text></Text>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.title}>User Name : </Text>
            <Text style={styles.description}>{item.username}</Text>
            </View>
            <Text></Text>
            <View style={{flexDirection: "row"}}>
            <Text style={styles.title}> Password : </Text>
            <Text style={styles.description}>{item.password}</Text>
            </View>
            <Text></Text>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.title}>BirthDate : </Text>
            <Text style={styles.description}>{item.birthDate}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        margin: width * 0.05,
        borderRadius: width * 0.03,
        shadowColor: "#000",
        shadowOffset: {width:5, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginLeft: 8,
        color: "black",
        fontSize: 14,
        fontWeight: 'bold'
    },
    image: {
        width: width,
        height: height/2 ,
        marginLeft: width * 0.02,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    description: {
        color: 'gray',
        fontSize: 15
    }
})

export default UsersCard