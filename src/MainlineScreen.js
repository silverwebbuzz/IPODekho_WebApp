import { View, Text, StatusBar, Appearance } from 'react-native'
import React from 'react'
import Constant from '../Constant';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Live from "./Mainline/Live";
import Listed from './Mainline/Listed';
import Upcomming from './Mainline/Upcomming';


const MainlineScreen = () => {
    const theme = Appearance.getColorScheme();
    const Tab = createMaterialTopTabNavigator();
   
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={theme === "light" ? Constant.color : "#000"}
                barStyle={theme === "light" ? "light-content" : "light-content"}
            />
            <Tab.Navigator screenOptions={{
                tabBarLabelStyle: { height: 20 },
                tabBarStyle: { backgroundColor: Constant.color },
                tabBarOptions:{  indicatorStyle: { backgroundColor: 'red', height: '100%' } }
                // indicatorStyle: { backgroundColor: 'black', opacity: 1 },
              
           
            }}>
                <Tab.Screen name="Live" component={Live} options={{
                   
                    tabBarLabel:({focused})=>{
                        return focused? (<Text style={{fontSize: 15,
                                    fontFamily: 'Poppins-Bold',color:"white"}}>Live </Text>):( <View><Text style={{fontSize: 15,
                                        fontFamily: 'Poppins-Medium',color:"white"}}>Live </Text>
                                       </View>)
                    },
                    tabBarActiveTintColor: "white",
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                
                   
                    // tabBarLabelStyle:({focused})=> {
                    //     focused ? { fontSize: 15,
                    //         fontFamily: 'Poppins-Bold',color:"white"}:{ fontSize: 15,
                    //             fontFamily: 'Poppins-Light'}
                    // }
                }} />
                <Tab.Screen name="Upcomming" component={Upcomming} options={{
                    tabBarLabel:({focused})=>{
                        return focused? (<Text style={{fontSize: 15,
                                    fontFamily: 'Poppins-Bold',color:"white"}}>Upcomming </Text>):(<Text style={{fontSize: 15,
                                        fontFamily: 'Poppins-Medium',color:"white"}}>Upcomming </Text>)
                    },
                    tabBarActiveTintColor: "white",
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    tabBarLabelStyle:({focused})=> {
                        focused ? { fontSize: 15,
                            fontFamily: 'Poppins-Bold',color:"white"}:{ fontSize: 15,
                                fontFamily: 'Poppins-Medium'}
                    }
                }} />
                <Tab.Screen name="Listed" component={Listed} options={{
                    tabBarLabel:({focused})=>{
                        return focused? (<Text style={{fontSize: 15,
                                    fontFamily: 'Poppins-Bold',color:"white"}}>listed </Text>):(<Text style={{fontSize: 15,
                                        fontFamily: 'Poppins-Medium',color:"white"}}>listed </Text>)
                    },
                    tabBarActiveTintColor: "white",
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    tabBarLabelStyle:({focused})=> {
                        focused ? { fontSize: 15,
                            fontFamily: 'Poppins-Bold',color:"white"}:{ fontSize: 15,
                                fontFamily: 'Poppins-Medium'}
                    }
                }}/>
            </Tab.Navigator>
           
        </View>
    )
}

export default MainlineScreen