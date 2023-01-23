import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainlineScreen from './src/MainlineScreen';
import SMEScreen from './src/SMEScreen';
import NewsScreen from './src/NewsScreen';
import OfferScreen from './src/OfferScreen';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Constant from './Constant';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/CustomDrawer';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator screenOptions={{
      tabBarStyle: { height:"10%", paddingTop: 15, fontFamily: 'Poppins-Bold' }

    }}>

      <Tab.Screen name="Mainline IPO" component={MainlineScreen} options={{
        tabBarActiveTintColor: "#009270",
        headerTitleAlign: "center",
        tabBarLabel: 'Mainline',
        tabBarLabelPosition: "below-icon",
        headerStyle: {
          backgroundColor: Constant.color,

        },
        headerTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: 'Poppins-Bold',
          paddingBottom: 10,

        },


        tabBarIcon: ({ focused }, tintColor) => (
          focused ?
            <Image
              style={{ height: "100%", resizeMode: "contain" ,}}
              source={require('./assets/mainline.png')
              } /> : <Image
              style={{ height: "100%", tintColor: "grey", resizeMode: "contain" }}
              source={require('./assets/mainline.png')
              } />
        ),
        headerLeft: ({navigation}) => (
          <TouchableOpacity style={{ width: "50%" , marginLeft:20 , resizeMode:"contain" }} onPress={() => navigation.openDrawer()}>
              <Image
                style={{
                  width: "50%", resizeMode: "contain" 
                }}
                source={require('./assets/Drawericon.png')}
              ></Image>
            </TouchableOpacity>


        )
      }} />
      <Tab.Screen name="SME IPO" component={SMEScreen} options={{
        tabBarLabel: 'SME',
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#009270",

        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: 15,
          paddingBottom: 10,

        },
        headerStyle: {
          backgroundColor: Constant.color,

        },
        headerTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: 'Poppins-Bold',
          paddingBottom: 10,

        },

        tabBarIcon: ({ focused }, tintColor) => (
          focused ?
            <Image
              style={{ height:"120%", resizeMode: "contain", tintColor: "#009270" }}
              source={require('./assets/sme.png')
              } /> : <Image
              style={{ height:"120%", tintColor: "grey", resizeMode: "contain" }}
              source={require('./assets/sme.png')
              } />
        )
        ,
        headerLeft: ({navigation}) => (
        <TouchableOpacity style={{ width: "50%" , marginLeft:20 , resizeMode:"contain"}} onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                width: "50%", resizeMode: "contain"
              }}
              source={require('./assets/Drawericon.png')}
            ></Image>
          </TouchableOpacity>


        )
      }} />
      <Tab.Screen name="News" component={NewsScreen} options={{
        tabBarLabel: 'News',
        tabBarActiveTintColor: "#009270",
        headerTitleAlign: "center",

        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: 15,
          paddingBottom: 10,

        },
        headerStyle: {
          backgroundColor: Constant.color,

        },
        headerTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: 'Poppins-Bold',
          paddingBottom: 10,

        },

        tabBarIcon: ({ focused }, tintColor) => (
          focused ?
            <Image
              style={{ height: "120%", resizeMode: "contain", tintColor: "#009270" }}
              source={require('./assets/news.png')
              } /> : <Image
              style={{ height: "120%", tintColor: "grey", resizeMode: "contain" }}
              source={require('./assets/news.png')
              } />
        )
        ,
        headerLeft: ({navigation}) => (
        <TouchableOpacity style={{ width: "50%" , marginLeft:20 }} onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                width: "50%", resizeMode: "contain"
              }}
              source={require('./assets/Drawericon.png')}
            ></Image>
          </TouchableOpacity>


        )
      }} />

      <Tab.Screen name="Offers" component={OfferScreen} options={{
        tabBarLabel: 'Offers',
        tabBarActiveTintColor: "#009270",
        headerTitleAlign: "center",

        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: 15,
          paddingBottom: 10,

        },
        headerStyle: {
          backgroundColor: Constant.color,

        },
        headerTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: 'Poppins-Bold',
          paddingBottom: 10,

        },

        tabBarIcon: ({ focused }, tintColor) => (
          focused ?
            <Image
              style={{ height:"120%", resizeMode: "contain", tintColor: "#009270" }}
              source={require('./assets/offers.png')
              } /> : <Image
              style={{ height:"120%", tintColor: "grey", resizeMode: "contain" }}
              source={require('./assets/offers.png')
              } />
        )
        ,
        headerLeft: ({navigation}) => (
        <TouchableOpacity style={{ width: "50%" , marginLeft:20 }} onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                width: "50%", resizeMode: "contain"
              }}
              source={require('./assets/Drawericon.png')}
            ></Image>
          </TouchableOpacity>


        )
      }} />
    </Tab.Navigator>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Drawer.Navigator screenOptions={{ headerShown: false ,  drawerActiveBackgroundColor: Constant.color, drawerActiveTintColor: "#fff"  }} drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen component={MyTabs} name={"MainlineIPO"} />
        </Drawer.Navigator>

      </SafeAreaProvider>
    </NavigationContainer>
  );
}