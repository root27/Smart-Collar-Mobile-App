import { View, Text,SafeAreaView,Modal,TextInput,Button,Dimensions} from 'react-native'
import React from 'react'
import { UserContext } from '../hooks/userContext'
import {Icon} from "@rneui/themed"


const Devices = () => {

    const {width,height} = Dimensions.get("window")

    const { user } = React.useContext(UserContext)


    const [devicename,setDevicename] = React.useState("")

    const [deviceid,setDeviceid] = React.useState("")

    const [visible, setVisible] = React.useState(false);

    const handleClose = () => {
        setVisible(false);
    }

    const handleOpen = () => {
        setVisible(true);
    }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, marginTop: 50, marginBottom: 25 }}>You have no devices</Text>
              <Icon name="add-circle" type="material" size={50} onPress={() => handleOpen() } />
          </View>

            <Modal visible={visible} animationType="slide"
                onRequestClose={() => handleClose()}>
                <View style={{ flex: 1, alignItems:"center" }}>
                        <View style={{  alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    elevation: 5,
                                    transform: [{ translateX: -(width * 0.4) }, 
                                                { translateY: -90 }],
                                    height: 180,
                                    width: width * 0.8,
                                    backgroundColor: "#fff",
                                    borderRadius: 7, }}>
                            <TextInput style={{ width: "80%",
                                            borderRadius: 15,
                                            paddingVertical: 8,
                                            paddingHorizontal: 16,
                                            borderColor: "rgba(0, 0, 0, 0.2)",
                                            borderWidth: 1,
                                            marginBottom: 8,}} placeholder="Device name" value={devicename} onChangeText={(e) => setDevicename(e.target.value)}/>
                            <TextInput style={{ width: "80%",
                                                borderRadius: 15,
                                                paddingVertical: 8,
                                                paddingHorizontal: 16,
                                                borderColor: "rgba(0, 0, 0, 0.2)",
                                                borderWidth: 1,
                                                marginBottom: 8, }} placeholder="Device ID" value={deviceid} onChangeText={(e) => setDeviceid(e.target.value)} />
                            <Button title="Add" onPress={() => handleClose()} style={{
                                width: "80%",
                                borderRadius: 15,
                                paddingVertical: 8,

                                paddingHorizontal: 16,
                                borderColor: "rgba(0, 0, 0, 0.2)",
                                borderWidth: 1,
                                marginBottom: 8
                            }} />
                        </View>
                </View>
            </Modal>



      </SafeAreaView>

  )
}

export default Devices

