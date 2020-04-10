import React, {useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import {AppLoading} from "expo"
import * as Font from "expo-font"

import Colors from "../constants/colors";

const fetchData = () => {
  return Font.loadAsync({
    roboto: require("../assets/fonts/roboto.ttf")
  });
}

const Header = props => {
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.headerBase} >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  headerTitle: {   
    color: 'white',
    fontSize: 48,
    fontFamily: 'roboto'
  },
});

export default Header;