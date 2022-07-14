import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { UserContext } from '../hooks/userContext'
import {Avatar} from "@rneui/themed"

const Profile = () => {

    const { user, name } = React.useContext(UserContext)

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Avatar size={70} rounded source={{uri: "https://gravatar.com/avatar/085950547bd79b1fb0fc74d03316863d?s=200&d=mp&r=g"}} />
            
            <Text style={styles.mail}>{user.email}</Text>
            <Text style={styles.info}>Your id: {user.uid}</Text>

        </View>
       
    </SafeAreaView>

  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    info:{
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"

    },

    mail : {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign: "center"

    },



    header: {
        flex: 1,
        
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
    }
  

})