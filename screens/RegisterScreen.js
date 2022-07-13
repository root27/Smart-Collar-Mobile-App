import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Input ,Text,Button} from "@rneui/themed"
import app from "../firebase_config.js"



const auth = app.auth()

export default function RegisterScreen({ navigation }) {

  


  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


useLayoutEffect(() => {
  navigation.setOptions({
    headerTitle: 'Register',
    headerBackTitle: 'Back to Login',
  })
}, [navigation])

  const handleRegister = async(email, password) => {
    await auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Successfully registered')
        navigation.navigate('Login')
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
      <Text h3 style={{marginBottom: 30}}>Create an Account</Text>

      <View style={styles.inputContainer}>
        <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)} />
        <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password" type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
      </View>

      <Button onPress={() => handleRegister(email, password)} raised containerStyle={styles.button} title="Register" />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: 200
  },
  inputContainer: {
    width: 300,
  }
})