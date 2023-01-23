
import { View, Text ,Appearance , StatusBar} from 'react-native'
import React from 'react'
import Constant from '../Constant';
const OfferScreen = () => {
    const theme = Appearance.getColorScheme();
  return (
    <View>
    <StatusBar
    backgroundColor={theme === "light" ? Constant.color : "#000"}
    barStyle={theme === "light" ? "light-content" : "light-content"}
  />
      <Text>OfferScreen</Text>
    </View>
  )
}

export default OfferScreen