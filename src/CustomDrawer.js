import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import React,{useState} from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Constant from '../Constant'

const CustomDrawer = (props) => {
    width: Dimensions.get('window').width
    height: Dimensions.get('window').height
    const [loggedin,setLoggedin]=useState(false)
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: Constant.color }}>

                <View style={{ backgroundColor: Constant.color ,paddingVertical:30 , paddingHorizontal:20 }}>
                <View style={{flexDirection:"row" ,justifyContent:"space-between" , flex:1 }}>
                    <View  style={{flex:0.03}}>
                        <Image source={require("./../assets/avtar.png")} style={{height:height/15,width:width/8 , resizeMode:"contain" , borderRadius:height/2}} />
                    </View>
                    <View style={{marginLeft:20 , flex:0.43}}>
                        <Text style={{ color: "white", fontFamily: "Poppins-Regular", fontSize: 15, fontWeight: "400" }}>Welcome
                        </Text>
                        <Text style={{ color: "white", fontFamily: "Poppins-Regular", fontSize: 15, fontWeight: "700" }}>Rakesh Jain
                        </Text>
                    </View>
                    <View style={{justifyContent:"center" , flex:0.27}}>
                    <Image source={require("./../assets/Setting.png")} style={{height:height/35, resizeMode:"contain" }} />
                    </View>
                    </View>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, paddingVertical: 10 }}>
                    <DrawerItemList {...props} />
                    </View>
                
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer