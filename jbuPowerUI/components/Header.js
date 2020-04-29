import React, {useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

const Header = props => {
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
    height: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  headerTitle: {   
    color: 'white',
    fontSize: 48,
    fontFamily: "Roboto"
  },
});

export default Header;