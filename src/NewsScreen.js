import { View, Text, Appearance, StatusBar, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Constant from '../Constant';
import axios from "axios";
const NewsScreen = () => {
  const theme = Appearance.getColorScheme();
  const [newsdata, setnewsdata] = useState([])
  useEffect(() => {
    FlatlistApi()
  }, []);
  const renderlist = ({ item }) => {

    return (
      <SafeAreaView>
      <View style={style.flatlistContainer}>
   
        <Text>Summary :{item.summary}
        </Text>
      </View>
    
     </SafeAreaView>
    )
  }
  const FlatlistApi = async () => {
    // console.log("call api====>",email)

    await axios({
      method: "Get",
      url: "https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business",
      headers: {
        // 'x-api-key':"1_rGhxnKZFCfil3RdZQh5oHZufe1FWIJ4nCWQbsADMM"
      }
    }).then(function (response) {
      setnewsdata(response.data.articles)
      console.log("Response",response)

      

      // console.log("response", response.data.data)
      //  console.log("Flat===>",flatlistdata)
    })
  }
  return (
    <View style={{flex:1}}>
    <Text style={{color:"black" ,textAlign:"center"}}>News</Text>
      <StatusBar
        backgroundColor={theme === "light" ? Constant.color : "#000"}
        barStyle={theme === "light" ? "light-content" : "light-content"}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={newsdata}
          renderItem={renderlist}
          keyExtractor={item => item._id}
          extraData={newsdata}
        />
      </View>
   
    </View>
  )
}
const style=StyleSheet.create({
  flatlistContainer:{
    borderWidth: 1.2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    borderColor: Constant.primary,
    flexDirection: "row",
    justifyContent: "space-between"
  },
})
export default NewsScreen

