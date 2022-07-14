import { View, Text } from 'react-native'
import React from 'react'
import { UserContext } from "../hooks/userContext"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Devices from "../tabScreens/Devices.js"
import Profile from "../tabScreens/Profile.js"
import {Icon} from "@rneui/themed"


const Tab = createBottomTabNavigator()

const HomeScreen = () => {




    const { user } = React.useContext(UserContext)
  return (
    <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} options={
            {
                tabBarLabel: "Profile",
                tabBarIcon: () => (
                    <Icon name="person" 
                    type="material"

                    size={28} />
                )
                
            }
        } />
        <Tab.Screen name="My Devices" component={Devices} options={
            {
                tabBarLabel: "My Devices",
                tabBarIcon: () => (
                    <Icon
                        name="devices"
                        size={28}
                        />
                )

            }
        } />
    
    </Tab.Navigator>
  )
}

export default HomeScreen