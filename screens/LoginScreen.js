import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, Input } from "@rneui/themed"


export default function LoginScreen() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password" secureTextEntry type="Password" value={password} onChangeText={(text) => setPassword(text)} />
      </View>

      <Button containerStyle={styles.button} title={"Login"}  />
      <Button containerStyle={styles.button} type="outline"  title={"Register"} />
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