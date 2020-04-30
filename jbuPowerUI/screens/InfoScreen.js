import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Colors from "../constants/colors";

const URL = ({ children }) => <Text style={{ color: Colors.data }}>{children}</Text>

const InfoScreen = (props) => {
  return(
    <View style={{flex: 1}}>
      <View style={styles.screen}>
        <Text style={styles.text}>This app was developed by Joseph Hahn</Text>
        <Text style={styles.text}>Email: hahnj@jbu.edu</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.header_text}>Data Sources:</Text> 
      </View>
      <View style={styles.data_sources}>
        <Text style={styles.text}>Weather Data: <URL>https://openweathermap.org</URL></Text>
        <Text style={styles.text}>Solar Data: <URL>https://api.enphaseenergy.com/</URL></Text>
        <Text style={styles.text}>Power Use and Cost: <URL>https://electricityplans.com</URL></Text>
        <Text style={styles.text}>Tesla and iPhone Battery Capacities: <URL>{"\n"}https://en.wikipedia.org</URL></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.1
  },
  header_text: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: Colors.primary
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: Colors.primary,
  },
  data_sources: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around"
  }
});
export default InfoScreen;