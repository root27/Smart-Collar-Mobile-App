import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/RegisterScreen";
import { UserProvider } from "./hooks/userContext";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();
{/*
const globalScreenOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: '#2C68CD',
  },
  headerTintColor: 'white',
  
  Login: {
    headerTitle: "Login",
    headerStyle: {
      backgroundColor: '#2C68CD',
    },
    headerTintColor: 'white',
   
  },

  Register: {
    headerTitle: "Register",
    headerStyle: {
      backgroundColor: '#2C68CD',
    },
    headerTintColor: 'white',
    headerLeft: () => (
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }
        }
      />
    ),

  },
  Home: {
    headerTitle: "Home",
    headerStyle: {
      backgroundColor: '#2C68CD',
    },
    headerTintColor: 'white',
    headerLeft: null, 

  }



  };*/}

export default function App() {

 
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name="Login" component={LoginScreen} options={
            {
              headerShown: true,
              headerStyle: {
                backgroundColor: '#2C68CD',
              },
              headerTintColor: 'white',
              headerTitle: "Login",
              
            }
          } />
          <Stack.Screen name="Register" component={RegisterScreen} options={
            {
              headerShown: true,
              headerStyle: {
                backgroundColor: '#2C68CD',
              },
              headerTintColor: 'white',
              headerTitle: "Register",
             }
             } />
          <Stack.Screen name="Home" component={HomeScreen} options={
            {
              headerShown: false,
              headerStyle: {
                backgroundColor: '#2C68CD',
              },
              headerTintColor: 'white',
              headerTitle: "Home",
              headerLeft: () => (<Text></Text>)
              
            }
          }   />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}


