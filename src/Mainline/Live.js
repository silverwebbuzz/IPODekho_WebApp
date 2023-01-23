import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Constant from '../../Constant';




const Live = () => {
  width = Dimensions.get('window').width,
    height = Dimensions.get('window').height

  // const renderPercent = data.map((value) => {
  //   return <Percent color={handleColors(value)}>{value}</Percent>;
  // });
  var percent =(item)=> ( item.offerPrice / 100) * item.premiumgmp;

  const [data, setdata] = useState([
    {
      name: "Eline Electronic ltd pradhumansinh zala ",
      id: "1",
      offerdate: "Dec 20, 2022 to Dec 25, 2022 ",
      offerPrice: "100",
      lotsize: "60 Shares",
      subs: "0.7 Times ",
      premiumgmp: "10",
      status: "live",
      url: "https://picsum.photos/1200/600"
    },
    {
      name: "ABC Electronic ltd ",
      id: "2",
      offerdate: "Dec 20, 2022 to Dec 25, 2022",
      offerPrice: "247",
      lotsize: "600 Shares",
      subs: "0.9 Times",
      premiumgmp: " 8",
      status: "live",
      url: "https://picsum.photos/200"
    },
    {
      name: "silver webbuzz pvt ltd",
      id: "3",
      offerdate: "Dec 20, 2022 to Dec 25, 2022",
      offerPrice: "447",
      lotsize: "600 Shares",
      subs: "0.9 Times",
      premiumgmp: " 8",
      status: "live",
      url: "https://www.silverwebbuzz.com/images/logo2.png"
    },
    {
      name: "google Electronic ltd",
      id: "4",
      offerdate: "Dec 20, 2022 to Dec 25, 2022",
      offerPrice: "147",
      lotsize: "600 Shares",
      subs: "0.9 Times",
      premiumgmp: " 8",
      status: "live",
      url: "https://picsum.photos/200"
    }
  ]);

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={data}
        renderItem={({ item }) =>
          <View style={{
            marginTop: 10, borderRadius: 10, backgroundColor: "white",
            paddingHorizontal: 15, paddingVertical: 20,
            shadowColor: 'black',
            shadowOffset: {
              width: 3,
              height: 3,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,
            backgroundColor: 'white',
          }}>
            <View style={{ borderTopRightRadius: 10, position: "absolute", right: 0, backgroundColor: "red", paddingHorizontal: 10, paddingVertical: 3 }}>
              <Text style={{ fontFamily: "Poppins-regular", fontSize: 12, fontWeight: "400", color: "white" }}>Live</Text>
            </View>

            <View style={{ flexDirection: "row" }}>

              <View style={{ alignSelf: "center", justifyContent: "center", borderWidth: 0.5, height: height / 10, width: width / 3.5, borderColor: Constant.color }}>
                <Image style={{ borderRadius: 5, alignSelf: "center", height: height / 12, width: width / 4, resizeMode: "contain" }} source={{ uri: item.url }} />
              </View>

              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text numberOfLines={3} style={{ width: "85%", fontSize: 18, color: "black", marginLeft: 10, fontFamily: "Poppins-Light", fontWeight: "700" }}>{item.name}</Text>
              </View>



            </View>
            <View style={{ borderWidth: 0.5, marginVertical: 10, borderColor: "#EDF0F1", backgroundColor: "#EDF0F1" }}>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flex: 0.9 }}>
                <View>
                  <Text style={styles.RenderTitle}>Offer date
                    {"\n"}<Text numberOfLines={2} style={{ ...styles.RenderInfo, width: "100%"  }}>{item.offerdate}</Text></Text>
                </View>

                <View style={{ borderWidth: 0.5, marginVertical: 10, borderColor: "#EDF0F1", backgroundColor: "#EDF0F1", }}>
                </View>



                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 0.5 }}>
                    <Text style={styles.RenderTitle}>Lot size
                      {"\n"}<Text style={styles.RenderInfo}>{item.lotsize}</Text></Text>
                  </View>
                  <View style={{ borderWidth: 0.5, borderColor: "#EDF0F1", backgroundColor: "#EDF0F1", }}>
                  </View>
                  <View style={{ flex: 0.5, marginLeft: 15 }}>
                    <Text style={styles.RenderTitle}>Subs
                      {"\n"}<Text style={styles.RenderInfo}>{item.subs}</Text></Text>
                  </View>

                </View>

              </View>
              <View style={{ flex: 0.5, flexWrap: "wrap", flexShrink: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ borderWidth: 0.5, marginRight: 10, borderColor: "#EDF0F1", backgroundColor: "#EDF0F1", height: "100%" }}>
                  </View>
                  <View>
                    <Text style={styles.RenderTitle}>Offer Price
                      {"\n"}<Text style={styles.RenderInfo}>{item.offerPrice}</Text></Text>
                  </View>
                </View>
                <View style={{ borderWidth: 0.5, marginVertical: 10, borderColor: "#EDF0F1", backgroundColor: "#EDF0F1", width: "100%" }}>
                </View>
                <View style={{ flexDirection: "row", flexDirection: "row" }}>
                  <View style={{ borderWidth: 0.5, marginRight: 10, borderColor: "#EDF0F1", backgroundColor: "#EDF0F1" }}>
                  </View>
                  <View>
                    <Text style={styles.RenderTitle}>Premium(GMP)
                      {"\n"}<Text style={styles.RenderInfo}>₹{item.premiumgmp}<Text> ({percent(item)})%</Text></Text></Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={{ textAlign: "center", marginTop: 10, color: Constant.color, fontFamily: "Poppins-Regular", fontWeight: "400" }}>IPO dates & price are finalized
              </Text>
            </TouchableOpacity>
          </View>
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  RenderInfo: {
    color: "black",
    fontFamily: "Poppins-Regular",
    fontWeight: "700",
    fontSize: 15,
 
  
   

  },
  RenderTitle: {
    color: "#787878",
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 12,
   

 
  },
  positiveStyle:{
    color:"Green"
  },
  negativeStyle:{
    color:"red"
  }
});

export default Live;