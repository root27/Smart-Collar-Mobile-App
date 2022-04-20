import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.mail} placeholder="Email" />
      <TextInput style={styles.password} placeholder="Password" secureTextEntry />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mail: {
        borderRadius: 15,
        width: '70%',
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    password: {
        borderRadius: 15,
        width: '70%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
    },
    button: {
        
        width: '40%',
        backgroundColor: '#2f95dc',
        padding: 10,
        marginTop: 20,
        borderRadius: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    signup: {
        marginTop: 20,
        color: '#1e90ff',
        textAlign: 'center',
    }
})