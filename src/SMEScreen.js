import { View, Text ,Appearance,StatusBar} from 'react-native'
import React from 'react'
import Constant from '../Constant';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Live from "./Mainline/Live";
import Listed from './Mainline/Listed';
import Upcomming from './Mainline/Upcomming';
const SMEScreen = () => {
    const theme = Appearance.getColorScheme();
    const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{flex:1}}>
    <StatusBar
    backgroundColor={theme === "light" ? Constant.color : "#000"}
    barStyle={theme === "light" ? "light-content" : "light-content"}
  />
  <Tab.Navigator screenOptions={{
    tabBarLabelStyle: { height: 25 },
    tabBarStyle: { backgroundColor: Constant.color },

}}>
    <Tab.Screen name="Live" component={Live} options={{
       
        tabBarLabel:({focused})=>{
            return focused? (<Text style={{fontSize: 15,
                        fontFamily: 'Poppins-Bold',color:"white"}}>Live </Text>):(<Text style={{fontSize: 15,
                            fontFamily: 'Poppins-Medium',color:"white"}}>Live </Text>)
        },
        tabBarActiveTintColor: "white",
        headerTitleAlign: "center",
        headerTintColor: '#fff',
       
        tabBarLabelStyle:({focused})=> {
            console.log("focus",focused)
            focused ? { fontSize: 20,
                fontFamily: 'Poppins-Bold',color:"white"}:{ fontSize: 25,
                    fontFamily: 'Poppins-Light'}
        }
    }} />
    <Tab.Screen name="Upcomming" component={Upcomming}options={{
        tabBarLabel:({focused})=>{
            return focused? (<Text style={{fontSize: 15,
                        fontFamily: 'Poppins-Bold',color:"white"}}>Upcomming </Text>):(<Text style={{fontSize: 15,
                            fontFamily: 'Poppins-Medium',color:"white"}}>Upcomming </Text>)
        },
        tabBarActiveTintColor: "white",
        headerTitleAlign: "center",
        headerTintColor: '#fff',
        tabBarLabelStyle:({focused})=> {
            focused ? { fontSize: 18,
                fontFamily: 'Poppins-Bold',color:"white"}:{ fontSize: 18,
                    fontFamily: 'Poppins-Light'}
        }
    }} />
    <Tab.Screen name="Listed" component={Listed} options={{
        tabBarLabel:({focused})=>{
            return focused? (<Text style={{fontSize: 15,
                        fontFamily: 'Poppins-Bold',color:"white"}}>Listed </Text>):(<Text style={{fontSize: 15,
                            fontFamily: 'Poppins-Medium',color:"white"}}>Listed </Text>)
        },
        tabBarActiveTintColor: "white",
        headerTitleAlign: "center",
        headerTintColor: '#fff',
        tabBarLabelStyle:({focused})=> {
            focused ? { fontSize: 18,
                fontFamily: 'Poppins-Bold',color:"white"}:{ fontSize: 18,
                    fontFamily: 'Poppins-Light'}
        }
    }}/>
</Tab.Navigator>
    </View>
  )
}

export default SMEScreen