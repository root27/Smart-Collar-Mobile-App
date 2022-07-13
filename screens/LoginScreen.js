import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, Input } from "@rneui/themed"
import app from "../firebase_config.js"

const auth = app.auth()

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")


    const handleLogin = async () => {
        await auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                alert("Successfully logged in")
            }
            )
            .catch(error => {
                console.log(error)
                alert(error.message)
            }
            )
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password" secureTextEntry type="Password" value={password} onChangeText={(text) => setPassword(text)} />
      </View>

      <Button onPress={() => handleLogin()} containerStyle={styles.button} title={"Login"}  />
      <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline"  title={"Register"} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      backgroundColor: "white",
      padding : 10,
    },
    inputContainer: {
        width: 300
    },
    button:{
        width: 200,
        marginTop: 20,

    }

 
})